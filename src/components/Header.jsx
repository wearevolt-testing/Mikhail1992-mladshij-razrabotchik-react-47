import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';

export default class Header extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Invoice App</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/invoices">Invoices</NavItem>
                    <NavItem eventKey={2} href="/products">Products</NavItem>
                    <NavItem eventKey={3} href="/customers">Customers</NavItem>
                </Nav>
            </Navbar>
        );
    }
}