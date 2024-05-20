// import React from 'react'

const DashboardCard = ({name, icon, value, bgColor, txColor}) => {
  return (
    <div>
      <div className="flex bg-white p-4 rounded-md w-fit justify-between gap-10">
        <div className="flex flex-col gap-3">
            <p className="text-xs text-gray-400">Total {name}</p>
            <div className="text-xl font-semibold">{value}</div>
        </div>
        <div className={`rounded-full h-10 w-10 flex justify-center items-center ${txColor} ${bgColor} bg-opacity-20`}>{icon}</div>
      </div>
    </div>
  )
}

export default DashboardCard
