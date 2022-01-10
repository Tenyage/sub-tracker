import {React, useRef, useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

////////////////////////////////////////////////

// This data will be eventually replaced once the data structure has been determined.

const testData = {
    liveData: [22431, 22467, 22589, 22603, 22606],
    predictionData: [22615, 22714],
}

const testLabels = [...Array(testData.liveData.length + testData.predictionData.length).keys()]

////////////////////////////////////////////////

const ChartData = () => {
    const {liveData, predictionData} = testData
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
    datasets: [],
    });

    const live = (ctx, value) => {; return ctx.p0DataIndex < testData.liveData.length - 1 ? value : undefined }
    const predicted = (ctx, value) => { return ctx.p0DataIndex >= testData.liveData.length - 1 ? value : undefined }

    useEffect(() => {
        const chart = chartRef.current;
        
        if (chart) {
            setChartData({
                labels: testLabels,
                datasets: [{
                    label: ChartData.Constants.LABEL,
                    data: liveData.concat(predictionData),
                    borderColor:  ChartData.Constants.COLOUR_PRI,
                    backgroundColor: ChartData.Constants.COLOUR_PRI_OPAQUE,
                    pointBorderColor: ChartData.Constants.POINT_BORDER,
                    pointBackgroundColor: ChartData.Constants.POINT_FILL,
                    fill: true,
                    tension: 0.3,
                    segment: {
                        borderColor: 
                        ctx => live(ctx, ChartData.Constants.COLOUR_PRI) || predicted(ctx, ChartData.Constants.COLOUR_SEC),
                        backgroundColor: 
                        ctx => live(ctx, ChartData.Constants.COLOUR_PRI_OPAQUE) || predicted(ctx, ChartData.Constants.COLOUR_SEC_OPAQUE)
                    }
                }],
            });
        }
    }, []);

    return (
        <>
            <Line ref={chartRef} type='line'  
                data={chartData} 
                options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    } 
                }}
            />
        </>
    )
}

ChartData.Constants = {
    LABEL: "Subscriber Data",
    COLOUR_PRI: "rgb(9, 165, 189, 1)",
    COLOUR_PRI_OPAQUE: "rgb(9, 165, 189, 0.4)",
    COLOUR_SEC: "rgb(239, 165, 189, 1)",
    COLOUR_SEC_OPAQUE: "rgb(239, 165, 189, 0.4)",
    POINT_BORDER: "grey",
    POINT_FILL: "white"
} 

export default ChartData