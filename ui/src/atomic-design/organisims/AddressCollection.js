import React from 'react';
import {Link} from "react-router-dom";

const AddressCollection = ({addressList}) => (
    <ul>
        {addressList.map(({name, id}) => {
            return <li key={id}>
                <Link to={`address/${id}`}>
                    {name}
                </Link>
            </li>
        })}
    </ul>
);


export default AddressCollection;
