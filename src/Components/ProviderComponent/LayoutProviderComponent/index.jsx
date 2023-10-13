import React from 'react'
import SidebarProviderComponent from '../SidebarProviderComponent'
import NavbarProviderComponent from '../NavbarProviderComponent'

const LayoutProviderComponent = ({ children }) => {
  return (
    <div>
      <NavbarProviderComponent />
      <div className='h-full'>  
        <SidebarProviderComponent />
        
        <div class="p-4 sm:ml-64">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutProviderComponent