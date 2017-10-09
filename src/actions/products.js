import axios from 'axios';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const EDIT_NEW_PRODUCT = 'EDIT_NEW_PRODUCT';
export const DELETE_NEW_PRODUCT = 'DELETE_NEW_PRODUCT';

function receiveProducts(json) {
    return {
        type: RECEIVE_PRODUCTS,
        payload: json.map(child => child),
        receivedAt: Date.now()
    }
}

export function fetchProducts() {

    return function (dispatch) {

        return axios.get('/api/products')
            .then(response => response.data)
            .then(json => dispatch(receiveProducts(json)))
            .catch(error => console.log('An error occured.', error));
    }
}

export function addProductToStore(product) {
    return {
        type: ADD_NEW_PRODUCT,
        payload: product,
    }
}

export function addProduct(product) {
    return function (dispatch) {
        console.log(product);
        return axios.post(`/api/products`, {
            name: product.name,
            price: product.price,
        })
            .then(response => response.data)
            .then(json => dispatch(addProductToStore(json)))
            .catch(error => console.log('An error occured.', error));
    }
}

export function editProductToStore(product) {
    return {
        type: EDIT_NEW_PRODUCT,
        payload: product,
    }
}

export function editProduct(product) {
    return function (dispatch) {
        console.log(product);
        return axios.put(`/api/products/${product.id}`, {
            name: product.name,
            price: product.price,
        })
            .then(response => response.data)
            .then(json => dispatch(editProductToStore(json)))
            .catch(error => console.log('An error occured.', error));
    }
}

export function deleteProductToStore(product) {
    return {
        type: DELETE_NEW_PRODUCT,
        payload: product,
    }
}

export function deleteProduct(product) {
    return function (dispatch) {
        return axios.delete(`/api/products/${product.id}`)
            .then(response => response.data)
            .then(json => dispatch(deleteProductToStore(json)))
            .catch(error => console.log('An error occured.', error));
    }
}