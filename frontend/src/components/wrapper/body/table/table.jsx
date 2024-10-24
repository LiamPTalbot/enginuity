import React from "react";
import { InputForm } from "./input_form";
import '@royalnavy/fonts';
import { TabSet, TabSetItem } from '@royalnavy/react-component-library'; 

export function Table() {
    return (
        <div className='table'>
            <div className='tabNav'>
                <TabSet isFullWidth>
                    <TabSetItem title="Input">
                        <InputForm/>
                    </TabSetItem>
                    <TabSetItem title="Output">
                        <p>
                            Example tab 2 content
                        </p>
                    </TabSetItem>
                </TabSet>
            </div>
        </div>
    );
}
