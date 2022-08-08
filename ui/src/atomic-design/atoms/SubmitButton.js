import React, {useEffect} from 'react';
import { Button } from "@mui/material";
import {createAddress, updateAddress} from "../../remote/remote-addresses";

const SubmitButton = ({formData, id}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(id){
            console.log(id, 'this is the update address page')
            updateAddress({formData, id})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            console.log(id, 'new address created!');
            createAddress({formData})
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
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