import React from 'react'
import Article from '../../common/Article/Article'
import articles from '../../article.json'
import './Home.css'

const Home = () => {
  const buttonClick = () => {
    console.log('Click!')
  }

  return (
    <div id='home' className='wrapper'>
      <h1>Article Homepage</h1>
      <div className='article-section'>
        
        {articles.map((item) => {
          return (<Article key = {item.image} data = {item} click={buttonClick}/>)
        })}
        
      </div>
      
    </div>
  )
}

export default Home
