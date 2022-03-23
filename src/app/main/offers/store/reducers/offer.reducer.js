import {
    SET_OFFER,
    RESET_OFFER
} from "../action-types/offer";

const initialState = {
    offer: {
        description: '',
        endDate: '',
        image: '',
        location: null,
        name: '',
        offers: null,
        startDate: '',
        geoLatitude: '',
        geoLongitude: ''
    }
};


const visitReducer = function (state = initialState, action) {
    switch (action.type) {
        case SET_OFFER:
            {
                const {payload} = action;
                state.description = payload.description;
                state.endDate = payload.endDate;
                state.image = payload.image;
                state.location = payload.location;
                state.name = payload.name;
                state.offers = payload.offers;
                state.startDate = payload.startDate;
                state.geoLatitude = payload.location.geo.latitude;
                state.geoLongitude = payload.location.geo.longitude;
                state.offerUrl = payload.offers.url;
                return { ...state }
            }
        case RESET_OFFER:
            {
                state = initialState;
                return { ...state }
            }
        default:
            {
                return state;
            }
    }
};

export default visitReducer;
