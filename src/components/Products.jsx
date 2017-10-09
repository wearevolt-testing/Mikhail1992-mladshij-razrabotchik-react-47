import React, {Component} from 'react';
import Header from './Header';
import Modals from './Modals';
import {Button, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/products';
import {openModal} from '../actions/modal';

class Products extends Component {

    componentDidMount() {
        this.props.getProducts();
        document.title = "Products";
    }

    render() {
        const {products} = this.props;
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="head-block">
                        <h1>Product List</h1>
                        <Button onClick={this.props.handleProductModal.bind(this)}>Create</Button>
                    </div>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Ptice</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {products && products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td onClick={this.props.handleProductModalEdit.bind(this, product)}>edit</td>
                                    <td onClick={this.props.handleProductModalDelete.bind(this, product)}>delete</td>
                                </tr>
                            );
                        })}

                        </tbody>
                    </Table>
                </div>
                <Modals/>
            </div>
        )
    }
}

export default connect(
    state => ({
        products: state.rootReducer.products.data,
    }),
    dispatch => ({
        getProducts: () => {
            dispatch(fetchProducts())
        },
        handleProductModal: () => {
            dispatch(openModal('MODAL_PRODUCTS'));
        },
        handleProductModalEdit: (props) => {
            dispatch(openModal('MODAL_EDIT_PRODUCTS', props));
        },
        handleProductModalDelete: (props) => {
            dispatch(openModal('MODAL_DELETE_PRODUCTS', props));
        },
    })
)(Products);