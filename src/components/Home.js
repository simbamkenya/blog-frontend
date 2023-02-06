import React from 'react'
import Posts from './Posts'
import Aside from './Sidebar'

function Home() {
  return (
    <div class="container mx-auto flex flex-wrap py-6">
        <Posts />
        <Aside />
    </div>
  )
}

export default Home