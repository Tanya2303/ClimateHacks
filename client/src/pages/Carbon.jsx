/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CarbonImg from "../assets/carbon.svg";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Recent Data for Carbon emissions',
        },
    },
};

const labels = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Distance Travelled',
            data: [3.00, 1.00, 0.75, 3.60, 1.20, 0.90, 1.40],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Webpage visits',
            data: [0.01, 0.03, 0.09, 0.06, 0.08, 1.20, 0.05],
            borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
    ],
};

export default function Carbon() {

    const [distance, setDistance] = useState("");
    const [modeOfTransport, setModeOfTransport] = useState("");
    const [carbonEmissions, setCarbonEmissions] = useState(0);

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    };

    const handleModeOfTransportChange = (event) => {
        setModeOfTransport(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let carbonEmissionFactor = 0;
        switch (modeOfTransport) {
            case "car":
                carbonEmissionFactor = 0.12;
                break;
            case "bus":
                carbonEmissionFactor = 0.04;
                break;
            case "train":
                carbonEmissionFactor = 0.03;
                break;
            case "bike":
                carbonEmissionFactor = 0;
                break;
            case "walk":
                carbonEmissionFactor = 0;
                break;
            default:
                break;
        }
        const carbonEmissionsResult = carbonEmissionFactor * distance;
        setCarbonEmissions(carbonEmissionsResult.toFixed(2));
    };

    const [pageViews, setPageViews] = useState('');
    const [pageViewsError, setPageViewsError] = useState(false);
    const [websiteType, setWebsiteType] = useState('static');
    const [websiteTypeOptions] = useState([
        { value: 'static', label: 'Static Website' },
        { value: 'dynamic', label: 'Dynamic Website' },
    ]);

    const [carbonFootprint, setCarbonFootprint] = useState(null);

    const calculateCarbonFootprint = () => {
        if (!pageViews || pageViews <= 0) {
            setPageViewsError(true);
            setCarbonFootprint(null);
            return;
        }

        let footprint;
        if (websiteType === 'static') {
            footprint = pageViews * 0.0025;
        } else {
            footprint = pageViews * 0.0075;
        }

        setCarbonFootprint(footprint);
        setPageViewsError(false);
    };

    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Carbon Footprint Calculator</div>

            <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
                <div className=''>
                    <form onSubmit={handleSubmit} className="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div className="h-2 bg-tertiary rounded-t-md"></div>
                        <div className="px-8 py-6 ">
                            <label className="block font-semibold" htmlFor="distance"> Distance </label>
                            <input type="number" id="distance" value={distance} onChange={handleDistanceChange} placeholder="Distance travelled" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label className="block mt-3 font-semibold" htmlFor="modeOfTransport">Mode of transport: </label>
                            <select id="modeOfTransport" className="border w-full h-8 px-3 py-1 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" onChange={handleModeOfTransportChange}>
                                <option value="">Select mode of transport</option>
                                <option value="car">Car</option>
                                <option value="bus">Bus</option>
                                <option value="train">Train</option>
                                <option value="bike">Bike</option>
                                <option value="walk">Walk</option>
                            </select>

                            <div className="flex justify-between items-baseline">
                                <button type="submit" className="mt-4 bg-tertiary text-white py-2 px-6 rounded-md">Calculate</button>
                            </div>

                            <div>
                                <p className="text-xl py-2">Carbon emissions: {carbonEmissions} kg CO<sup>2</sup></p>
                            </div>
                        </div>

                        <div className="px-8 py-4">
                            <label className="block font-semibold text-2xl"> Website Carbon Footprint Calculator </label>

                            <label className="block font-semibold"> Enter the number of page views your website gets per year: </label>

                            <input
                                type="number"
                                placeholder="Number of webpages visited" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                                value={pageViews}
                                onChange={(e) => {
                                    setPageViews(e.target.value);
                                    setPageViewsError(false);
                                    setCarbonFootprint(null);
                                }}
                            />
                            {pageViewsError && <p>Please enter a valid number of page views</p>}
                            <label className="block mt-3 font-semibold" htmlFor="modeOfTransport">Select the type of website:</label>

                            <select
                                value={websiteType}
                                className="border w-full h-8 px-3 py-1 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                                onChange={(e) => {
                                    setWebsiteType(e.target.value);
                                    setCarbonFootprint(null);
                                }}
                            >
                                {websiteTypeOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <div className="flex justify-between items-baseline">
                                <button onClick={calculateCarbonFootprint} className="mt-4 bg-tertiary text-white py-2 px-6 rounded-md">Calculate</button>
                            </div>

                            {carbonFootprint !== null && (
                                <div>
                                    <p className="text-xl py-2">
                                        Your website's carbon footprint is {carbonFootprint.toFixed(2)} kg
                                        CO<sup>2</sup>e/year
                                    </p>
                                </div>
                            )}
                        </div>

                    </form>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={CarbonImg} alt="img" width="422" height="422" />
                </div>
            </div>

            <h1 className='text-3xl pl-36 text-white text-left'>Recent Data:</h1>

            <div className='grid place-items-center py-6 px-72'>
                <Line options={options} data={data} className='bg-white p-4 rounded-2xl' />
            </div>

        </div>
    )
}
