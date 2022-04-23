import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



const TextEditor = (props) => {
const [text, setText] = useState("");

   const handleChange = (value) => {
      setText( value )
    }

   const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}],
          ['link', 'image'],
          ['clean']
        ],
      }
     
    const  formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

      return (
        <>
        <ReactQuill theme="snow" defaultValue={text} modules={modules}
        formats={formats} onChange={(e) => handleChange(e)} />
        <Button onClick={e => console.log(text)}>Test Format</Button>
        <Container dangerouslySetInnerHTML={{__html: text}} className="text-center border">
        </Container>
                {text}
        </>

      )
  }


export default TextEditor