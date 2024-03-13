// pages/index.js

import React, { useState } from 'react';
import FormInput from '@/components/formInput';
import { calculateSquareType } from '@/utils'

const IndexPage = () => {
  const [sudut, setSudut] = useState(90);

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [C, setC] = useState(0);
  const [D, setD] = useState(0);

  const [titikA, settitikA] = useState(0);
  const [titikB, settitikB] = useState(0);
  const [titikC, settitikC] = useState(0);
  const [titikD, settitikD] = useState(0);

  const [result, setResult] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here

    // Example usage
    const a = A;
    const b = B;
    const c = C;
    const d = D;

    const squareType = calculateSquareType(a, b, c, d, sudut);
    setResult(squareType);

  };

  return (
    <div className="min-h-screen flex flex-row items-center justify-center mt-5">
      <div className="max-w-md bg-white p-8 rounded shadow-md mr-4">
        <h2 className="text-2xl font-semibold mb-4">Rectangle Type</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

        <div className='col-span-2'>
            <FormInput label="Sudut" value={sudut} onChange={e => setSudut(e.target.value)} />
          </div>

          <div className='col-span-1'>
            <FormInput label="Sisi A" value={A} onChange={e => setA(e.target.value)} />
          </div>

          <div className='col-span-1'>
            <FormInput label="Sisi B" value={B} onChange={e => setB(e.target.value)} />
          </div>

          <div className='col-span-1'>
            <FormInput label="Sisi C" value={C} onChange={e => setC(e.target.value)} />
          </div>

          <div className='col-span-1'>
            <FormInput label="Sisi D" value={D} onChange={e => setD(e.target.value)} />
          </div>

          {/* titik */}
          {/* <div className='col-span-1'>
            <FormInput label="titik A" value={titikA} onChange={e => settitikA(e.target.value)} />
          </div>

          <div className='col-span-1'>
            <FormInput label="titik B" value={titikB} onChange={e => settitikB(e.target.value)} />
          </div>

          <div className='col-span-1'>
            <FormInput label="titik C" value={titikC} onChange={e => settitikC(e.target.value)} />
          </div>

          <div className='col-span-1'>
            <FormInput label="titik D" value={titikD} onChange={e => settitikD(e.target.value)} />
          </div> */}


          <button
            type="submit"
            className="col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          >
            Submit
          </button>
        </form>

      </div>

      <div className="max-w-md bg-white p-8 rounded shadow-md mt-5 border border-gray-500" style={{ width: '300px', height: '300px' }}>
        <h2 className="text-xl font-semibold mb-4">Result:</h2>
        {/* Tambahkan elemen atau tampilkan hasil di sini */}
        {result}
        <div>

          {/* <div class="h-24 w-48 bg-blue-500 transform rotate-45"></div> */}

        </div>
      </div>

    </div>

  );
};

export default IndexPage;
