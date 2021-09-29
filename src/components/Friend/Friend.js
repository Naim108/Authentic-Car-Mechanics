import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id,name,email,phone,website}=props.friend;
    const history=useHistory()

    const handleFriendClick=()=>{
      history.push(url)

    }

    const url=`/friend/${id}`
    return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Text>
              <h3>Name: {name}</h3>
              <h6>Email: {email}</h6>
              <h6>Contact:{phone}</h6>
              <p>Visit: {website}</p>
              <Link to={url}>Visit us</Link>
              <br />
              <button  onClick={handleFriendClick}>Visit us</button>
              
              

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        
    );
};

export default Friend;