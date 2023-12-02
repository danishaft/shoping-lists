'use client'
import { memo } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styles from './Chart.module.scss'

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 300, pv: 2400, amt: 2400}, {name: 'Page C', uv: 200, pv: 2400, amt: 2400}, {name: 'Page D', uv: 300, pv: 2400, amt: 2400}, {name: 'Page E', uv: 100, pv: 2400, amt: 2400}];
export const Chart = memo(function Chart(){
    return (
        <div className={styles.chart_cont}>
            <h2>Monthly Summary</h2>
            <LineChart width={600} height={300} data={data} margin={{ top: 40, right: 0, left: -25, bottom: 5 }}>
                <Line type="monotone" dataKey="uv" stroke="#F9A109" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="name" strokeDasharray={'5,5'}/>
                <YAxis strokeDasharray={'5,5'}/>
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
      )
})
