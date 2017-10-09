export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const initialState = {
  modalType: null,
  modalProps: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        modalType: action.payload.type,
        modalProps: action.payload.props,
      };
    case MODAL_CLOSE:
      return initialState;
    default:
      return state;
  }
};
