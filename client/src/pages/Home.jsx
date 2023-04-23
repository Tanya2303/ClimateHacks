/* eslint-disable no-unused-vars */
import React from 'react'
import HeroHomeImg from "../assets/hero.svg"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center mt-4">

        <div className='md:grid md:grid-cols-2 items-center px-36 py-8'>
          <div className='text-white'>
            <h1 className='text-3xl md:text-6xl'>About Us</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider text-justify'>The problem addressed by these initiatives is the negative impact of human activities on the environment, particularly through the emission of greenhouse gases and the consumption of non-renewable resources. By providing daily tips for sustainable living and a free tool to calculate their carbon footprint, people can become more aware of their impact on the environment and take action to reduce it. </p>

          </div>
          <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
            <img src={HeroHomeImg} alt="img" width="250" height="250" />
          </div>
        </div>

        <section
          className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center bg-parallex1">
          <h1 className="text-5xl font-semibold mt-20 mb-10">
            Take care of climate change
          </h1>

          <span className="text-center font-bold text-xl my-20">
            <p className=''>Save Environment</p>

            <hr className="h-[0.15rem] w-96 my-4 bg-black" />

            <p className=''>Buy Green Energy Products</p>


            <hr className="h-[0.15rem] w-96 my-4 bg-black" />

            <p className=''>Get coupens for taking care of environment</p>

          </span>
        </section>

        <section className="p-20 space-y-8">
          <div className='text-white'>
            <h1 className='text-5xl'>Tips for climate change:</h1>
            <ul className="text-xl ml-5 py-4">
              <li className="list-disc py-1">Consider your travel.</li>
              <li className="list-disc py-1">Throw away less food.</li>
              <li className="list-disc py-1">Reduce, reuse, repair & recycle.</li>
              <li className="list-disc py-1">Walk, bike, or take public transport.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
