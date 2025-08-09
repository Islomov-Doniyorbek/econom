import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart,
  Legend,
  Bar
} from 'recharts';

const API_KEY = "1b54e1f38ca545c09216b7945582ac2b";

const StockCharts = () => {
  const { symbol } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&outputsize=7&apikey=${API_KEY}`;
      const res = await fetch(url);
      const result = await res.json();

      if (!result?.values) return;

      setData(result.values.reverse());
    };

    fetchData();
  }, [symbol]);

  return (
    <div className='w-full flex flex-col gap-10 items-center' style={{ padding: '20px' }}>
      <p className='text-2xl w-full flex justify-around'>
        <h2><span className='text-emerald-800 font-semibold'>{symbol}</span> - Oxirgi 7 kunlik narxlar</h2>
        <Link to={"/dashboard"}>Qaytish</Link>
      </p>
      {data.length > 0 ? (
        <ResponsiveContainer width="60%" height={600}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="8 8" />
            <XAxis dataKey="datetime" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="close" fill="#82ca9d" />
            {/* <Line type="monotone" dataKey="close" stroke="#8884d8" strokeWidth={2} /> */}
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Yuklanmoqda...</p>
      )}
    </div>
  );
};

export default StockCharts;
