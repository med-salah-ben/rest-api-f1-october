import { TOGGLE_FALSE , TOGGLE_TRUE } from "../constant/actionsTypes";

export const toggleFalse = ()=>{
    return{
        type:TOGGLE_FALSE
    }
}

export const toggleTrue = ()=>{
    return{
        type:TOGGLE_TRUE
    }
}