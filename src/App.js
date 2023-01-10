
import { useEffect, useState } from 'react';
import './App.css';
import { data } from './data';
import Img from './Img';



function App() {

const [advice, setAdvice] = useState("");
const [img, setImg] = useState(data);
const artPic = (type) =>{
const pic= data.filter(element=>element.type===type);
setImg(pic)
console.log(pic)
}




  const getAdvice = async ()=>{
    const res = await fetch("http://www.boredapi.com/api/activity/");
    const result = await res.json();
    setAdvice(result.activity)
    setImg(result.type)
  };

  // const changeImg = ()=>{
  //   if (setImg ===data
  // }

 useEffect(()=>{
    getAdvice()
  }, []);
 

  return (
    <div className="App">
     <h2>{advice}</h2>
     <Img anyWord={artPic}/>
     <button onClick={getAdvice}>Get activity</button>
     
    </div>
  );
}

export default App;
