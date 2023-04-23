/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DailyTipsImg from "../assets/dailyTips.svg";

const App = () => {
  const [waterUsage, setWaterUsage] = useState(0);
  const [sustainableProducts, setSustainableProducts] = useState(false);
  const [recycling, setRecycling] = useState(false);
  const [environmentallyFriendly, setEnvironmentallyFriendly] = useState(false);
  const [recommendation, setRecommendation] = useState('');

  const handleWaterUsage = (event) => {
    setWaterUsage(parseInt(event.target.value));
  };

  const handleSustainableProducts = (event) => {
    setSustainableProducts(event.target.checked);
  };

  const handleRecycling = (event) => {
    setRecycling(event.target.checked);
  };

  const handleEnvironmentallyFriendly = (event) => {
    setEnvironmentallyFriendly(event.target.checked);
  };

  const calculateScore = () => {
    let score = 0;

    if (waterUsage < 50) {
      score += 1;
    } else if (waterUsage >= 50 && waterUsage < 100) {
      score += 0.5;
    }

    if (sustainableProducts) {
      score += 1;
    }

    if (recycling) {
      score += 1;
    }

    if (environmentallyFriendly) {
      score += 1;
    }

    return score;
  };

  const getRecommendations = () => {
    const score = calculateScore();

    if (score === 4) {
      setRecommendation("Great job! You're already making environmentally friendly choices.");
    } else if (score === 3) {
      setRecommendation("You're doing well, but there's still room for improvement. Try reducing your water usage further.");
    } else if (score === 2) {
      setRecommendation("You're on the right track, but there's more you can do. Consider using sustainable products and recycling more.");
    } else {
      setRecommendation("You have a lot of room for improvement. Start by reducing your water usage and recycling more.");
    }
  };

  return (
    <div>
      <div className='text-center text-6xl font-base text-white'>Daily Tips</div>

      <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
        <div className=''>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-tertiary rounded-t-md"></div>
            <div className="px-8 py-6 ">
              <label className="block font-semibold" htmlFor="distance"> How much water do you use per day? </label>
              <input type="number" min="0" max="1000" onChange={handleWaterUsage} placeholder="in L" className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

              <label className="block font-semibold" htmlFor="distance"> Do you use sustainable products? </label>
              <input type="checkbox" onChange={handleSustainableProducts} />
              <br />
              <br />
              <label className="block font-semibold" htmlFor="distance"> Do you recycle? </label>
              <input type="checkbox" onChange={handleRecycling} />
              <br />
              <br />
              <label className="block font-semibold" htmlFor="distance"> Do you try to make environmentally friendly choices? </label>
              <input type="checkbox" onChange={handleEnvironmentallyFriendly} />

              <div className="flex justify-between items-baseline">
                <button onClick={getRecommendations} className="mt-4 bg-tertiary text-white py-2 px-6 rounded-md">Get Recommendations</button>
              </div>

              <div>
                <p className="text-xl py-2">{recommendation}</p>
              </div>
            </div>

          </div>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={DailyTipsImg} alt="img" width="422" height="422" />
        </div>
      </div>

    </div>
  );
};

export default App;
