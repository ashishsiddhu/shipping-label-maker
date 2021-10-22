import React, { useEffect, useState, useRef } from "react";
import { ProgressBar } from 'react-bootstrap';
import LabelInterface from "../interface/labelInterface";
import SenderAddress from "./step/senderAddress";
import ReceiverAddress from "./step/receiverAddress";
import PackageWeight from "./step/packageWeight";
import ShippingOption from "./step/shippingOption";
import ReviewConfirm from "./step/reviewConfirm";
import logo from '../logo.svg';
import Header from "./header";
import { Card, Container, Alert } from 'react-bootstrap';
import Navigation from './navigation';

function Wizard() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formValidation, setFormValidation] = useState(false);
    const [wizardContext, setWizardContext] = useState(LabelInterface);
    const [showAlert, setShowAlert] = useState(false);
    const packageWeightRef = useRef(null);
    
    useEffect (()=>{
        setCurrentStep(1);
    },[])

    /**
     * handle weight package input field
     * @param {object} e
     */
    const handleWeight = (e) => {
        // const value = e.target.value,
        const value = packageWeightRef.current.value,
          id = e.target.getAttribute("id");
        wizardContext[id] = value;
        setWizardContext({ ...wizardContext });
    }
    
    /**
     * handle shipping option field input
     * @param {object} e
     */
    const handleShipping = (e) => {
        const value = e.target.value,
          id = e.target.getAttribute("name");
        wizardContext[id] = value;
        setWizardContext({ ...wizardContext });
    }

    /**
     * handle input field changes to sender and receiver
     * @param {object} e
     */
    const handleNameAndAddress = (e) => {
        const value = e.target.value,
          field = e.target.getAttribute("field"),
          id = e.target.getAttribute("id");
        wizardContext[id][field] = value;
        setWizardContext({ ...wizardContext });
    }

    /**
     * Validate and proceed to next steps
     * @param {object} e
     */
    const nextStep = (e) => {
      // 
      if(currentStep===5) {
          success();
          return;
      }
      const id = e.target.getAttribute("id");
      const contextData = wizardContext[id];
      if (id === "weight" || id === "shippingOption") {
          // For packageWeight and shippingOptions components
          if (contextData.length === 0 || contextData === "0") {
              setFormValidation(true); // enable form validation to render invalid information
          } else {
              setCurrentStep((prev) => prev + 1); // Increase currentStep count
              setFormValidation(false); // disable form validation
          }
      } else {
          // For Sender and Receiver components
          // Validating either "contextData" object contains empty value or not
          let validateObj = Object.keys(contextData).filter(a => {
              return contextData[a].length === 0;
          })
          if (validateObj.length) {
              setFormValidation(true); // enable form validation to render invalid information
          } else {
              setCurrentStep((prev) => prev + 1); // Increase currentStep count
              setFormValidation(false); // disable form validation
          }
      }
    }

    // Go back previous steps
    const previousStep = () => {
        setCurrentStep((prev) => prev - 1);
        setShowAlert(false);
    }

    const success = async () => {
      // send data to backend using API
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(wizardContext)
      };
      try {
          let response = await fetch("https://reqres.in/api/posts", requestOptions);
          let data = await response.json();
          console.log("API Response success", data);
          setShowAlert(true); // show alert conatainer
          document.documentElement.scrollTop = 0; // scroll to top
      } catch(e) {
          console.log("API Response Error", e);
      }
    }

    // Render alert container
    const showAlertContainer = () => {
      if(showAlert) {
        return (
          <Alert variant="success" id="modalBox" className="mt-2" onClose={() => setShowAlert(false)} dismissible>
              Congratulation! Your order placed successfully... &nbsp;
              <Alert.Link onClick={()=>window.location.reload()}>Place new order</Alert.Link>.
              <div className="print-block">
                  <Alert.Link onClick={()=>window.print()}>
                      Print shipping label: <img src={logo} className="print-image" alt="logo"/>
                  </Alert.Link>
              </div>
          </Alert>
        )
      }
    }

    //wizard steps
    const wizardSteps = () => {
      switch (currentStep) {
        case 1:
          return <SenderAddress
                    wizardContext={wizardContext.from}
                    onAction={handleNameAndAddress}
                    formValidation={formValidation} />;
        case 2:
          return <ReceiverAddress
                    wizardContext={wizardContext.to}
                    onAction={handleNameAndAddress}
                    formValidation={formValidation} />;
        case 3:
          return <PackageWeight
                    wizardContext={wizardContext}
                    onAction={handleWeight}
                    ref={packageWeightRef}
                    formValidation={formValidation} />;
        case 4:
          return <ShippingOption 
                    wizardContext={wizardContext} 
                    onAction={handleShipping} 
                    formValidation={formValidation} />;
        case 5:
          return <ReviewConfirm 
                    wizardContext={wizardContext} 
                    onAction={success} />;
        default:
      }
    }

    return (
        <>
          <Header />
          <Container className="screen-width">
              <ProgressBar striped now={currentStep * 20} className="mt-3" variant={currentStep === 5 && "success"} />
              {showAlertContainer()}
              <Card className="mt-3 shadow py-1 bg-body rounded card-padding">
                  <Card.Body>
                    {wizardSteps()}
                  </Card.Body>
              </Card>
              {!showAlert && <Navigation
                previousStep={previousStep}
                nextStep={nextStep}
                currentStep={currentStep}
              />}
          </Container>
        </>
    );
}


export default Wizard;