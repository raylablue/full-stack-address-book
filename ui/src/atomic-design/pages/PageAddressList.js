import React, {useEffect, useState} from 'react';
import AddressCollection from "../organisims/AddressCollection";
import {Container} from "@mui/material";
import { getAddresses } from "../../remote/remote-addresses";
import AddressForm from "../molecules/AddressForm";

const PageAddressList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAddresses()
            .then((addresses) => {
                setData(addresses.data.addresses)
            })
    }, []);

    return (
        <Container>
            <AddressForm />
            <AddressCollection addressList={data} />
        </Container>
    );
};

export default PageAddressList;
