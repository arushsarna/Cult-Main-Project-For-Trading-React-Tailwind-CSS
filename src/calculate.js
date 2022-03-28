import React from 'react'
import { useState } from "react";
export default function Calculate() {

    const [investment, setInvestment] = useState(0);
    const [lotSize, setLotsize] = useState(0);
    const [sip, setSip] = useState(0);
    const [time, setTime] = useState(0);
    const [incSip, setIncSip] = useState(0);
    const [risk, setRisk] = useState(4);
    var returns = 0;
    var returns1 = 0;
    var returns2 = 0;
    function calculate() {



        const lot = investment / parseInt(lotSize)

        returns = (parseInt(lotSize) * parseInt(lot) * parseInt(risk)) * parseInt(time) / 100 + parseInt(investment)
        returns1 = (parseInt(lotSize) * parseInt(lot) * parseInt(risk)) * parseInt(time) / 200 + parseInt(investment)
        returns2 = (parseInt(lotSize) * parseInt(lot) * parseInt(risk)) * parseInt(time) / 400 + parseInt(investment)
        

        setInvestment(returns);


    }



    return (<div>



        <div className=' bg-gray-900 w-full h-screen flex justify-center items-center'>
            <div className=' bg-gray-800 w-2/3 h-3/4 text-white font-bold rounded-lg '>

                <div className=' mt-5 text-3xl flex justify-center w-full'>
                    <div>Cult Investment Calculator!</div>
                </div>
                <div className='m-10 flex flex-row'>

                    <div className=' mr-5 pt-2'>Enter the Initial Investment :-</div>

                    <input type="number " onChange={e => setInvestment(e.target.value)} className='bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900' />
                </div>
                <div className='m-10 flex flex-row'>

                    <div className=' mr-5 pt-2'>Amount Required Per Lot  :-</div>
                    <input type="text " onInput={e => setLotsize(e.target.value)} className='bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900' />
                </div>
                <div className='m-10 flex flex-row'>

                    <div className='pt-2'>Sip :-  </div>
                    <input type="number " onInput={e => setSip(e.target.value)} className='bg-gray-200 ml-52  appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900' />
                </div>
                <div className='m-10 flex flex-row'>

                    <div className='pt-2'>Time Period :- </div>
                    <input type="text " onInput={e => setTime(e.target.value)} className='bg-gray-200 ml-36  appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900' />
                </div>
                <div className='m-10 flex flex-row'>
                    <div>

                        <div className='pt-2'>Sip Increase Per
                        </div>
                        <div className='pt-2'>
                            Month in Percentage :- </div>
                    </div>
                    <input type="text " onInput={e => setIncSip(e.target.value)} className='bg-gray-200 ml-20 relative right-2 h-10 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-900' />
                </div>


                <div className='m-10 flex flex-row'>
                    <div className=' mr-5 pt-2'> Select a Plan :-</div>
                    <div className="relative inline-block ml-24 -right-2 pl-2 text-gray-700">

                        <select onChange={e => setRisk(e.target.value)} className="w-full h-10 pl-3 pr-6 text-base outline-none placeholder-gray-600 border rounded appearance-none focus:shadow-outline" >
                            <option selected="selected" value={4}>Midium-Risk</option>
                            <option value={2}>Low-Risk</option>
                            <option value={5}>High-Risk</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        </div>
                    </div>

                </div>
                <button onClick={Calculate} className='ml-10 font-bold bg-white text-gray-900 p-2 px-4 rounded-md hover:text-white hover:bg-blue-500' type=' submit'>Results</button>


            </div>

        </div>

    </div >
    )
}
