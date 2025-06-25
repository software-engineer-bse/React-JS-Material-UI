import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Paper,
} from '@mui/material';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Job Portal - Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <FormControl fullWidth margin="normal" required>
            <InputLabel>User Type</InputLabel>
            <Select
              name="userType"
              value={formData.userType}
              label="User Type"
              onChange={handleChange}
            >
              <MenuItem value="jobseeker">Job Seeker</MenuItem>
              <MenuItem value="recruiter">Recruiter</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            component="label"
            sx={{ mt: 2, mb: 1 }}
          >
            Upload Resume (PDF)
            <input
              type="file"
              name="resume"
              hidden
              accept=".pdf"
              onChange={handleChange}
            />
          </Button>
          {formData.resume && (
            <Typography variant="body2">
              Selected: {formData.resume.name}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default App;
