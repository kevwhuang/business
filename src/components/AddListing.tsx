import React from 'react';
import { useForm } from 'react-hook-form';

import useStore from '../hooks/useStore';

const defaultValues = {
    name: '',
    description: '',
    address: '',
};

function AddListing(): React.ReactElement {
    const [addListing, listings] = useStore(s => [s.addListing, s.listings]);
    const { formState, handleSubmit, register, reset }
        = useForm<Listing>({ defaultValues, shouldUseNativeValidation: true });

    function onSubmit(data: Listing): void {
        addListing({ id: listings.length + 1, ...data });
    }

    React.useEffect((): void => {
        if (formState.isSubmitSuccessful) reset(defaultValues);
    }, [formState]);

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Add Business</h3>
            <div className="form__input">
                <label htmlFor="input--name">Name</label>
                <input
                    id="input--name"
                    type="text"
                    maxLength={50}
                    required
                    {...register('name')}
                />
            </div>
            <div className="form__input">
                <label htmlFor="input--description">Description</label>
                <input
                    id="input--description"
                    type="text"
                    maxLength={200}
                    required
                    {...register('description')}
                />
            </div>
            <div className="form__input">
                <label htmlFor="input--address">Address</label>
                <input
                    id="input--address"
                    type="text"
                    maxLength={100}
                    required
                    {...register('address')}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddListing;
