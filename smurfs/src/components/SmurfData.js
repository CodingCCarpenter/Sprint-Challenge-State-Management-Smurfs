import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions';
import {
    Container, Row, CardColumns, Spinner, CardHeader, 
    CardTitle, CardSubtitle, Card, Button, CardFooter, 
    Form, ModalHeader, ModalBody, FormGroup, Label, 
    Input, ModalFooter, ModalBody
} from 'reactstrap';


const SmurfData = props => {
    console.log('cc: SmurfData.js: SmurfData: props: ', props);

    const smurfList = { pass the state here somehow }

    return (
        <Container className='smurfContainer'>
           {smurfList.length > 0 && smurfList[0] !== null ? (
               <Row>
                   <CardColumns>
                       {smurfList.map((smurf) => (
                           <Card key={smurf.id}>
                               <CardHeader>
                                   <CardTitle tag='h2'>{smurf.name}</CardTitle>
                                   <CardSubtitle>
                                       <p>Smurf Identification Number: <span>{smurf.id}</span></p>
                                       <p>Age: {smurf.age}  Height: {smurf.height}</p>
                                       <p>Location: Smurf Village</p>
                                    </CardSubtitle>
                               </CardHeader>
                           </Card>
                       ))}
                   </CardColumns>
               </Row>
            ) : <h2 className='noResults'>No Smurfs are registered! Find them!</h2>}
        </Container>           
    );
};