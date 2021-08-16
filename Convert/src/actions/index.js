import { CONVERT_NUMBER, CHOICE_UNIT } from "./type";

export const convertNumber = (data) => ({
    type: CONVERT_NUMBER,
    payload: data
})

export const choiceUnit = (data) => ({
    type: CHOICE_UNIT,
    payload: data
})

