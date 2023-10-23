import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { deleteContact, getContact } from '../../JS/actions/contactActions';
import { Link } from 'react-router-dom';
import { toggleTrue } from '../../JS/actions/editAction';

const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  const getOneContact = ()=>{
    dispatch(getContact(contact._id))
  }

  const handleDelete = ()=>{
    dispatch(deleteContact(contact._id))
  }

  const handleEdit = ()=>{
    dispatch(toggleTrue())
  }
  return (
    <Card style={{margin:"2rem 1rem"}}>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
      />
      <Card.Header> Name : {contact.name} </Card.Header>
      <Card.Meta> <strong>Email : </strong> {contact.email} </Card.Meta>
      <Card.Description>
        <strong>Phone : +216 </strong> {contact.phone}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Link to={`/edit/${contact._id}`}>
        <Button basic color='green' onClick={()=>{getOneContact(); handleEdit()}}>
          Edit
        </Button>
        </Link>
        <Button basic color='red' onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Card.Content>
  </Card>
  )
}

export default ContactCard