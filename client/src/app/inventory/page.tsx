"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "productId",
    headerName: "Product ID",
    width: 300,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "name",
    headerName: "Product Name",
    width: 200,
    headerAlign: "left",
    align: "left",
  },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    headerAlign: "left",
    align: "left",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    headerAlign: "left",
    align: "left",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 170,
    type: "number",
    headerAlign: "left",
    align: "left",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white text-gray-900 border border-gray-50 shadow rounded-lg mt-5"
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

export default Inventory;
