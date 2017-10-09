import React, {Component} from 'react';
import {Button, Modal, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteProduct} from '../actions/products';
import {closeModal} from '../actions/modal';


class ModalProductsDelete extends Component {
    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Delete?
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.closeModal.bind(this)}>Close</Button>
                    <Button
                        bsStyle="primary"
                        onClick={this.props.deleteProduct.bind(this, this.props)}
                    >
                        Delete
                    </Button>

                </Modal.Footer>

            </Modal.Dialog>
        );
    }
}

export default connect(
    state => ({
        products: state.rootReducer.products.data,
    }),
    dispatch => ({
        deleteProduct: (product) => {
            dispatch(deleteProduct(product));
            dispatch(closeModal());
        },
    })
)(ModalProductsDelete);