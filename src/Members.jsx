import React from "react";
import { Button } from "@mui/material";

function Members() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="contained" style={{ backgroundColor: "orange" }}>
        Add Member
      </Button>
    </div>
  );
}

export default Members;
