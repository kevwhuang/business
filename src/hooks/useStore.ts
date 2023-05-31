import { create } from 'zustand';

import data from '../data/mockaroo.json';

const initialize: State = {
    admin: false,
    listings: [...data.sort((a, b) => a.name > b.name ? 1 : -1)],
    sort: 'asc',
};

const useStore = create<Actions & State>(set => ({
    ...initialize,
    addListing: listing => set(s => ({ listings: [listing, ...s.listings] })),
    deleteListing: id => set(s => ({ listings: s.listings.filter(e => e.id !== id) })),
    login: () => set(() => ({ admin: true })),
    logout: () => set(() => ({ admin: false })),
    sortListings: () => set(s => sort(s)),
}));

function sort(s: State) {
    const copy: Listing[] = [...s.listings];

    if (s.sort === 'asc') {
        copy.sort((a, b) => a.name < b.name ? 1 : -1);
    } else {
        copy.sort((a, b) => a.name > b.name ? 1 : -1);
    }

    return { listings: copy, sort: s.sort === 'asc' ? 'desc' : 'asc' };
}

export default useStore;
