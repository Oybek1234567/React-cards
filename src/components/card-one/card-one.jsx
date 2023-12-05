import './card-one.css'
function CardOne(news) {
  return (
    <div className='cards-container'>
        <div className='card-one'>
        {news.map((item) => (
           <div className="cards" key={item.id}>
            <img src={item.img} alt={item.title}  />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
           </div>
        ))}
        </div>
        
    </div>
  )
}

export default CardOne
