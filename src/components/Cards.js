import React from "react";
import "../App.css";
import {useState,useEffect} from 'react';
import ReactStars from 'react-stars';
import { RotatingLines } from "react-loader-spinner";
import {getDocs} from 'firebase/firestore';
import {MoviesRef} from '../firebase/FireBase';
import { Link } from "react-router-dom";

const Cards = () => {
    const[data,setData] = useState([ ]);
    const[loading,setLoading] = useState(true);
    useEffect(() => {
      async function getData(){
          setLoading(true);
          const _data = await getDocs(MoviesRef);
          _data.forEach((doc) => {
            setData((prv) => [...prv,{...(doc.data()),id: doc.id}])
          })
          setLoading(false)
      }
      getData();
    }, [])

  return (
    <div className="flex flex-wrap justify-between p-3 mt-2">
    { loading ?  <div className="w-full flex justify-center items-center h-96 "  ><RotatingLines /></div> :
    
     data && data.map((element) => {
          return(
    <Link to={'/detail/${e.id}'}>  <div className="card p-1 hover:-translate-y-3 hover:bg-teal-700  font-medium cursor-pointer w-48  mt-3 "> {/*w=width 48 px for every card mt= margin-top*/}
        <img
          className="h-72"
          src={element.image}
          alt={element.title}
        />
        <h1>
          <span className="text-black">Name:</span> {element.title}
        </h1>
        <h1 className="items-center flex">
          <span className="text-black">Rating:</span> 
          <ReactStars 
          size={20}
          half={true} 
          value={4}
          edit={false}/>
        </h1>
        <h1>
          <span className="text-black">Year:</span> {element.year}
        </h1>
      </div> </Link>
          ) 
      } )
} 
    </div>
  ); 
};

export default Cards;
