import React, {useEffect, useState} from 'react';
import AddressCollection from "../organisims/AddressCollection";
import {Container} from "@mui/material";
import { getAddresses } from "../../remote/remote-addresses";

const PageIndex = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAddresses()
            .then((addresses) => {
                setData(addresses.data.addresses)
            })
    }, []);

    return (
        <Container>
            <AddressCollection addressList={data} />
        </Container>
    );
};

export default PageIndex;
