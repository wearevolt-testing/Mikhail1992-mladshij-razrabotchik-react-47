import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../actions/modal';
import ModalCustomers from './ModalCustomers';
import ModalCustomersEdit from './ModalCustomersEdit';
import ModalCustomersDelete from './ModalCustomersDelete';
import ModalProducts from './ModalProducts';
import ModalProductsEdit from './ModalProductsEdit';
import ModalProductsDelete from './ModalProductsDelete';

const MODAL_COMPONENTS = {
    MODAL_CUSTOMERS: ModalCustomers,
    MODAL_EDIT_CUSTOMERS: ModalCustomersEdit,
    MODAL_DELETE_CUSTOMERS: ModalCustomersDelete,
    MODAL_PRODUCTS: ModalProducts,
    MODAL_EDIT_PRODUCTS: ModalProductsEdit,
    MODAL_DELETE_PRODUCTS: ModalProductsDelete,
};

class Modals extends Component {
    render() {
        const {closeModal, modal: {modalType, modalProps}} = this.props;
        const SpecificModal = MODAL_COMPONENTS[modalType];
        if (modalType && SpecificModal) {
            return <SpecificModal {...modalProps} closeModal={closeModal}/>;
        }
        return null;
    }
}

export default connect(
    state => ({
        modal: state.rootReducer.modal,
    }),
    dispatch => ({
        closeModal: () => {
            dispatch(closeModal());
        },
    })
)(Modals);