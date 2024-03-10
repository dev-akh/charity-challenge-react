import * as types from './actions/types';
import { summaryDonations } from '../helpers';

const initialState = {
    charities    : [],
    payments     : [],
    totalDonate  : 0,
    loading      : false,
    error        : null
  };


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CHARITIES : 
            return {
                ...state,
                loading: true,
                error  : null
            }
        case types.GET_CHARITIES_SUCCESS : 
            return {
                ...state,
                charities : action.payload,
                loading   : false
            }
        case types.GET_CHARITIES_FAIL : 
            return {
                ...state,
                loading   : false,
                error     : action.payload
            }
        case types.GET_PAYMENTS : 
            return {
                ...state,
                loading   : true,
                error     : null
            }
        case types.GET_PAYMENTS_SUCCESS : 
            return {
                ...state,
                payments   : action.payload,
                totalDonate: summaryDonations(action.payload.map((item) => item.amount)),
                loading   : false
            }
        case types.GET_PAYMENTS_SUCCESS : 
            return {
                ...state,
                loading   : false,
                error     : action.payload
            }
        case types.DONATE_PAY : 
            return {
                ...state,
                error  : null
            }
        case types.DONATE_PAY_SUCCESS : 
            return {
                ...state,
                loading    : false,
                error      : null
            }
        case types.DONATE_PAY_FAIL : 
            return {
                ...state,
                loading    : false,
                error      : action.payload
            }
        default: return state;
    }
}

export default reducer;
