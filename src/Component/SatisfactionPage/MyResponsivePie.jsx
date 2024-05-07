import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const MyResponsivePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        sortByValue={true}
        innerRadius={0.6}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'set1' }}
        borderColor={{
            from: 'color',
            modifiers: [['darker', 0.2]]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 30,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 90,
                itemHeight: 48,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
);

export default MyResponsivePie;