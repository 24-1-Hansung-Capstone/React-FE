import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({ data }) => (
    <ResponsiveBar
    data={data}
    keys={[
        'negative',
        'positive',
    ]}
    indexBy="country"
    margin={{ top: 10, right: 50, bottom: 70, left: 60 }}
    padding={0.3}
    layout="horizontal"
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={{ scheme: 'nivo' }}
    borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]]
    }}
    axisTop={null}
    axisRight={null}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
        from: 'color',
        modifiers: [['darker', 0.2]]
    }}
    legends={[
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
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

export default MyResponsiveBar;