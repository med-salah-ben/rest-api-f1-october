import {GET_CONTACTS_LOAD , GET_CONTACTS_FAIL , GET_CONTACTS_SUCCESS, GET_CONTACT, EDIT_CONTACT} from "../constant/actionsTypes";
import axios from "axios";

export const getContacts = ()=> async(dispatch)=>{
    try {
        dispatch({type:GET_CONTACTS_LOAD})
        const result = await axios.get("/api/contact");
        dispatch({type:GET_CONTACTS_SUCCESS , payload: result.data.response})
    } catch (error) {
        dispatch({type : GET_CONTACTS_FAIL,payload : error })
    }
}

export const getContact = (id)=>async(dispatch)=>{
    try {
        const result = await axios.get(`/api/contact/${id}`)
        // console.log(result.data.response)
        dispatch({type:GET_CONTACT , payload : result.data.response})
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact = (id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}
export const editContact = (id , formData)=>async(dispatch)=>{
    try {
        const result = await axios.put(`/api/contact/${id}`,formData)
        // console.log(result.data.response)
        dispatch({type:EDIT_CONTACT , payload : result.data.msg})
    } catch (error) {
        console.log(error)
    }
}

export const postContact = ( user )=>async(dispatch)=>{
    try {
        await axios.post(`/api/contact/`,user)
        // console.log(result.data.response)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}