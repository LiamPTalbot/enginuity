import { Button, DatePicker, Field, Fieldset, SectionDivider, TextInput } from "@royalnavy/react-component-library";
import React from "react";

export function FuelReport() {
    return(
        <div className="fuelReport">
            <SectionDivider title="Fuel Report">
            Please complete the below form with the fuel analysis details. All inputs are mandatory in order to enable the submit button.
            </SectionDivider>
            <>
                <Fieldset legend="Sample Details">
                    <Field>
                    <TextInput label="Ship" name="ship"/>
                    </Field>
                    <Field>
                    <TextInput label="Fuel Tank" name="fuelTank"/>
                    </Field>
                    <Field>
                    <DatePicker
                    label="Date Sample Taken"
                    onBlur={() => {}}
                    onCalendarFocus={() => {}}
                    onChange={() => {}}
                    />
                    </Field>
                </Fieldset>
                <Fieldset legend="Results">
                    <Field>
                    <TextInput label="Name" name="name"/>
                    </Field>
                    <Field>
                    <TextInput label="Email Address" name="email"/>
                    </Field>
                    <Field>
                    <TextInput label="Ship" name="ship" />
                    </Field>
                </Fieldset>
                <Fieldset>
                    <Field>
                    <TextInput label="Engine" name="engine"/>
                    </Field>
                    <Field>
                    <TextInput label="Engine ID" name="engineID"/>
                    </Field>
                    <Field>
                    <TextInput label="Fuel Feed" name="fuelFeed"/>
                    </Field>
                </Fieldset>
                <SectionDivider />
                <Button className="submitButton" icon={null} size="forms" type="submit">Submit</Button>
            </>
        </div>
    )
}


// Need to input the results data

