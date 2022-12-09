import React from 'react'

const NewsItem =(props)=> {
 
  
      
     let{ title,description,imgUrl,newsUrl,author,date} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imgUrl?"https://c.ndtvimg.com/2022-11/stcdnj0g_anand-mahindra_625x300_21_November_22.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'> By {author? author:"unknown" } on { new Date(date).toGMTString()}</small></p>
    <a href={newsUrl}  target ="_blank "className="btn  btn-sm btn-primary">Read more</a>
  </div>
</div>

  
      </div>


    )
  }


export default NewsItem
