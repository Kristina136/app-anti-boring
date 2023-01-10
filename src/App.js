
import { useEffect, useState } from 'react';
import './App.css';






function App() {

const [advice, setAdvice] = useState("");
const [array,setArray] = useState("aktivity");
const[image, setImage] = useState("");





useEffect(()=>{
    getAdvice()
  }, []);
 
  const getAdvice = async ()=>{
    const res = await fetch("http://www.boredapi.com/api/activity/");
    const result = await res.json();
    const resReseived = result.type;
    setAdvice(result.activity);
    setImage(resReseived);
   showImg(resReseived)
  };



/* Array with pics*/
 const img = ["https://img.freepik.com/free-vector/diy-creative-workshop-concept-with-hands-making-flower_23-2148530494.jpg?w=1060&t=st=1673379248~exp=1673379848~hmac=ebdc6413b5f437306c1040224d72e6fa2286f5f3e2b1e9677b86efd57dd2dd2f",
  "https://img.freepik.com/free-vector/man-sleeping-postpone-concept_23-2148493985.jpg?size=626&ext=jpg&ga=GA1.1.1710756582.1673343657&semt=ais", 
  "https://img.freepik.com/free-vector/happy-smiling-couple-running-at-summer-park_74855-6517.jpg?size=626&ext=jpg&ga=GA1.2.1710756582.1673343657&semt=sph",
   "https://img.freepik.com/free-vector/student-with-laptop-studying-on-online-course_74855-5293.jpg?size=626&ext=jpg&ga=GA1.1.1710756582.1673343657&semt=sph", 
   "https://img.freepik.com/free-vector/social-media-network_74855-4575.jpg?size=626&ext=jpg&ga=GA1.2.1710756582.1673343657&semt=sph"
,"https://img.freepik.com/free-vector/organic-flat-people-meditating-collection_52683-60663.jpg?size=626&ext=jpg&ga=GA1.2.1710756582.1673343657&semt=sph"
,"https://img.freepik.com/free-vector/playing-jazz-concept-illustration_114360-7747.jpg?size=626&ext=jpg" 
,"https://img.freepik.com/free-vector/set-of-people-cooking-their-favourite-food_52683-38224.jpg?size=626&ext=jpg&ga=GA1.1.1710756582.1673343657&semt=sph"
,"https://img.freepik.com/free-vector/social-team-helping-charity-and-sharing-hope_74855-6660.jpg?w=1060&t=st=1673379218~exp=1673379818~hmac=48157bde8ca6bbf52528347f1d33227d6f47aad36c1e529ff99be39f6e5ee2ef"
]


/* Conditions for show pic*/
const showImg=(resReseived)=>{
  if(resReseived==="diy"){
    setImage(img[0], setArray("diy"));
  }
  if(resReseived==="busywork"){
    setImage(img[1], setArray("busywork"));
  }
  if(resReseived==="recreational"){
    setImage(img[2], setArray("recreational"));
  }
   if(resReseived==="education"){
    setImage(img[3], setArray("education"));
  }
   if(resReseived==="social"){
    setImage(img[4], setArray("social"));
  }
   if(resReseived==="relaxation"){
    setImage(img[5], setArray("relaxation"));
  }
   if(resReseived==="music"){
    setImage(img[6], setArray("music"));
  }
   if(resReseived==="cooking"){
    setImage(img[7], setArray("cooking"));
  }
  if(resReseived==="charity"){
    setImage(img[8], setArray("cooking"));
    }
}



 

  return (
    <div className="App">
       <div className="container">
     <h2>{advice}</h2>
     </div>
   <img src={image} alt={array}/>
     <button onClick={getAdvice}>Get activity</button>
     
    </div>
  );
}

export default App;
