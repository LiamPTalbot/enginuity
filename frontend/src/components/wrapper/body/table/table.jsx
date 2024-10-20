import React from "react";
import '@royalnavy/fonts';
import { TabSet, TabSetItem } from '@royalnavy/react-component-library'; 

export function Table() {
    return (
        <div className='table'>
            <div className='tabNav'>
                <TabSet isFullWidth>
                    <TabSetItem title="Input">
                        <p>
                            Example tab 1 content
                        </p>
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
