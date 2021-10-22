import React,{useEffect} from "react";
import { Row, Col, Container, Form } from 'react-bootstrap';
import PropTypes from "prop-types";

function SenderAddress(props) {
    const {
        formValidation,
        wizardContext,
        onAction
    } = props;
    useEffect(()=>{
        React.Children.map(children=>{
            console.log("Hii",children);
        });
    },[props])
    return (<div>
        <Container>
            <h4>Enter the sender's address:</h4>
            <hr />
            <Form noValidate validated={formValidation} className="text-left">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="from">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control placeholder="Enter full name" onChange={onAction}
                            value={wizardContext.name} field="name" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter full name
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="from">
                    <Form.Label>Address*</Form.Label>
                    <Form.Control placeholder="Enter current city" onChange={onAction}
                        value={wizardContext.street} field="street" required />
                    <Form.Control.Feedback type="invalid">
                        Please enter address
                    </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="from">
                        <Form.Label>City*</Form.Label>
                        <Form.Control placeholder="Enter current city" onChange={onAction}
                            value={wizardContext.city} field="city" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter city
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="from">
                        <Form.Label>State*</Form.Label>
                        <Form.Control placeholder="Enter current state" onChange={onAction}
                            value={wizardContext.state} field="state" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter state
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="from">
                        <Form.Label>Zip*</Form.Label>
                        <Form.Control type="number" placeholder="Enter current zip code" onChange={onAction}
                            value={wizardContext.zip} field="zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter zip code
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    </div>)
}


SenderAddress.propTypes = {
    onAction: PropTypes.func.isRequired,
    formValidation: PropTypes.bool.isRequired,
    wizardContext: PropTypes.object.isRequired,
};

export default SenderAddress;