import React, { useEffect, useState } from "react";
import { Button, DatePicker, Field, Fieldset, SectionDivider, TextInput } from "@royalnavy/react-component-library";

export function FailureReport() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        ship: "",
        engine: "",
        engineID: "",
        fuelFeed: "",
        fuelPumpID: "",
        ttf: "",
        dateOfFailure: null // Initialize as null for validation
    });

    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    // Update formData when text inputs change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Update date in formData when DatePicker changes
    const handleDateChange = (date) => {
        setFormData(prevState => ({ ...prevState, dateOfFailure: date }));
    };

    // Enable submit if all fields have values
    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(value => value !== "" && value !== null);
        setIsSubmitEnabled(allFieldsFilled);
    }, [formData]);

    return(
        <div className="failureReport">
            <SectionDivider title="Failure Report">
                Please complete the below form with the failure details. All inputs are mandatory in order to enable the submit button.
            </SectionDivider>
            <>
                <Fieldset legend="Personal details">
                    <Field>
                        <TextInput label="Name" name="name" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Email Address" name="email" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Ship" name="ship" onChange={handleInputChange} />
                    </Field>
                </Fieldset>
                <Fieldset legend="Engine Details">
                    <Field>
                        <TextInput label="Engine" name="engine" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Engine ID" name="engineID" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Fuel Feed" name="fuelFeed" onChange={handleInputChange} />
                    </Field>
                </Fieldset>
                <Fieldset legend="Fuel Pump Details">
                    <Field>
                        <TextInput label="Fuel Pump ID" name="fuelPumpID" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Time Til Failure" name="ttf" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <DatePicker
                            label="Date of Failure"
                            name="dateOfFailure"
                            onChange={handleDateChange} // Handle date change with a function
                        />
                    </Field>
                </Fieldset>
                <SectionDivider />
                <Button className="submitButton" icon={null} size="forms" type="submit" disabled={!isSubmitEnabled}>Submit</Button>
            </>
        </div>
    )
}
