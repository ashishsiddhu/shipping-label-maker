import { forwardRef } from "react";
import { Form, Container } from 'react-bootstrap';
import PropTypes from "prop-types";
function PackageWeight(props,ref) {
    const {
        onAction,
        formValidation,
        wizardContext,
      } = props;
    return (
        <Container>
            <h4>Enter the weight:</h4>
            <hr />
            <Form noValidate validated={formValidation} className="text-left">
                <Form.Group className="mb-3" controlId="weight">
                    <Form.Label>Weight*</Form.Label>
                    <Form.Control placeholder="Enter weight in lbs" onChange={onAction}
                        value={wizardContext.weight} required ref={ref}/>
                    <Form.Control.Feedback type="invalid">
                        Please enter weight
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </Container>
    );
}

PackageWeight.propTypes = {
    onAction: PropTypes.func.isRequired,
    formValidation: PropTypes.bool.isRequired,
    wizardContext: PropTypes.object.isRequired,
};

export default forwardRef(PackageWeight);