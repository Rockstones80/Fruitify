// import React from 'react'

const DashboardCard = ({name, icon, value, bgColor, txColor}) => {
  return (
    <div>
      <div className="flex bg-white p-5 rounded-md w-[240px] h-[161px] justify-between ">
        <div className="flex flex-col gap-3">
            <p className="text-[16px] text-gray-400">Total {name}</p>
            <div className="text-[28px] font-semibold">{value}</div>
        </div>
        <div className={`rounded-[24px] h-[60px] w-[60px] flex justify-center items-center ${txColor} ${bgColor} bg-opacity-20`}>{icon}</div>
      </div>
    </div>
  )
}

export default DashboardCard
