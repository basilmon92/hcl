"use client"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

type ChartProps = {

};

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000) - 1000),
            backgroundColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'Dataset 2',
            data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000) - 1000),
            backgroundColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Dataset 3',
            data: Array.from({ length: labels.length }, () => Math.floor(Math.random() * 2000) - 1000),
            backgroundColor: 'rgb(53, 162, 235)',
        },
    ]
};

export function Chart(props: ChartProps) {
    return (
        <Bar options={options} data={data} aria-label="Hello ARIA World" role="img" />
    );
}