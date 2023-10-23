import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import ContactsList from '../components/ContactsList/ContactsList';
import { getContacts } from '../JS/actions/contactActions';


const Contacts = () => {
    const dispatch = useDispatch();

    // const getOurContacts= ()=>{
    //   dispatch(getContacts());
    // }
    // Fetch contacts when the component mounts.
    useEffect(()=>{
      // getOurContacts()
        dispatch(getContacts());
      // eslint-disable-next-line
    },[])
  return (
    <div>
        <ContactsList />
    </div>
  )
}

export default Contacts