import React, {Component} from 'react';
import {Button, Modal, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addCustomer} from '../actions/customers';
import {closeModal} from '../actions/modal';


class ModalCustomers extends Component {

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
        let id = this.props.customers[this.props.customers.length - 1].id + 1;
        this.setState({
            id: id,
            name: this.name.value,
            phone: this.phone.value,
            address: this.address.value,
        });
    };

    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Add Customer</Modal.Title>
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
                                Address
                                <input
                                    type="text"
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
                        onClick={this.props.addNewCustomer.bind(this, this.state)}
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
        addNewCustomer: (customer) => {
            dispatch(addCustomer(customer));
            dispatch(closeModal());
        },
    })
)(ModalCustomers);