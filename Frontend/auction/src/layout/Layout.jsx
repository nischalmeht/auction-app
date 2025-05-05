import React from 'react'
import SideDrawer from './SideDrawer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex">
    <SideDrawer />
    <div className="ml-64 p-6 w-full">
      <Outlet />
    </div>
  </div>
  )
}

export default Layout