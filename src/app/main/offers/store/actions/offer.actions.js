import API from "../../../../api"
import { openDialog } from "../../../../store/actions"
import {
    SET_OFFER,
    RESET_OFFER
} from "../action-types/offer";

export function getOffer(id, dialogOptions) {
    const request = API.offers.getOffer(id)

    return (dispatch) => {
        return request.then((response) => {
            dispatch(setOffer(response.data))
            dispatch(openDialog(dialogOptions))
        }).catch(err => {
            console.log("loading error")
        });
    }
}

export function setOffer(offer) {
    return (dispatch) => {
        dispatch({
            type: SET_OFFER,
            payload: offer
        })
    }
}

export function resetOffer() {
    return (dispatch) => {
        dispatch({
            type: RESET_OFFER
        });
    }
}
