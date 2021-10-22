import React from 'react';
import Wizard from '../component/wizard';
import SenderAddress from '../component/step/senderAddress';
import ReceiverAddress from '../component/step/receiverAddress';
import PackageWeight from '../component/step/packageWeight';
import ShippingOption from '../component/step/shippingOption';
import ReviewConfirm from '../component/step/reviewConfirm';
import Header from "../component/header";
import {shallow,mount} from 'enzyme';

describe("Wizard component tests", () => {
    let wrapper;
    const props = {
        onAction: () => { },
        formValidation: false,
        wizardContext: {
            from: {
                name: "sender name",
                street: "sender street",
                city: "sender city",
                state: "sender state",
                zip: "sender zip",
            },
            to: {
                name: "Receiver name",
                street: "Receiver street",
                city: "Receiver city",
                state: "Receiver state",
                zip: "Receiver zip",
            },
            weight: "10",
            shippingOption: "1",
        }
    }
    
    beforeEach(() => {
        wrapper = shallow(<Wizard />);
    });

    describe("Wizard should print a shipping label when createLabel is called", () => {
        it("should render header component", () => {
            expect(wrapper.find("Header").exists()).toBe(true);
        })
        it("should render Container component", () => {
            expect(wrapper.find("Container").exists()).toBe(true);
        })
        it("should render ProgressBar component", () => {
            expect(wrapper.find("ProgressBar").exists()).toBe(true);
        })
        
        it("should render Navigation component", () => {
            expect(wrapper.find("Navigation").exists()).toBe(true);
        })

        it("should pass props to 'SenderAddress' component",()=>{
            const counterElement = mount(<SenderAddress {...props} />);
            expect(counterElement.props().wizardContext.shippingOption).toBe("1");
            expect(counterElement.props().wizardContext.from.name).toBe("sender name");
            expect(counterElement.props().wizardContext.from.street).toBe("sender street");
            expect(counterElement.props().wizardContext.from.city).toBe("sender city");
            expect(counterElement.props().wizardContext.from.state).toBe("sender state");
            expect(counterElement.props().wizardContext.from.zip).toBe("sender zip");
            expect(counterElement.props().wizardContext.weight).toBe("10");
        })
        
    });
})