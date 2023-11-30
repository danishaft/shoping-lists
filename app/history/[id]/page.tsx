import React, { memo } from 'react'

 const SingleHistory: React.FC<{params: {id: string}}> = ({params}) => {
  return (
    <div>page: {params.id}</div>
  )
}
export default memo(SingleHistory)
