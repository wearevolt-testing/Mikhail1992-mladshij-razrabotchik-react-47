import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {editProduct} from '../actions/products';
import {closeModal} from '../actions/modal';


class ModalProductsEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            price: '',
        }
    }

    handleChange(event) {
        this.setState({
            id: this.props.id,
            name: this.name.value,
            price: this.price.value,
        });
    };

    render() {
        const {name, price} = this.props;
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div>
                            <label>
                                Name
                                <input
                                    type="text"
                                    defaultValue={name}
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
                                    defaultValue={price}
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
                        onClick={this.props.editProduct.bind(this, this.state)}
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
        editProduct: (product) => {
            dispatch(editProduct(product));
            dispatch(closeModal());
        },
    })
)(ModalProductsEdit);