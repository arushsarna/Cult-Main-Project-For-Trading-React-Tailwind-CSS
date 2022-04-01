
// import React from 'react'
// import ReactDOM from 'react-dom';
// const H1 =() => React.createElement("h1",{className:" text-red-500 font-bold text-4xl flex justify-center"}, "Yo Mother Fucker!");

import { useState } from "react";

// ReactDOM.render(H1, document.getElementById("container"));

// export default function Create() {
//   return (
//       <div >
//       <div id =" container">
     
//         <H1/>
//           </div>      

//     </div>
//   )
// }



export default function Create(props) {

  // const [posts, updatePost] = useState([" shreyas madarchod hai "]);
  const [ num, updateNum ] = useState ([0 ]);
 const [  hello ,world ] =  useState ("hello");
   const counter = 0;
  const updateItem = () => { 
   

    //   world(" world");
    
    // updatePost([...posts, "yo mother fucker"])
    updateNum([...num, parseInt(num.at(-1)) +1 ]);
  }
  return (<div className=" flex-col  m-5 justify-center   items-center ">

    <button onClick={updateItem} >{props.text}</button>
    {num.map((num) => (<div className="  w-20 h-20 p-20 m-5 text-white bg-red-500  ">{ num} </div>))}
  </div>
  )
}