import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { Box, Button, TextField } from "@mui/material";
import SubmitButton from "../atoms/SubmitButton";

const AddressForm = ({address, id}) => {
    const [form, setForm] = useState();

    const handleChange = useCallback((key, {target: value}) => {
        const newForm = form ? {...form} : {};
        newForm[key] = value;
        setForm(newForm);
    },[form]);

    useEffect(() => {
        setForm(address);
        console.log('address form, id', id);
    }, [address, id]);

    const printForm = useMemo(() => {
        if (form) {
            return (
                <>
                    <TextField
                        label="Name"
                        defaultValue={form.name}
                        onChange={(e) => {handleChange('name', e)}}
                        helperText="Name for the person associated with this address"
                    />

                    <TextField
                        label="Address 1"
                        defaultValue={form.address1}
                        onChange={(e) => {handleChange('address1', e)}}
                        helperText="House number and street"
                    />

                    <TextField
                        label="Address 2"
                        defaultValue={form.address2}
                        onChange={(e) => {handleChange('address2', e)}}
                        helperText="Apartment number"
                    />

                    <TextField
                        label="City"
                        defaultValue={form.city}
                        onChange={(e) => {handleChange('city', e)}}
                    />

                    <TextField
                        label="State"
                        defaultValue={form.state}
                        onChange={(e) => {handleChange('state', e)}}
                        helperText="State, provience, or territory"
                    />

                    <TextField
                        label="Zip"
                        defaultValue={form.zip}
                        onChange={(e) => {handleChange('zip', e)}}
                        helperText="Zip or postal code"
                    />

                    <TextField
                        label="Phone"
                        defaultValue={form.phone}
                        onChange={(e) => {handleChange('phone', e)}}
                    />
                </>
            );
        }

        return <p>Loading...</p>;
    }, [form]);

    return (
        <Box component="form" marginTop={2}>
            {printForm}
            <SubmitButton formData={form} id={id}/>
        </Box>
    );
};

export default AddressForm;
