import React, { Component, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Modify = (props) =>{ 
  const [formData, setFormData]= useState({
      title:props.data.title,
      desc:props.data.desc,
      difficulty:props.data.difficulty
  });


  const inputFormHanler = (e)=>{
    const {name, value} = e.target;
    setFormData(prev=>({
      ...prev,
      [name]:value
    }));
  
  }
  return (
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded'>
      <h2>Modify Article</h2>
     <Form action="#" onSubmit={(e)=>{
      e.preventDefault();
      props.modifyForm(e.target.title.value,e.target.desc.value,e.target.difficulty.value);
     }}>        
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
         type="text"
          value={formData.title}
          name="title"
          placeholder="제목을 입력하세요." 
          onChange={inputFormHanler}
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          value={formData.desc}
          name="desc"
          rows={3}
          onChange={inputFormHanler} 
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="difficulty">
        <Form.Label>difficulty</Form.Label>
        <Form.Control
          type="number"
          value={formData.difficulty}
          name="difficulty"
          rows={3}
          onChange={inputFormHanler} 
          required
          />
      </Form.Group>
      <Button type="submit" variant="secondary">수정</Button>
    </Form>
  </div>
  )


}


export default Modify;
