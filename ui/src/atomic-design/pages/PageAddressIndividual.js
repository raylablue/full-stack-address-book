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
                console.log(data)
        })
    // if data is added to dependencies it has many needless re-renders
    // eslint-disable-next-line
    }, [id]);

    return (
        <Container>
            <AddressForm address={data}/>
        </Container>
    );
};

export default PageAddressIndividual;