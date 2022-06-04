import React,{useState} from "react";
import Detail from "./Detail";
import Card from "./Card";
import '../App.css';
const Parent=()=>{
    const [data,setData]=useState({
        name:"",
        number:0,
        emonth:0,
        eyear:0,
        cvv:0,
    });
    const handleChange=(e)=>{
        const {name,value} =e.target;
        setData({...data,[name]:value});
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(data);
    }
    return(
        <>
        <div className='App'>
      <Card data={data}/>
      <Detail handleChange={handleChange} submit={submit}/>
      </div>
        </>
    );
};
export default Parent;