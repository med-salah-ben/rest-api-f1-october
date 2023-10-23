import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editContact, postContact } from '../../JS/actions/contactActions';
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const edit =useSelector((state)=>state.editReducer.edit);
    const contactState =useSelector((state)=>state.contactReducer.contact);
    const [user , setUser] = useState({name:"" , email:"",phone:""});
    
    useEffect(()=>{
        edit ? setUser(contactState) : setUser({name:"" , email:"",phone:""})
    },[contactState , edit])

    const handleChange = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }

    const handleContact = ()=>{
        if(!edit){

            dispatch(postContact(user))
            navigate("/contacts")
        }else{
            dispatch(editContact(contactState._id ,user))
            navigate("/contacts")
        }
    }

return(
  
  <Form onSubmit={handleContact}>
    <Form.Field>
      <label>Full Name</label>
      <input type='text' placeholder='Full Name' name='name' value={user.name} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input type='email' placeholder='Email' name='email' value={user.email} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Phone</label>
      <input type='text' placeholder='phone' name='phone' value={user.phone} onChange={handleChange} />
    </Form.Field>
    {/* <Link to="/contacts"> */}
    <Button type='submit'> {edit ? "Edit" : "Save"} </Button>
    {/* </Link> */}
  </Form>
)
}
export default Add