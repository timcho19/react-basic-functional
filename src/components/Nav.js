import React, { Component } from 'react'

const Nav = (props) =>{ 

    let lists = [];
    let data = props.data;
    console.log('nav.js 실행')
    data.forEach(item=>{
      lists.push(
      <li key={item.id} onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode(item.id);
      }}><a href="/">{item.title}</a></li>
    );
    })

    return (
      <>
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>   
      </>
    )



}

const areEqual = (prevProps, nextProps)=>{
  return prevProps.data === nextProps.data;
};

export default React.memo(Nav, areEqual);