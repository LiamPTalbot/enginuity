import React from "react";
import { FailureReport } from "./failure_report";
import { FuelReport } from "./fuel_report";
import { DataFrame } from "./data_frame";
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
                    <TabSetItem title="DataFrame">
                        <DataFrame/>
                    </TabSetItem>
                    <TabSetItem title="Predictive Analytics">
                        <p>
                            Example tab 4 content
                        </p>
                    </TabSetItem>
                </TabSet>
        </div>
    );
}
