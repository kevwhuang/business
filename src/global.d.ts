interface Actions {
    addListing: (listing: Listing) => void,
    deleteListing: (id: num) => void,
    login: () => void,
    logout: () => void,
    sortListings: () => void,
}

interface Listing {
    address: string,
    description: string,
    id?: number,
    name: string,
}

interface State {
    admin: boolean,
    listings: Listing[],
    sort: string,
}
