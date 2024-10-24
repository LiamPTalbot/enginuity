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
                    <TextInput label="Density (kg/m3)" name="density"/>
                    </Field>
                    <Field>
                    <TextInput label="Water Reaction Vol Change (ml)" name="waterReaction"/>
                    </Field>
                    <Field>
                    <TextInput label="Flash Point (celsius)" name="flashPoint" />
                    </Field>
                </Fieldset>
                <Fieldset>
                    <Field>
                    <TextInput label="Filter Blocking Tendency" name="filterBlockingTendency"/>
                    </Field>
                    <Field>
                    <TextInput label="Cloud Point (celsius)" name="cloudPoint"/>
                    </Field>
                    <Field>
                    <TextInput label="Sulphur (%)" name="sulphur"/>
                    </Field>
                </Fieldset>
                <Fieldset>
                    <Field>
                    <TextInput label="Colony Forming Units (CFU/ml)" name="colonyFormingUnits"/>
                    </Field>
                    <Field>
                    <TextInput label="Water content (mg/kg)" name="waterContent"/>
                    </Field>
                </Fieldset>
                <SectionDivider />
                <Button className="submitButton" icon={null} size="forms" type="submit">Submit</Button>
            </>
        </div>
    )
}


							

