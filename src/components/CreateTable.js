import React from 'react';
import {Box, Typography} from '@mui/material';


export default function CreateTable({text}) {
  return (
    <Box>
        <Typography mt={1} mb={1}> {text}</Typography>
    </Box>
  )
}
