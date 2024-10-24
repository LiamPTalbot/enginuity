import { Field, Fieldset, SectionDivider, TextInput } from "@royalnavy/react-component-library";
import React from "react";

export function InputForm() {
    return(
        <div className="inputForm">
            <SectionDivider title="Failure Report">
            Please provide details of the failure below.
            </SectionDivider>
            <Fieldset legend="Personal Details">
            <Field>
                <TextInput
                label="First name"
                name="firstName"
                />
            </Field>
            <Field>
                <TextInput
                label="Last name"
                name="lastName"
                />
            </Field>
            <Field>
                <TextInput
                label="Email address"
                name="emailAddress"
                />
            </Field>
            </Fieldset>
        </div>
    )
}