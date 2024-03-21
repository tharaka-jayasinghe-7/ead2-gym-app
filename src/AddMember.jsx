import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Members from "./Members";

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function AddMember({ id }) {
  const paperStyle = { padding: "30px 50px", width: 300, margin: "20px auto" };
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();

  const goToMembers = () => {
    navigate("/Members"); // replace with your Members page route
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar />
          <h2>Member Registration</h2>
        </Grid>

        <TextField
          label="ID"
          defaultValue={"E01"}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="Name"
          placeholder="Enter name"
          fullWidth
          required
          margin="normal"
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            defaultValue="male"
            name="radio-buttons-group"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Email"
          placeholder="Enter email"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Phone"
          placeholder="Enter phone"
          fullWidth
          required
          margin="normal"
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Register
        </Button>
        <Button
          type="button"
          startIcon={<HomeIcon />}
          onClick={goToMembers}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
          }}
        >
          Home
        </Button>
      </Paper>
    </Grid>
  );
}

export default AddMember;
