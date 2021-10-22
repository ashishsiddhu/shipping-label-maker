import { Row, Col, Container, Form } from 'react-bootstrap';
import PropTypes from "prop-types";
function ReceiverAddress(props) {
    // const senderDetails = props.wizardContext;
    const {
        formValidation,
        wizardContext,
        onAction
    } = props;
    
    return (<div>
        <Container>
            <h4>Enter the receiver's address:</h4>
            <hr />
            <Form noValidate validated={formValidation} className="text-left">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="to">
                        <Form.Label>Name*</Form.Label>
                        <Form.Control placeholder="Enter full name" onChange={onAction}
                            value={wizardContext.name} field="name" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter full name
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="to">
                    <Form.Label>Address*</Form.Label>
                    <Form.Control placeholder="Enter current city" onChange={onAction}
                        value={wizardContext.street} field="street" required />
                    <Form.Control.Feedback type="invalid">
                        Please enter address
                    </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="to">
                        <Form.Label>City*</Form.Label>
                        <Form.Control placeholder="Enter current city" onChange={onAction}
                            value={wizardContext.city} field="city" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter city
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="to">
                        <Form.Label>State*</Form.Label>
                        <Form.Control placeholder="Enter current state" onChange={onAction}
                            value={wizardContext.state} field="state" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter state
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="to">
                        <Form.Label>Zip*</Form.Label>
                        <Form.Control placeholder="Enter current zip code" onChange={onAction}
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

ReceiverAddress.propTypes = {
    onAction: PropTypes.func.isRequired,
    formValidation: PropTypes.bool.isRequired,
    wizardContext: PropTypes.object.isRequired,
};

export default ReceiverAddress;