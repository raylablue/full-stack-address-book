import React, { useState } from 'react';
import {Box, TextField} from "@mui/material";

const AddressForm = () => {
    const [address, setAddress] = useState({
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    });

    return (
        <Box component="form" marginTop={2}>
            <TextField
                label="Name"
                defaultValue={address.name}
                helperText="Name for the person associated with this address"
            />

            <TextField
                label="Address 1"
                defaultValue={address.address1}
                helperText="House number and street"
            />

            <TextField
                label="Address 2"
                defaultValue={address.address2}
                helperText="Apartment number"
            />

            <TextField
                label="City"
                ddefaultValue={address.city}
            />

            <TextField
                label="State"
                defaultValue={address.state}
                helperText="State, provience, or territory"
            />

            <TextField
                label="Zip"
                defaultValue={address.zip}
                helperText="Zip or postal code"
            />

            <TextField
                label="Phone"
                defaultValue={address.phone}
            />
        </Box>
    );
};

export default AddressForm;
