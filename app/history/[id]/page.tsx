import { SingleHistoryPage } from '@/containers'
import React, { memo } from 'react'

 const SingleHistory: React.FC<{params: {id: string}}> = ({params}) => {
  return (
    <SingleHistoryPage id={params.id}/>
  )
}
export default memo(SingleHistory)
