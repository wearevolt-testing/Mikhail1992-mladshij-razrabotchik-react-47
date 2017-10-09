import React, {Component} from 'react';
import {Button, Modal, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addProduct} from '../actions/products';
import {closeModal} from '../actions/modal';


class ModalProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
        }
    }

    handleChange(event) {
        let id = this.props.products[this.props.products.length - 1].id + 1;
        this.setState({
            id: id,
            name: this.name.value,
            price: this.price.value,
        });
    };

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div>
                            <label>
                                Name
                                <input
                                    type="text"
                                    ref={input => this.name = input}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Price
                                <input
                                    type="text"
                                    ref={input => this.price = input}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </label>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.closeModal.bind(this)}>Close</Button>
                    <Button
                        bsStyle="primary"
                        onClick={this.props.addNewProduct.bind(this, this.state)}
                    >
                        Save changes
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
        addNewProduct: (product) => {
            dispatch(addProduct(product));
            dispatch(closeModal());
        },
    })
)(ModalProducts);