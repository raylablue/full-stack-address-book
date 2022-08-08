import axios from "axios";

export const getAddresses = () => {
    return axios.get('http://localhost:4000/api/addresses')
};

export const getIndividualAddress = ({id}) => {
    return axios.get(`http://localhost:4000/api/addresses/${id}`)
};

export const deleteIndividualAddress = ({id}) => {
    return axios.delete(`http://localhost:4000/api/addresses/${id}`)
}

export const createAddress = ({formData}) => {
    return axios.post('http://localhost:4000/api/addresses', {
        name: formData.name.value,
        address1: formData.address1.value,
        address2: formData.address2.value,
        city: formData.city.value,
        state: formData.state.value,
        zip: formData.zip.value,
        phone: formData.phone.value,
    })
}

export const updateAddress = ({formData, id}) => {
    return axios.put(`http://localhost:4000/api/addresses/${id}`, {
        name: formData.name.value,
        address1: formData.address1.value,
        address2: formData.address2.value,
        city: formData.city.value,
        state: formData.state.value,
        zip: formData.zip.value,
        phone: formData.phone.value,
    })
}
