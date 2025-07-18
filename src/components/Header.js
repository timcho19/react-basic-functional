

import React, { useEffect } from 'react'

const Header = (props) =>{
//   shouldComponentUpdate(nextProps, nextState){
//     return false;
// }
  useEffect(()=>{
    console.log('header js 실행 useEffect')
  },[props.title,props.desc])
  return (
    <>
      <header>
        <h1 
          onClick={()=>{
          props.onChangeMode();
        }}
        >{props.title}
        </h1>
          <p>{props.desc}</p>
      </header>
    </>
  )

}


export default Header;