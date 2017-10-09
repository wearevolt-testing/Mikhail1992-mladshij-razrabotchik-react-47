import axios from 'axios';

export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const ADD_NEW_CUSTOMER = 'ADD_NEW_CUSTOMER';
export const EDIT_NEW_CUSTOMER = 'EDIT_NEW_CUSTOMER';
export const DELETE_NEW_CUSTOMER = 'DELETE_NEW_CUSTOMER';

function receiveCustomers(json) {
    return {
        type: RECEIVE_CUSTOMERS,
        payload: json,
    }
}

export function fetchCustomers() {

    return function (dispatch) {

        return axios.get('/api/customers')
            .then(response => response)
            .then(json => dispatch(receiveCustomers(json)))
            .catch(error => console.log('An error occured.', error));
    }
}

export function addCUstomerToStore(customer) {
    return {
        type: ADD_NEW_CUSTOMER,
        payload: customer,
    }
}

export function addCustomer(customer) {
    return function (dispatch) {
        return axios.post(`/api/customers`, {
            name: customer.name,
            address: customer.address,
            phone: customer.phone,
        })
            .then(response => response.data)
            .then(json => dispatch(addCUstomerToStore(json)))
            .catch(error => console.log('An error occured.', error));
    }
}

export function editCustomerToStore(customer) {
    return {
        type: EDIT_NEW_CUSTOMER,
        payload: customer,
    }
}

export function editCustomer(customer) {
    return function (dispatch) {
        console.log(customer);
        return axios.put(`/api/customers/${customer.id}`, {
            name: customer.name,
            address: customer.address,
            phone: customer.phone,
        })
            .then(response => response.data)
            .then(json => dispatch(editCustomerToStore(json)))
            .catch(error => console.log('An error occured.', error));
    }
}

export function deleteCustomerToStore(customer) {
    return {
        type: DELETE_NEW_CUSTOMER,
        payload: customer,
    }
}

export function deleteCustomer(customer) {
    return function (dispatch) {
        return axios.delete(`/api/customers/${customer.id}`)
            .then(response => response.data)
            .then(json => dispatch(deleteCustomerToStore(json)))
            .catch(error => console.log('An error occured.', error));
    }
}