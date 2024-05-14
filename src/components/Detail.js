import React from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { db } from "../firebase/FireBase";
import { doc, getDoc } from "firebase/firestore";

import {useState,useEffect} from 'react';

const Detail = () => {
    const {id} = useParams();
    const [data,setData] = useState({
        title: "",
        year: "",
        image: "",
        description: ""
    });
    useEffect(() => {  
          async function getData() {
            const _doc = doc(db, "Movies", id);
            const _data = await getDoc(_doc);
            setData(_data.data());
          }    
           getData();
    }) 
  return (
  
    <div className="p-4 mt-4 flex w-full justify-center">
      <img className="h-96" src={data.image} alt="" />
      <div className="ml-4 w-1/2">
        <h1 className="text-3xl font-bold text-gray-400">
          {data.title}<span className="text-xl"> {data.year} </span>
        </h1>
        <ReactStars size={20} half={true} value={4} edit={false} />
        <p className="mt-3">{data.description}</p>
      </div>
    </div>
  )
};

export default Detail;
