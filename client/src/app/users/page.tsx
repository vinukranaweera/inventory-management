"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "ID", width: 300, headerAlign: "left", align: "left" },
  { field: "name", headerName: "Name", width: 200, headerAlign: "left", align: "left" },
  { field: "email", headerName: "Email", width: 200, headerAlign: "left", align: "left" },
];

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500 py-4">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 text-gray-700!"
        sx={{
          "--DataGrid-t-header-background-base": "var(--color-white)",
          "--DataGrid-t-base-background": "var(--color-white)",
          "--DataGrid-t-row-background": "var(--color-white)",
          "&.MuiDataGrid-root": {
            "--DataGrid-t-header-background-base": "var(--color-white)",
            "--DataGrid-t-base-background": "var(--color-white)",
            backgroundColor: "var(--color-white)",
            color: "var(--color-gray-900)",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "var(--color-gray-900)",
            fontWeight: 600,
          },
          "& .MuiDataGrid-iconButtonContainer": {
            color: "var(--color-gray-900)",
          },
          "& .MuiDataGrid-menuIcon": {
            color: "var(--color-gray-900)",
          },
          "& .MuiButtonBase-root.MuiIconButton-root": {
            color: "var(--color-gray-900)",
            backgroundColor: "transparent !important",
            "&:hover": {
              backgroundColor: "var(--color-gray-50) !important",
            },
          },
          "& .MuiDataGrid-cell": {
            color: "var(--color-gray-900)",
            borderColor: "var(--color-gray-50)",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "var(--color-white)",
            borderTop: "1px solid var(--color-gray-50)",
            color: "var(--color-gray-900)",
          },
          "& .MuiTablePagination-root": {
            color: "var(--color-gray-900)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--color-gray-900)",
          },
          "& .MuiCheckbox-root": {
            color: "var(--color-gray-900) !important",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "var(--color-gray-50) !important",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "var(--color-gray-50) !important",
          },
          "& .MuiDataGrid-row.Mui-selected:hover": {
            backgroundColor: "var(--color-gray-50) !important",
          },
        }}
      />
    </div>
  );
};

export default Users;