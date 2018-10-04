import constantsTypes from '../constants-types/constants-type';

const defaultState = {
    data: []
};

export default function (state = defaultState, action){
    const {type} = action;

    switch (type) {
        case constantsTypes.START:
            const stateCopy = JSON.parse(JSON.stringify(state));
            return stateCopy
    }

    return state;
}
