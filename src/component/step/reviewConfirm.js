import { useEffect, useState } from "react";
import { Card, Table } from 'react-bootstrap';
import PropTypes from "prop-types";

function ReviewConfirm(props) {
    //   const [wizardContext, setWizardContext] = useState(props.wizardContext);
    const { wizardContext } = props;
    const [shippingOption, setShippingOption] = useState(" ");
    const [shippingTotal, setshippingTotal] = useState(0);
    useEffect(() => {
        getShippingOption();
        getShippingCost();
    })

    const getShippingOption = () => {
        const option =
            wizardContext.shippingOption === "1" ? "Ground" : "Priority";
        setShippingOption(option);
    };

    // shipping cost calculation
    const getShippingCost = () => {
        const weight = wizardContext.weight;
        const ShippingOption = wizardContext.shippingOption;

        const shippingRate = 0.4,
            shippingCost = weight * shippingRate * (ShippingOption === "1" ? 1 : 1.5);

        const total = shippingCost.toFixed(2);
        setshippingTotal(total);
    };

    // const confirm = () => {
    //     // props.onAction(wizardContext);
    // }

    const renderSenderAndReceiverData = (data, type) => {
        return (
            <Card className="mb-3">
                <Table striped hover responsive style={{ textAlign: "left" }}>
                    <thead>
                        <tr>
                            <th colSpan="3">{type}:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3">{data.name}</td>
                        </tr>
                        <tr>
                            <td colSpan="3">{data.street}</td>
                        </tr>
                        <tr>
                            <td>{data.city}</td>
                            <td>{data.state}</td>
                            <td>{data.zip}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        )
    }

    const renderShipingData = () => {
        // let weightUnit = type==="Weight" && "lbs";
        // let dollar = type==="Shipping Total" && "$";
        return (
            <Card className="mb-3">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Weight:</th>
                            <th>Shipping Method:</th>
                            <th>Shipping Total:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {wizardContext.weight} lbs</td>
                            <td> {shippingOption}</td>
                            <td> ${shippingTotal}</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        )
    }

    return (
        <>
            {renderSenderAndReceiverData(wizardContext.from, "From")}
            {renderSenderAndReceiverData(wizardContext.to, "To")}
            {renderShipingData()}
        </>
    );
}

ReviewConfirm.propTypes = {
    wizardContext: PropTypes.object.isRequired,
};

export default ReviewConfirm;