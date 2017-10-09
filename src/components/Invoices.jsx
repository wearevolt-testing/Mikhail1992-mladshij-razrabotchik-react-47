import React, {Component} from 'react';
import Header from './Header';
import {Button, Table} from 'react-bootstrap';
import axios from 'axios';

export default class Invoices extends Component {

    constructor() {
        super();

        this.state = {
            invoices: {},
        }
    }

    componentDidMount() {
        document.title = "Invoices";
    }

    render() {
        const {invoices} = this.state;
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="head-block">
                        <h1>Invoice List</h1>
                        <Button>Create</Button>
                    </div>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer</th>
                            <th>discount</th>
                            <th>total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Boolean(invoices.length) && invoices.map(function (customer) {
                            return (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.phone}</td>
                                </tr>
                            );
                        })}

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}