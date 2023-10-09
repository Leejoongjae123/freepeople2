"use client";
import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { useState,useMemo } from "react";

export default function page() {
  const editor = useRef(null);

  const placeholder='Hello'

  const [content, setContent] = useState("");
  const [result, setResult] = useState("")
  const handleClick= ()=>{
    if(content.includes('td style=')){
      let result=content.replaceAll('td style="', `td style="border:1px solid black;`);
      setResult(result)
    
    }else{
      setResult(content)
    }
  }


  
  
  return (
    <div>
      <h1>안녕하세요</h1>
      <JoditEditor
        ref={editor}
        value='<p>fadsfasdf</p><p><br></p><p>adsfadsf</p><p><br></p><table style="border-collapse:collapse;width: 100%;"><tbody>
        <tr>
          <td style="border:1px solid black;width: 50%; border-color: rgb(255, 0, 255);">123123</td>
          <td style="border:1px solid black;width: 50%; border-color: rgb(255, 0, 255);">123123</td></tr></tbody></table>'
        onChange={(newContent) => {
          setContent(newContent)
        }}
      />
    <div>
      <div>
        {content}
      </div>
    <button onClick={handleClick}>
      변환
    </button>
    </div>
    </div>
  );
}
