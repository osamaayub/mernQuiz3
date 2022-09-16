/* eslint-disable no-unused-vars */
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Name",
    headerName: "Name",
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: "Age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
    sortable: true,
  },
  {
    field: "city",
    headerName: "city",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    editable: true,
  },
];

const rows = [
  { id: 1, Name: "Jon", Age: 35, city: "lahore" },
  { id: 2, Name: "Cersei", Age: 42, city: "karachi" },
  { id: 3, Name: "Jaime", age: 45, city: "quetta" },
  { id: 4, Name: "Arya", Age: 16, city: "islamabad" },
];

const DataTable = () => {
  console.log(rows);
  return (
    <Box sx={{ height: 400, width: "100%" }}>
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
};
export default DataTable;
