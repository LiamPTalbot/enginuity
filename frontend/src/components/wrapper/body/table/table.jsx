import React from "react";
import { FailureReport } from "./failure_report";
import { FuelReport } from "./fuel_report";
import '@royalnavy/fonts';
import { TabSet, TabSetItem } from '@royalnavy/react-component-library'; 

export function Table() {
    return (
        <div className='table'>
            <div className='tabNav'>
                <TabSet isFullWidth>
                    <TabSetItem title="Failure Report Input">
                        <FailureReport/>
                    </TabSetItem>
                    <TabSetItem title="Fuel Report Input">
                        <FuelReport/>
                    </TabSetItem>
                    <TabSetItem title="Predictive Analytics">
                        <p>
                            Example tab 2 content
                        </p>
                    </TabSetItem>
                </TabSet>
            </div>
        </div>
    );
}
