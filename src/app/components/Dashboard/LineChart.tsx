'use client'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface LineChartProps {
    labels: string[];
    dataPoints: number[];
    title?: string;
}

const LineChart: React.FC<LineChartProps> = ({ labels, dataPoints, title }) => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Sales',
                data: dataPoints,
                borderColor: '#2b7fff', // <-- line color
                backgroundColor: '#2b7fff', // <-- fill color
                tension: 0.4, // smooth curve
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: !!title,
                text: title,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <>
        <div className='w-full px-5'>
            <div style={{ width: 'full', margin: '50px auto' }} className='bg-white rounded-md px-5 pb-10 pt-3'>
                <h3 className='text-[20px] font-semibold !text-light'>Total Sales</h3>
                <div className='flex items-center gap-2'>
                    <div className='h-[12px] w-[12px] bg-[#2b7fff] rounded-full inline-block'></div>
                    <span className='text-[14px] font-medium !text-light'>Sales</span>
                </div>
                <Line data={data} options={options} />
            </div>  
        </div>
        </>
    );
};

export default LineChart;
