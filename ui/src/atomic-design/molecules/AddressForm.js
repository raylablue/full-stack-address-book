import React, {useEffect, useMemo, useState} from 'react';
import {Box, TextField} from "@mui/material";

const AddressForm = ({address}) => {
    const [form, setForm] = useState();

    useEffect(() => {
        setForm(address);
        console.log('address', address)
    }, [address]);

    const printForm = useMemo(() => {
        if (form) {
            return (
                <>
                    <TextField
                        label="Name"
                        defaultValue={form.name}
                        helperText="Name for the person associated with this address"
                    />

                    <TextField
                        label="Address 1"
                        defaultValue={form.address1}
                        helperText="House number and street"
                    />

                    <TextField
                        label="Address 2"
                        defaultValue={form.address2}
                        helperText="Apartment number"
                    />

                    <TextField
                        label="City"
                        defaultValue={form.city}
                    />

                    <TextField
                        label="State"
                        defaultValue={form.state}
                        helperText="State, provience, or territory"
                    />

                    <TextField
                        label="Zip"
                        defaultValue={form.zip}
                        helperText="Zip or postal code"
                    />

                    <TextField
                        label="Phone"
                        defaultValue={form.phone}
                    />
                </>
            );
        }

        return <p>Loading...</p>;
    }, [form]);

    return (
        <Box component="form" marginTop={2}>
            {printForm}
        </Box>
    );
};

export default AddressForm;
