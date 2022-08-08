import React from 'react';
import { Button } from "@mui/material";
import {createAddress} from "../../remote/remote-addresses";

const SubmitButton = ({formData}) => {
    const handleSubmit = (e) => {
        console.log(formData.name.value)
        e.preventDefault();
        createAddress({formData})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Button
            type="submit"
            onClick={(e) => {handleSubmit(e)}}
        >
            Submit
        </Button>
    );
};

export default SubmitButton;