import React from "react";
import { FailureReport } from "./failure_report";
import { FuelReport } from "./fuel_report";
import { SurvivalCurve } from "./survival_curve";
import '@royalnavy/fonts';
import { TabSet, TabSetItem } from '@royalnavy/react-component-library'; 

export function Table() {
    return (
        <div className='tabNav'>
                <TabSet isFullWidth className="tabSetContainer">
                    <TabSetItem title="Failure Report Input">
                        <FailureReport/>
                    </TabSetItem>
                    <TabSetItem title="Fuel Report Input">
                        <FuelReport/>
                    </TabSetItem>
                    <TabSetItem title="Survival Curve">
                        <SurvivalCurve/>
                    </TabSetItem>
                </TabSet>
        </div>
    );
}
