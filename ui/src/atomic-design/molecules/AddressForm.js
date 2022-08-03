import React, {useEffect, useMemo, useState} from 'react';
import {Box, Button, TextField, Alert} from "@mui/material";
import {deleteIndividualAddress} from "../../remote/remote-addresses";
import {Link, useParams} from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";

const AddressForm = ({address}) => {
    const {id} = useParams();
    const [form, setForm] = useState();

    const onDelete = (e) => {
        e.preventDefault();
        window.alert("are you sure you would like to delete?")
        console.log('deleted!', id);
        // display message of successful delete and reroute to address list on delete
        // deleteIndividualAddress({id})
        // .then(() => console.log('delete successful');
    };

    useEffect(() => {
        setForm(address);

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
            <ConfirmationDialog id={id} />
        </Box>
    );
};

export default AddressForm;
