import * as types from '../types';
import * as api from '../../../services/api';

export const fetchCharities = () => async (dispatch) => {
    const endpoint = api.ENDPOINTS.charities;
    dispatch({
      type: types.GET_CHARITIES,
    });

    try {
        const response = await api.get(endpoint);
        dispatch({
            type: types.GET_CHARITIES_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: types.GET_CHARITIES_FAIL,
            payload: error.message ?? "Fetching charities data is failed!",
        });
    }
}

export const fetchPayments = () => async (dispatch) => {
    const endpoint = api.ENDPOINTS.payments;

    dispatch({
      type: types.GET_PAYMENTS,
    });

    try {
        const response = await api.get(endpoint);
        dispatch({
            type: types.GET_PAYMENTS_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: types.GET_PAYMENTS_FAIL,
            payload: error.message ?? "Fetching payments is failed!",
        });
    }
}

export const storePayment = (data) => async (dispatch) => {
    const endpoint = api.ENDPOINTS.payments;

    dispatch({
      type: types.DONATE_PAY,
    });

    try {
        const response = await api.post(endpoint, data);
        dispatch({
            type: types.DONATE_PAY_SUCCESS,
            payload: response,
        });
    } catch (error) {
        dispatch({
            type: types.DONATE_PAY_FAIL,
            payload: error.message ?? "Storing payment is failed!",
        });
    }
}