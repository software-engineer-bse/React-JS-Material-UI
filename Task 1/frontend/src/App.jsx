import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ maxWidth: 400, mx: 'auto' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a simple Material UI Card component.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default App;
