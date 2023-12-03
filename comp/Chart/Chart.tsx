'use client'
import { memo } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styles from './Chart.module.scss'
import { HistoricalMonthData } from '@/utils/interfaces';

// const data1 = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
export const Chart: React.FC<{data: HistoricalMonthData[]}> = memo(function Chart({data}){
    console.log(data)
    return (
        <div className={styles.chart_cont}>
            <h2>Monthly Summary</h2>
            <LineChart width={200} height={300} data={data} margin={{ top: 40, right: 0, left: -25, bottom: 5 }}>
                <Line type="monotone" dataKey="count" stroke="#F9A109" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="month" strokeDasharray={'5,5'}/>
                <YAxis strokeDasharray={'5,5'}/>
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
      )
})
