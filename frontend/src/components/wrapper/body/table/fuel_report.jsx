import React, { useEffect, useState } from "react";
import { Button, DatePicker, Field, Fieldset, SectionDivider, TextInput } from "@royalnavy/react-component-library";

export function FuelReport() {
    
    const [formData, setFormData] = useState({
        ship: "",
        fuelTank: "",
        dateSampleTaken: "",
        density: "",
        waterReaction: "",
        flashPoint: "",
        filterBlockingTendency: "",
        cloudPoint: "",
        sulphur: "",
        colonyFormingUnits: "",
        waterContent: ""
    });

    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    // Update formData when inputs change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Enable submit if all fields have values
    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(value => value !== "");
        setIsSubmitEnabled(allFieldsFilled);
    }, [formData]);

    return(
        <div className="fuelReport">
            <SectionDivider title="Fuel Report">
                Please complete the below form with the fuel analysis details. All inputs are mandatory in order to enable the submit button.
            </SectionDivider>
            <>
                <Fieldset legend="Sample Details">
                    <Field>
                        <TextInput label="Ship" name="ship" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Fuel Tank" name="fuelTank" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <DatePicker
                            label="Date Sample Taken"
                            name="dateSampleTaken"
                            onChange={(date) => setFormData(prev => ({ ...prev, dateSampleTaken: date }))}
                        />
                    </Field>
                </Fieldset>
                <Fieldset legend="Results">
                    <Field>
                        <TextInput label="Density (kg/m3)" name="density" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Water Reaction Vol Change (ml)" name="waterReaction" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Flash Point (celsius)" name="flashPoint" onChange={handleInputChange} />
                    </Field>
                </Fieldset>
                <Fieldset>
                    <Field>
                        <TextInput label="Filter Blocking Tendency" name="filterBlockingTendency" onChange={handleInputChange}/>
                    </Field>
                    <Field>
                        <TextInput label="Cloud Point (celsius)" name="cloudPoint" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Sulphur (%)" name="sulphur" onChange={handleInputChange} />
                    </Field>
                </Fieldset>
                <Fieldset>
                    <Field>
                        <TextInput label="Colony Forming Units (CFU/ml)" name="colonyFormingUnits" onChange={handleInputChange} />
                    </Field>
                    <Field>
                        <TextInput label="Water content (mg/kg)" name="waterContent" onChange={handleInputChange} />
                    </Field>
                </Fieldset>
                <SectionDivider />
                <Button className="submitButton" icon={null} size="forms" type="submit" disabled={!isSubmitEnabled}>Submit</Button>
            </>
        </div>
    );
}


// Need to add a clear data button so people don't have to manually delete everything.
// Need to add a dropdown on a few of the buttons like ship.