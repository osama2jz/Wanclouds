import axios from "axios";
import * as actions from "../api";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);
        const {onStart, onSuccess, onError } = action.payload;
        if (onStart) dispatch({ type: onStart });
        next(action);
        try {
            const response = await axios.request({
                baseURL: "https://disease.sh/v3/covid-19/countries",
            });
            dispatch(actions.apiCallSuccess(response.data));
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data });
        } catch (error) {
            dispatch(actions.apiCallFailed(error.message));
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;