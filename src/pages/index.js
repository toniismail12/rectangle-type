import React, { useState } from 'react';

const RectangleChecker = () => {
    const [params, setParams] = useState({ A: 0, B: 0, C: 0, D: 0 });
    const [type, setType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setParams({ ...params, [name]: parseFloat(value) });
    };

    const checkRectangleType = () => {
        const { A, B, C, D } = params;

        if (A === B && B === C && C === D) {
            setType('Persegi');
        } else if ((A === C && B === D) || (A === B && C === D)) {
            setType('Persegi Panjang');
        } else if ((A === B && C !== D) || (A !== B && C === D)) {
            setType('Jajargenjang');
        } else if ((A === B && B !== C && C !== D) || (A !== B && B === C && C !== D) || (A !== B && B !== C && C === D) || (A === C && B !== C && B !== D)) {
            setType('Trapesium');
        } else {
            setType('Segitiga Sembarang');
        }
    };

    return (
        <div className="container mx-auto mt-10 p-5">
            <h1 className="text-3xl font-bold mb-4">Rectangle Type</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2">A:</label>
                    <input type="number" name="A" value={params.A} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-2">B:</label>
                    <input type="number" name="B" value={params.B} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-2">C:</label>
                    <input type="number" name="C" value={params.C} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block mb-2">D:</label>
                    <input type="number" name="D" value={params.D} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
            </div>
            <button onClick={checkRectangleType} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Check Type</button>
            {type && <p className="mt-4">Rectangle type: {type}</p>}
        </div>
    );
};

export default RectangleChecker;
