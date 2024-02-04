import { AppBar, Toolbar, Typography } from "@mui/material";
import CodeOffIcon from '@mui/icons-material/CodeOff';


import React from 'react';

const Header = () => {
  return (
    <>
      <AppBar sx={{bgcolor:"#060606", height:"9vh", position:"static"}}>
        <Toolbar>
          
          <Typography variant="h4" >
          <CodeOffIcon fontSize="large" />
            codpad
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
