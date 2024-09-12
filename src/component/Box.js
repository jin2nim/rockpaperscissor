import React from 'react'

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== ""   ) {
    result = props.result === "win" ? "lose" : "win";    
   } else {
    result = props.result;
   }
   if (props.title === "computer") {
    console.log("computer", result);
   }

  return (
    <div className={`box ${result}`}>
        <h3>{props.title}</h3>
        {/* <h2>{props.item && props.item.name}</h2> */}
        <img className="item-img" src={props.item && props.item.img} alt={props.alt}/>
        <h3 className='winOrLose'>{result}</h3>
    </div>
  )
}

export default Box