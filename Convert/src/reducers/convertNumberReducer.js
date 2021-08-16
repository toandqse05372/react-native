import { CONVERT_NUMBER } from "../actions/type";

export default function (state = [{ column: 1, result: 0 }], action) {
    switch (action.type) {
        case CONVERT_NUMBER:
            const check = (action.payload.index2 - action.payload.index1)
            return {
                number: action.payload.number,
                result: check >= 0
                    ? (action.payload.number / (10 ** check))
                    : (action.payload.number * (10 ** (-check))),
                column: action.payload.column
            }
        default:
            return state
    }
}