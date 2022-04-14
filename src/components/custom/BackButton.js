import * as React from 'react';
import Box from '@mui/material/Box';
import { Fab, Tooltip, Typography } from '@mui/material/';
import { KeyboardBackspace } from '@mui/icons-material/';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Box margin={"10px"} paddingBottom={2}>
      <Tooltip title="Go Back">
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
            <KeyboardBackspace sx={{ mr: 1 }} />
            <Link className="links" to="/" style={{textDecoration: 'none'}}>
              <Typography fontFamily={"Poppins"} fontWeight={500}>
                <h5>Go Back to Homepage</h5>
              </Typography>
              </Link>
        </Fab>
      </Tooltip>
    </Box>
  );
}
