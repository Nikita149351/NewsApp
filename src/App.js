
import './App.css';

import React,{ useState }  from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

import{ BrowserRouter as Router,Routes, Route,} from "react-router-dom"

import LoadingBar from 'react-top-loading-bar'

const  App =()=>{
  const  pageSize= 9;
   const apiKey="e3de42b403e04789b793a9afee8f881f"
  const {progress,setProgress}= useState(0)
  
 const category ="general"
   
 
  
    return (
      <div>
        <Router>

        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
          <  Route exact  path ="/"element={<News setProgress={setProgress} apiKey ={apiKey} key="general" pageSize={pageSize}country="in" category={category}/>}/>
          <  Route exact  path ="/business"element={<News setProgress={setProgress} apiKey ={apiKey} key="business" pageSize={pageSize}country="in" category="business"/>}/>
          < Route  exact path ="/health"element={<News setProgress={setProgress} apiKey ={apiKey}key="health" pageSize={pageSize} country="in" category="health"/>}/>
          < Route  exact path ="/entertainment"element={<News setProgress={setProgress} apiKey ={apiKey}key="entertainment" pageSize={pageSize}country="in" category="entertainment"/>}/>
          < Route  exact path ="/sports"element={<News setProgress={setProgress} apiKey ={apiKey}key="sports" pageSize={pageSize}country="in" category="sports"/>}/>
          < Route  exact path ="/science"element={<News setProgress={setProgress} apiKey ={apiKey}key="science" pageSize={pageSize} country="in" category="science"/>}/>
          < Route  exact path ="/technology"element={<News setProgress={setProgress} apiKey ={apiKey}key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
export default App


