// import React from 'react'

import { data } from '../utilities/constant'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

const DashboardChart = () => {
  return (
    <div className='w-[1028px] h-[365px] py-12 px-3 flex mb-8 rounded-3xl bg-white'>
      <AreaChart width={1000} height={280} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4880FF" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#4880FF" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#4880FF" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>

    </div>
  )
}

export default DashboardChart
