import React from 'react'
import {DashboardHeader, DashboardSidebar} from './Dashboard'

export default function DashboardWrapper({children}) {
  return (
    <div className='dashboard_wrapper min-h-screen flex'>
      <DashboardSidebar/>
      <div className='main_content w-full'>
        <DashboardHeader/>
        {children}
      </div>
    </div>
  )
}
