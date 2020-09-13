
import { counterTypes } from './../actions/counterAction';

const initState = 0;

const counterReducer = (state = initState, action) => {
    switch(action.type) {
        case counterTypes.INCREMENT:
            return state + 1;

            case counterTypes.DECREMENT:
                return state - 1;

                case counterTypes.INCREMENTN:
                    return state + action.payload;

                    case counterTypes.DECREMENTN:
                        return state - action.payload;

                default: return state;
    }
};

export default counterReducer;