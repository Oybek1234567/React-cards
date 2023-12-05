import './App.css'
import CardOne from './components/card-one/card-one'
import CardTwo from './components/card-two/card-two'
import { useState } from 'react'

const App = () => {
  const [news, setNews] = useState([
    {
          id: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlIw5d7f4O6f13cP8cP6ayOqgrqlVxlqjWg&usqp=CAU',
          title: 'News in Russia',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore ad optio.',
    },
    {
        id: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JirDPMefJhGnwXwPKpfVBe6C56Ku6JQsiw&usqp=CAU',
        title: 'News in USA',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore ad optio.',
    },
    {
        id: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNN-qnuvv4ooI5cC22OCCFCFNgJOY1eAwDoA&usqp=CAU',
        title: 'News in North Korea',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore ad optio.',
    },       
        ])
  return (
    <div className='container'> 
      <button className='btn-one' onClick={CardOne}>Jahon yangiliklari</button>
      <button className='btn-two' onClick={CardTwo}>Hududiy yangiliklar</button> 

      <CardOne users={news}/>
      <CardTwo />
    </div>
  )
}

export default App
