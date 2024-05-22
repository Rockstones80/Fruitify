// import React from 'react'

import { RxCountdownTimer } from "react-icons/rx";
import { GoGraph } from "react-icons/go";
import { IoIosCube } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import DashboardCard from "../../components/DashboardCard"
import DashboardChart from "../../components/DashboardChart";

const Dashboard = () => {
  return (
    <div className="">
      <p className="text-xl font-bold">Dashboard</p>
      <div className="py-3 flex gap-6 ">
        <DashboardCard
          icon={<HiUsers size={33}/>}
          name='User'
          value={30}
          bgColor={'bg-purple-400'}
          txColor={'text-purple-400'}
        />
        <DashboardCard
          icon={<IoIosCube size={33}/>}
          name='User'
          value={30}
          bgColor={'bg-yellow-400'}
          txColor={'text-yellow-400'}
        />
        <DashboardCard
          icon={<GoGraph size={33}/>}
          name='User'
          value={30}
          bgColor={'bg-green-400'}
          txColor={'text-green-400'}
        />
        <DashboardCard
          icon={<RxCountdownTimer size={33}/>}
          name='User'
          value={30}
          bgColor={'bg-orange-400'}
          txColor={'text-orange-500'}
        />
      </div>

      <div className="mt-10">
        <DashboardChart />
      </div>
    </div>
  )
}

export default Dashboard
