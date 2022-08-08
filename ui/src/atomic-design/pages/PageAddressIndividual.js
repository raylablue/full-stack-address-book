import React, { useState, useEffect } from 'react';
import {Button, Container} from "@mui/material";
import {getIndividualAddress} from "../../remote/remote-addresses";
import {Link, useParams} from "react-router-dom";
import AddressForm from "../molecules/AddressForm";
import ConfirmationDialog from "../molecules/ConfirmationDialog";

const PageAddressIndividual = () => {
    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        getIndividualAddress({id})
            .then((address) => {
                setData(address.data)
        })
    // if data is added to dependencies it has many needless re-renders
    // eslint-disable-next-line
    }, [id]);

    return (
        <Container>
            <AddressForm address={data}/>
            <ConfirmationDialog id={id} />
            <Button type="button"><Link to={`/`}>
                Address List
            </Link></Button>
        </Container>
    );
};

export default PageAddressIndividual;