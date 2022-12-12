import React, { useEffect ,useState} from 'react';

import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';
//  import { PropTypes } from 'react';


const News= (props,category,country,pageSize)=> {
  const [articles,setArticles]= useState([""])
  const [loading,setLoading]= useState([true])
  const [page,setPage]= useState([1])
  const [totalResults,setTotalResults]= useState([0]);
  // 

   const CapitalisedFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


    
  
  const updateNews= async()=> {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    setArticles(parseData.articles)
    setLoading(false)
    setTotalResults(parseData.totalResults)
  }

 useEffect(()=>{
  document.title = `${CapitalisedFirstLetter(props.category)}-NewsMonkey`
  
updateNews();
},[])

 const fetchMoreData= async()=>{
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   
   setPage(page+1)
let data = await fetch(url);
let parseData = await data.json()
console.log(parseData);
 setArticles(articles.concat(parseData.articles))
  setTotalResults(parseData.totalResults) 
  


 };



    return (
      <div className='container my-3'>
        <h2 className="text-center" style={{margin:"35px 0px", marginTop:"90px"}}>NewsMonkey- Top Headlines from {CapitalisedFirstLetter(props.category)}</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          
          hasMore={articles.length !==totalResults}
          loader={loading}
          scrollableTarget="scrollableDiv">
            <div className="contanier">

        
          <div className="row">
            {articles.map((element) => {
              
              return <div className="col-md-4">
                <NewsItem key={element.url} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
            </div>
        </InfiniteScroll>
        
      </div>
  
  )
}
  News.defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general"
  }
  //  News.propTypes = {
  //   country:PropTypes.String.isRequired,
  //   pageSize:PropTypes.Number.isRequired,
  //   category:PropTypes.String.isRequired,

  // }


export default News
