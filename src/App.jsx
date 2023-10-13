import { Fragment, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './Routes/Routes'
import DefaultComponent from './Components/DefaultComponent/DefaultComponent'
import LayoutProviderComponent from './Components/ProviderComponent/LayoutProviderComponent'

function App() {

  return (
    <>
      <div>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page
            const Layout = route.isShowHeaderFooter ? DefaultComponent : Fragment
            const LayoutProvider = route.isShowSidebarProvider ? LayoutProviderComponent : Fragment
            return (
              <Route path={route.path} key={index} element={
                <LayoutProvider>
                  <Layout>
                    <Page />
                  </Layout>
                </LayoutProvider>
              } />
            )
          })}
        </Routes>
      </div>
    </>
  )
}

export default App
