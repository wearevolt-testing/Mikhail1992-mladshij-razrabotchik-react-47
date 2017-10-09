import React, {Component} from 'react';
import {Button, Modal, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {editCustomer} from '../actions/customers';
import {closeModal} from '../actions/modal';


class ModalCustomersEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            address: '',
        }
    }

    handleChange(event) {
        this.setState({
            id: this.props.id,
            name: this.name.value,
            phone: this.phone.value,
            address: this.address.value,
        });
    };

    render() {
        const {name, phone, address} = this.props;
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit Customer</Modal.Title>
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
                                Address
                                <input
                                    type="text"
                                    defaultValue={address}
                                    ref={input => this.address = input}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Phone
                                <input
                                    type="text"
                                    defaultValue={phone}
                                    ref={input => this.phone = input}
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
                        onClick={this.props.editCustomer.bind(this, this.state)}
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
        customers: state.rootReducer.customers.data,
    }),
    dispatch => ({
        editCustomer: (customer) => {
            dispatch(editCustomer(customer));
            dispatch(closeModal());
        },
    })
)(ModalCustomersEdit);