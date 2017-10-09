import React, {Component} from 'react';
import {Button, Modal, InputGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteCustomer} from '../actions/customers';
import {closeModal} from '../actions/modal';


class ModalCustomersDelete extends Component {
    componentDidMount() {
    }


    render() {
        return (
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Delete Customer</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Delete?
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.closeModal.bind(this)}>Close</Button>
                    <Button
                        bsStyle="primary"
                        onClick={this.props.deleteCustomer.bind(this, this.props)}
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
        customers: state.rootReducer.customers.data,
    }),
    dispatch => ({
        deleteCustomer: (customer) => {
            dispatch(deleteCustomer(customer));
            dispatch(closeModal());
        },
    })
)(ModalCustomersDelete);