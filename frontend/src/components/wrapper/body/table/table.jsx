import React from "react";
import { FailureReport } from "./failure_report";
import { FuelReport } from "./fuel_report";
import { SurvivalCurve } from "./survival_curve";
import '@royalnavy/fonts';
import { TabSet, TabSetItem } from '@royalnavy/react-component-library'; 

export function Table({ setSidebarTitle }) {

    const handleTabChange = (title) => {
        console.log("Tab selected:", title); // Check the selected tab’s title
        if (title === "Failure Report Input") {
            setSidebarTitle("Add Failure Report");
        } else if (title === "Fuel Report Input") {
            setSidebarTitle("Add Fuel Report");
        } else if (title === "Survival Curve") {
            setSidebarTitle("Survival Curve");
        }
    };

    return (
        <div className='tabNav'>
            <TabSet 
                isFullWidth 
                className="tabSetContainer"
                onChange={(event) => handleTabChange(event.target.textContent)} // Adjusted for text content
            >
                <TabSetItem title="Failure Report Input">
                    <FailureReport />
                </TabSetItem>
                <TabSetItem title="Fuel Report Input">
                    <FuelReport />
                </TabSetItem>
                <TabSetItem title="Survival Curve">
                    <SurvivalCurve />
                </TabSetItem>
            </TabSet>
        </div>
    );
}
