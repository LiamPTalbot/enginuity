import { Button, DatePicker, Field, Fieldset, SectionDivider, TextInput } from "@royalnavy/react-component-library";
import React from "react";

export function FailureReport() {
    return(
        <div className="failureReport">
            <SectionDivider title="Failure Report">
            Please complete the below form with the failure details. All inputs are mandatory in order to enable the submit button.
            </SectionDivider>
            <>
                <Fieldset legend="Personal details">
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
                <Fieldset legend="Engine Details">
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
                <Fieldset legend="Fuel Pump Details">
                    <Field>
                    <TextInput label="Fuel Pump ID" name="fuelPumpID"/>
                    </Field>
                    <Field>
                    <TextInput label="Time Til Failure" name="ttf"/>
                    </Field>
                    <Field>
                    <DatePicker
                    label="Date of Failure"
                    onBlur={() => {}}
                    onCalendarFocus={() => {}}
                    onChange={() => {}}
                    />
                    </Field>
                </Fieldset>
                <SectionDivider />
                <Button className="submitButton" icon={null} size="forms" type="submit">Submit</Button>
            </>
        </div>
    )
}

