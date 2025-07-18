
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


const Main = (props) =>{ 

  let className = 'd-flex flex-column gap-2 justify-content-end';
    if(props.mode === 'welcome'){
      className += ' d-none';
    }

  return (
    <>
      <main className='shadow p-3 mb-5 bg-body-tertiary rounded'>
        <article>
          <h2>{props.data.title}</h2>
          <p>{props.data.desc}</p>
          <div className={className}>
            <p>난이도: {props.data.difficulty}</p>
            <hr/>
            <div className='d-flex  gap-2 justify-content-end' >
            <Button variant="secondary" className="btn-sm" onClick={()=>{
              props.onChangeMode();
            }} >Modify</Button>
            <Button variant="danger" className="btn-sm"  onClick={()=>{
              props.deleteForm(props.data.id);
            }} >Delete</Button>
            </div>
           
           </div>
        </article>
      </main>
    </>
  )
}



export default Main;