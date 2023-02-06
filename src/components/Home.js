import React from 'react'
import Posts from './Posts'
import Aside from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Home() {
  return (
    <>
        <Header />
          <div class="container mx-auto flex flex-wrap py-6">
            <Posts />
            <Aside />
          </div>
        <Footer />
    </>
  )
}

export default Home