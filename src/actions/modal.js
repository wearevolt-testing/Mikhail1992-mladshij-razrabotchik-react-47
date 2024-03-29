export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const openModal = (type, props = {}) => ({
    type: MODAL_OPEN,
    payload: {
        type,
        props,
    },
});

export const closeModal = () => ({
    type: MODAL_CLOSE,
});
