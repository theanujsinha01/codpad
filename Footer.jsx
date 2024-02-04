import React from 'react'
import { Box, Typography } from "@mui/material";
import CodeOffIcon from '@mui/icons-material/CodeOff';
const Footer = () => {
  return (
    <>
      <Box sx={{background:"#060606"}}>
        
        <Typography varient="h6" sx={{color:"#fff", textAlign:"center", padding:"5px", gap:"5px"}}>
        
        All copyright reserved &#169; 2024 
        </Typography>
      </Box>
    </>
  )
}

export default Footer;
