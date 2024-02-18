import React from 'react'
import Hero from '../components/BlogHero'
import BlogSearch from '../components/BlogSearch'

const BlogPage = () => {
  return (
    <section className='max-container'>
        <Hero/>
        <BlogSearch/>
    </section>
  )
}

export default BlogPage