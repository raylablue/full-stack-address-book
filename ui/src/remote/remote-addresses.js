import axios from "axios";

export const getAddresses = () => {
    return axios.get('http://localhost:4000/api/addresses')
};

export const getIndividualAddress = ({id}) => {
    return axios.get(`http://localhost:4000/api/addresses/${id}`)
};
