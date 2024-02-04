
import CloseFullscreen from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import "../App.css";
import { useState } from 'react';

import { Box } from "@mui/material";
import React from 'react';

const Editor = ({heading, icon, color, value, onChange}) => {
    const [open, setOpen] = useState(true);
    const handleChange =(editor, data, value) =>{
         onChange(value);
    }
  return (
    <>
      <Box sx={{flexGrow:"1", display:"flex", flexDirection:"column", flexBasis:"0", padding:"0px 8px 8px", height:"50vh" }}  style={open ? null: {flexGrow:"0"}}> 
        <Box sx={{display:"flex", background:"#060606", color:"#fff", justifyContent:"space-between", fontWeight:"700"}}>
            <Box sx={{background:"#1d1e22", display:"flex", padding:"9px 12px"}}>
              <Box   component="span" sx={{background:color, height:"20px", width:"20px", display:"flex", placeContent:"center", borderRadius:"5px", marginRight:"5px", paddingBottom:"3px", color:"#000"}}>{icon}</Box>
              {heading}
            </Box>
            <CloseFullscreen  onClick={() => setOpen(!open)} fontSize='small' sx={{alignSelf:"center"}}/>
        </Box>
         <ControlledEditor className='controlled-editor' value={value} onBeforeChange={handleChange} options={{
            theme: 'material',
            lineNumbers:true
         }}/>

        
      </Box>
    </>
  )
}

export default Editor;
