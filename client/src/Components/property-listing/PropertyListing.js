import React from 'react';

// import App from './App';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
const Listing=()=> {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
        
        fetch("http://localhost:5000/addedproperty")
          .then(res =>res.json())
          .then((result) => {
            setItems(result.user);
            }
          )
          .catch((e)=>console.log(e))
      }, [])
    console.log(items) 


  const searchHandle=async (e)=>{
    let key=e.target.value;
    if(key){
      let result =await fetch(`http://localhost:5000/search/${key}`)

    const data=await result.json();
    console.log(data)
    if (data){
      setItems(data)
    }
    }
  }
    return (<>
  <div className="content">
    <div className="searchbar">
    <form class="search-bar">
              <input type="text" id="search" placeholder="Search PPD ID" onChange={searchHandle}/>
              <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </form></div>
    <div className="addbutton">
      {/* <Link to='/basicInfo'> */}
    <button type="button" class="button">+ Add Property</button>
    {/* </Link> */}
    </div>
  </div>
  <div class="container">
         <table class="table">
           <tr>
              <th>PPDID</th>
              <th>Image</th>
              <th>Property</th>
              <th>Contact</th>
              <th>Area</th>
              <th>Views</th>
              <th>Status</th>
              <th>DaysLeft</th>
              <th>Action</th>
              </tr>

              {
                items.length>0?items.map((item,i)=>(
                  <tr key={i}>

                <td>{item.PPDID}</td>
                <td>image</td>
                <td>{item.Property}</td>
                <td>{item.Contact}</td>
                <td>{item.Area}</td>
                <td>{item.Views}</td>
                <td>{item.Status}</td>
                <td>{item.DaysLeft}</td>
                <td>action</td>
            </tr>   
              )
              ):<p className='res'>No Result</p>
              }
        
          </table>
          
      </div> 

  </>)}
  
  export default Listing;
  