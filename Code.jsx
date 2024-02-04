
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { Box } from "@mui/material";

import React from 'react';
import Editor from './Editor';

const Code = () => {
    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
  return (
    <> 
      <Box sx={{display:"flex", background:"#060606", height:"40vh"}}>
        <Editor heading="HTML"  icon="<>"  color="#FF3C41"  value={html} onChange={setHtml} />
        <Editor heading="CSS" icon="{}"  color="#0EBEFF"  value={css} onChange={setCss} />
        <Editor heading="JavaScript" icon="( )" color="#FCD000"  value={js} onChange={setJs} />
      </Box>
    </>
  )
}

export default Code;
