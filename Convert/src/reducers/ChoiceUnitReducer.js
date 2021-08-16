import { CHOICE_UNIT } from "../actions/type";

const initState = [
    {
        column: 0,
        listValue: [
            {
                id: 0,
                value: true
            },
            {
                id: 1,
                value: false
            },
            {
                id: 2,
                value: false
            },
            {
                id: 3,
                value: false
            }
        ]
    },
    {
        column: 1,
        listValue: [
            {
                id: 0,
                value: false
            },
            {
                id: 1,
                value: false
            },
            {
                id: 2,
                value: true
            },
            {
                id: 3,
                value: false
            }
        ]
    }
]

export default function (state = initState, action) {
    switch (action.type) {
        case CHOICE_UNIT:
            return state.map(item => (item.column == action.payload.column)
                ? {
                    column: item.column,
                    listValue: item.listValue.map(val => (val.id == action.payload.valueId)
                        ? {
                            id: val.id,
                            value: true
                        }
                        : {
                            id: val.id,
                            value: false
                        })
                }
                : item)

        default:
            return state
    }
}