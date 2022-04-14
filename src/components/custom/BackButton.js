import * as React from 'react';
import Box from '@mui/material/Box';
import { Fab, Tooltip } from '@mui/material/';
import { KeyboardBackspace } from '@mui/icons-material/';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Box margin={"10px"}>
      <Tooltip title="Go Back">
        <Fab variant="extended" size="small" color="primary" aria-label="add">
            <KeyboardBackspace sx={{ mr: 1 }} />
            <Link className="links" to="/" style={{textDecoration: 'none'}}><h4>Go Back to Homepage</h4></Link>
        </Fab>
      </Tooltip>
    </Box>
  );
}
