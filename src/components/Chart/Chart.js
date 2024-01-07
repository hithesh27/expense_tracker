import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
const Chart=(props)=>{
    const getdatavalue=props.datapoints.map(datapoint=>
     datapoint.value
    )
    const maximumvalue=Math.max(...getdatavalue);
    console.log(maximumvalue)
    return (
        <div className='chart'>
            {
            props.datapoints.map((datapoint)=>(
                <ChartBar
                    label={datapoint.label}
                    value={datapoint.value}
                    key={datapoint.label}
                    max={maximumvalue}
                ></ChartBar>
            )
            )
        }
        </div>
    )
}
export default Chart;