import React from 'react'

interface props{
    children: string
}

const NormalText:React.FC<props> = ({children}) => {
  return (
    <p className="text-base text-dark font-normal">{children}</p>
  )
}

export default NormalText