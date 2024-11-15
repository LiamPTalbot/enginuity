import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/pages/dashboard.jsx";
import { Button, DatePicker, Field, Fieldset, SectionDivider, TextInput } from "@royalnavy/react-component-library";

export function FailureReport() {

    const user = useContext(UserContext);

    const [formData, setFormData] = useState({
        name: user.name || "",
        email: user.email || "",
        ship: "",
        engine: "",
        engineID: "",
        fuelFeed: "",
        fuelPumpID: "",
        ttf: "",
        dateOfFailure: null // Initialise as null for validation
    });

    // Populate formData when user becomes available
    useEffect(() => {
        if (user) {
            setFormData((prevState) => ({
                ...prevState,
                name: user.name || "",
                email: user.email || "",
            }));
        }
    }, [user]); // Runs whenever `user` changes

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
                        <TextInput label="Name" name="name" value={formData.name} onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Email Address" name="email" value={formData.email} onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Ship" name="ship" value={formData.ship} onChange={handleInputChange} />
                    </Field>
                </Fieldset>
                <Fieldset legend="Engine Details">
                    <Field>
                        <TextInput label="Engine" name="engine" value={formData.engine} onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Engine ID" name="engineID" value={formData.engineID} onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Fuel Feed" name="fuelFeed" value={formData.fuelFeed} onChange={handleInputChange} />
                    </Field>
                </Fieldset>
                <Fieldset legend="Fuel Pump Details">
                    <Field>
                        <TextInput label="Fuel Pump ID" name="fuelPumpID" value={formData.fuelPumpID} onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Time Til Failure" name="ttf" value={formData.ttf} onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <DatePicker label="Date of Failure" name="dateOfFailure" value={formData.dateOfFailure} onChange={handleDateChange} />
                    </Field>
                </Fieldset>
                <SectionDivider />
                <Button className="submitButton" icon={null} size="forms" type="submit" disabled={!isSubmitEnabled}>Submit</Button>
            </>
        </div>
    )
}
