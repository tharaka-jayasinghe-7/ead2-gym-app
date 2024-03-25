import React, { useState } from "react";
import { Typography, Grid, Paper, TextField } from "@mui/material";
import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTrainers() {
  const paperStyle = { padding: "30px 20px", width: 700, margin: "10px auto" };
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    mobile: "",
    email: "",
    joinedDate: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { firstName, lastName, gender, address, mobile, email, joinedDate } =
    user;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/gym-trainer/trainers", user);
    navigate("/trainers");
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundImage: `url()`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center"></Grid>
        <Typography variant="h4" align="center" sx={{ mt: 0, mb: 2 }}>
          Register Trainer
        </Typography>
        <form onSubmit={(e) => onSubmit(e)}>
          <TextField
            fullWidth
            label="First Name"
            sx={{ mt: 2, mb: 2 }}
            value={firstName}
            onChange={(e) => onInputChange(e)}
          ></TextField>
          <TextField
            fullWidth
            label="Last Name"
            sx={{ mt: 2, mb: 2 }}
            value={lastName}
            onChange={(e) => onInputChange(e)}
          ></TextField>

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              defaultValue="female"
              name="controlled-radio-buttons-group"
              sx={{ my: 1 }}
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <TextField
            fullWidth
            label="Address"
            sx={{ mt: 1, mb: 2 }}
            value={address}
            onChange={(e) => onInputChange(e)}
          ></TextField>
          <TextField
            fullWidth
            label="Mobile"
            sx={{ mt: 2, mb: 2 }}
            value={mobile}
            onChange={(e) => onInputChange(e)}
          ></TextField>
          <TextField
            fullWidth
            label="Email"
            sx={{ mt: 2, mb: 2 }}
            value={email}
            onChange={(e) => onInputChange(e)}
          ></TextField>

          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ ml: 0, mt: 2, mb: 2 }}
          >
            Sign Up
          </Button>
          <Button variant="outlined" sx={{ ml: 2, mt: 2, mb: 2 }}>
            Cancel
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default AddTrainers;
