import { cn } from '@/lib/utils'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
interface StatCardProps{
  type:'appointment' | 'pending' | 'cancelled'
  count:number
  label:string
  icon:string 
}
const StatCard = ({type,count=0,label,icon}:StatCardProps) => {
  return (
    <div className={cn('stat-card',{
      "bg-appointments":type==="appointment",
      "bg-pending":type==="pending",
      "bg-cancelled":type==="cancelled",
    })}>
      <div className="flex items-center gap-4">
        <Image
        src={icon}
        width={32}
        height={32}
        alt={label}
        className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-white">{count}</h2>
      </div>
    </div>
  )
}

export default StatCard
