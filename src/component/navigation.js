import { Button, Container } from 'react-bootstrap';
import PropTypes from "prop-types";
function Navigation (props){
    let backButtonText = props.currentStep === 5 ? "Modify" : "Previous";
    let secondaryButtonText = props.currentStep === 5 ? "Confirm" : " Next ";
    let idVal;
    if(props.currentStep === 1) {
        idVal = "from";
    } else if (props.currentStep === 2) {
        idVal = "to";
    } else if (props.currentStep === 3) {
        idVal = "weight";
    } else {
        idVal = "shippingOption";
    }

    return (
        <Container className="my-3 pb-3">
            {props.currentStep < 2 ? null : (
                <Button onClick={props.previousStep} className="shadow">
                    {backButtonText}
                </Button>
            )}
            <span>&nbsp;{' '}&nbsp;</span>
            <Button onClick={props.nextStep} variant="success" size="md" id={idVal} className="shadow">
                &nbsp; {secondaryButtonText} &nbsp;
            </Button>
        </Container>
    );
}

Navigation.propTypes = {
    currentStep: PropTypes.number.isRequired,
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
};

export default Navigation;
