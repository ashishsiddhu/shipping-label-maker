import { Form, Container } from 'react-bootstrap';
import PropTypes from "prop-types";
function ShippingOption (props) {
    const {
        onAction,
        formValidation,
        wizardContext,
      } = props;

    return (
        <Container>
          <h4>Enter the shipping option:</h4>
          <br />
            <Form noValidate validated={formValidation}>
                <Form.Group>
                    <Form.Check type={'radio'} id={'shippingOption'}>
                        <Form.Check.Input 
                            type={'radio'}
                            name= {'shippingOption'}
                            onChange={onAction}
                            value="1"
                            checked= {wizardContext.shippingOption === "1"}
                            required 
                        />
                        <span>&nbsp;{' '}&nbsp;</span>
                        <Form.Check.Label>{`Ground`}</Form.Check.Label>
                    </Form.Check>
                    <Form.Check type={'radio'} id={'shippingOption2'}>
                        <Form.Check.Input 
                            type={'radio'}
                            name= {'shippingOption'}
                            onChange={onAction}
                            value="2"
                            checked= {wizardContext.shippingOption === "2"}
                            required 
                        />
                        <span>&nbsp;{' '}&nbsp;</span>
                        <Form.Check.Label>{`Priority`}</Form.Check.Label>
                        <Form.Control.Feedback type="invalid">
                            Please select shipping option
                        </Form.Control.Feedback>
                    </Form.Check>
                </Form.Group>
            </Form>
        </Container>
    );
}

ShippingOption.propTypes = {
    onAction: PropTypes.func.isRequired,
    formValidation: PropTypes.bool.isRequired,
    wizardContext: PropTypes.object.isRequired,
};

export default ShippingOption;