/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90, sortable: true },
  {
    field: "Name",
    headerName: "Name",
    type: "string",
    width: 150,
    editable: true,
  },
  {
    field: "Age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "city",
    headerName: "city",
    type: "string",
    editable: true,
    width: 130,
  },
];

const rows = [
  { id: 1, Name: "Jon", Age: 35, city: "Lahore" },
  { id: 2, Name: "Cersei", Age: 42, city: "karachi" },
  { id: 3, Name: "Jaime", Age: 45, city: "Quetta" },
  { id: 4, Name: "Arya", Age: 16, city: "Islambad" },
];

export default function DataTable() {
  return (
    <Box sx={{ height: 350, width: "70%", marginTop: "20px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
