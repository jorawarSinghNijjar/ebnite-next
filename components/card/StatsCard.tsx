import React from 'react'

interface props{
    numberData: string;
    desc: string;
}
function StatsCard({numberData, desc}: props) {
  return (
    <div className='p-14 shadow-xl rounded-2xl text-center bg-white'>
        <h4 className='text-5xl font-bold mb-4'>{numberData}</h4>
        <p className="text-xl">{desc}</p>
    </div>
  )
}

export default StatsCard