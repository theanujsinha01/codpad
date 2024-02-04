
import { useState, useEffect, useContext } from 'react';

import { DataContext } from '../context/DataProvider';

import { Box, styled } from '@mui/material';



const Result = () => {

    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataContext);

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 500);

        return () => clearTimeout(timeout);
    }, [html, css, js])

    return (
        <Box style={html || css || js ? null : {background: '#444857' }} sx={{height:"45vh"}}>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />    
        </Box>
    )
}

export default Result;