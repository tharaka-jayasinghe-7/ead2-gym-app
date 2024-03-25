import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Box,
  Card,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import moment from "moment";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

//table data
export default function Trainers() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/AddTrainers"); // Navigate to the '/AddTrainers' route
  };

  const columns = [
    { id: "id", name: "Id" },
    { id: "first_name", name: "First Name" },
    { id: "last_name", name: "Last Name" },
    { id: "gender", name: "Gender" },
    { id: "address", name: "Address" },
    { id: "mobile", name: "Mobile" },
    { id: "email", name: "Email" },
    { id: "joined_date", name: "Joined Date" },
    { id: "action", name: "Action" },
  ];

  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    loadTrainers();
  }, []);

  //connect backend
  const loadTrainers = async () => {
    const result = await axios.get(
      "http://localhost:8080/gym-trainer/trainers"
    );
    setTrainers(result.data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Trainers</h1>

      <Box
        boxShadow={1}
        borderRadius={0}
        p={2}
        bgcolor=""
        mx={5}
        my={2}
        style={{ marginLeft: "110px" }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          {/*search bar */}
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 600 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Trainer"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />

          {/*add new button */}
          <Box textAlign="right" mb={2} mr={1} mt={2}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleButtonClick}
            >
              Add New
            </Button>
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      backgroundColor: alpha("#1F1F1F", 0.9),
                      color: "#FFFFFF",
                    }}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {trainers.map((trainer) => (
                <TableRow key={trainer.id}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      {column.id === "joined_date" ? (
                        moment(trainer[column.id]).format("YYYY-MM-DD")
                      ) : column.id === "action" ? (
                        <div>
                          <IconButton color="primary">
                            <VisibilityIcon sx={{ color: "#539E55" }} />
                          </IconButton>
                          <IconButton color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton color="secondary">
                            <DeleteIcon sx={{ color: "red" }} />
                          </IconButton>
                        </div>
                      ) : (
                        trainer[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

const countries = [
  { code: "Th", label: "Tharaka", phone: "3433535353", suggested: true },
  {
    code: "Ra",
    label: "Ravindu",
    phone: "342235353",
    suggested: true,
  },
];
