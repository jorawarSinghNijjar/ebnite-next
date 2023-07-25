import React from 'react'

interface props{
    numberData: string;
    desc: string;
}
function StatsCard({numberData, desc}: props) {
  return (
    <div className='p-14 shadow-2xl rounded-2xl text-center'>
        <h4 className='text-5xl font-bold mb-2'>{numberData}</h4>
        <p>{desc}</p>
    </div>
  )
}

export default StatsCard