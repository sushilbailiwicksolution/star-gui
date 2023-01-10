import { ViewsConstants } from "../Constants/constants";

const initialState = {
    showLoader: false,
    isError: false,
    errorMessage: '',
    selectedAssetId: '',
    currentFlightList: []
};

export default function viewReducer(state = initialState, action: any) {

    switch (action.type) {
        case ViewsConstants.FLIGHT_LIST_DATA:
            return {
                ...state,
                showLoader: false,
                isError: false,
                errorMessage: '',
                selectedAssetId: '',
                currentFlightList: action.value,
            };
        case ViewsConstants.VIEW_CLEAR_DATA:
            return {
                ...state,
                showLoader: false,
                isError: false,
                errorMessage: '',
                selectedAssetId: '',
                currentFlightList: [],
            };
        default:
            return state;
    }

}
