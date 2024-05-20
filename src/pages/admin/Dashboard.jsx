// import React from 'react'

import { BiUser } from "react-icons/bi"
import DashboardCard from "../../components/DashboardCard"

const Dashboard = () => {
  return (
    <div>
      <p className="text-xl font-bold">Dashboard</p>
      <div className="py-3 flex gap-5">
        <DashboardCard
          icon={<BiUser />}
          name='User'
          value={30}
          bgColor={'bg-green-400'}
          txColor={'text-green-400'}
        />
        <DashboardCard
          icon={<BiUser />}
          name='User'
          value={30}
          bgColor={'bg-red-400'}
          txColor={'text-red-400'}
        />
        <DashboardCard
          icon={<BiUser />}
          name='User'
          value={30}
          bgColor={'bg-yellow-400'}
          txColor={'text-yellow-400'}
        />
      </div>
    </div>
  )
}

export default Dashboard
