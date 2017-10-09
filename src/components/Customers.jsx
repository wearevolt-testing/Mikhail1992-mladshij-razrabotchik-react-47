import React, {Component} from 'react';
import Header from './Header';
import Modals from './Modals';
import {Button, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchCustomers, addCustomer} from '../actions/customers';
import {provideHooks} from 'redial';
import {openModal} from '../actions/modal';

class Customers extends Component {

    componentDidMount() {
        document.title = "Customers";
        this.props.getCustomers();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps != this.props;
    }

    render() {
        const {customers} = this.props;
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="head-block">
                        <h1>Customer List</h1>
                        <Button onClick={this.props.handleCustomerModal.bind(this)}>Create</Button>
                    </div>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Ptice</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {customers && customers.map((customer) => {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.phone}</td>
                                    <td onClick={this.props.handleCustomerModalEdit.bind(this, customer)}>edit</td>
                                    <td onClick={this.props.handleCustomerModalDelete.bind(this, customer)}>delete</td>
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
        data: state,
        customers: state.rootReducer.customers.data,
    }),
    dispatch => ({
        getCustomers: () => {
            dispatch(fetchCustomers())
        },
        addNewCustomer: (customer) => {
            dispatch(addCustomer(customer))
        },
        handleCustomerModal: () => {
            dispatch(openModal('MODAL_CUSTOMERS'));
        },
        handleCustomerModalEdit: (props) => {
            dispatch(openModal('MODAL_EDIT_CUSTOMERS', props));
        },
        handleCustomerModalDelete: (props) => {
            dispatch(openModal('MODAL_DELETE_CUSTOMERS', props));
        },
    })
)(Customers);
