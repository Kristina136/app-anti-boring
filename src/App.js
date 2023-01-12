
import { useEffect, useState } from 'react';
import './App.css';
import { data } from './data';






function App() {

const [advice, setAdvice] = useState("");
/* State for img*/
const[image, setImage] = useState("https://img.freepik.com/free-vector/tired-man-sleeping-on-laptop-keyboard-flat-illustration_74855-15549.jpg?size=626&ext=jpg&ga=GA1.1.285516938.1673547099&semt=sph");

async function getActivity (){
    const res = await fetch("https://www.boredapi.com/api/activity/");
    const result = await res.json();
    const resReseived = result.type;
    console.log(result);
    setAdvice(result.activity);
   showImg(resReseived);
  };

/* Conditions for show img*/
 const showImg=(resReseived)=>{
  data.forEach(element=>{
     if(resReseived===element.type){
   setImage(element.image);
  }
  });
  
 }
 
useEffect(()=>{
  function getActivity(){
  }
  getActivity();
}, []);







 

  return (
    <div className="App">
       <div className="container">
     <h2>{advice}</h2>
     </div>
   <img src={image} alt="activity"/>
     <button onClick={getActivity}>Get activity</button>
     
    </div>
  );
}

export default App;