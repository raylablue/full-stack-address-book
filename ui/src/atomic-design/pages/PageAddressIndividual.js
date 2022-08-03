import React, { useState, useEffect } from 'react';
import {Container} from "@mui/material";
import {getIndividualAddress} from "../../remote/remote-addresses";
import {useParams} from "react-router-dom";
import AddressForm from "../molecules/AddressForm";

const PageAddressIndividual = () => {
    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        getIndividualAddress({id})
            .then((address) => {
                setData(address.data)
        })
    }, []);

    return (
        <Container>
            <AddressForm address={data}/>
        </Container>
    );
};

export default PageAddressIndividual;