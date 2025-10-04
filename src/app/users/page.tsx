"use client";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Checkbox,
} from "@mui/material";
import { FaEye, FaSearch, FaTrashAlt } from "react-icons/fa";
import { PiPencilSimpleLineFill } from "react-icons/pi";

interface Column {
  id: "checked" | "User" | "PhoneNo" | "Created" | "Action";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "checked", label: "", minWidth: 50, align: "center" },
  { id: "User", label: "User", minWidth: 150 },
  { id: "PhoneNo", label: "Phone No", minWidth: 120 },
  { id: "Created", label: "Created", minWidth: 120 },
  { id: "Action", label: "Action", minWidth: 120, align: "center" },
];

interface CreateData {
  checked: boolean;
  User: { name: string; image: string };
  PhoneNo: string;
  Created: string;
}

function createData(
  checked: boolean,
  UserName: string,
  UserImage: string,
  PhoneNo: string,
  Created: string
): CreateData {
  return {
    checked,
    User: { name: UserName, image: UserImage },
    PhoneNo,
    Created,
  };
}

const initialRows = [
  createData(false, "User 1", "https://via.placeholder.com/50", "9999999999", "2024-10-04"),
  createData(false, "User 2", "https://via.placeholder.com/50", "8888888888", "2024-10-04"),
  createData(false, "User 3", "https://via.placeholder.com/50", "7777777777", "2024-10-04"),
];

const Users = () => {
  const [rows, setRows] = useState<CreateData[]>(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSelectAll = (checked: boolean) => {
    setRows((prev) => prev.map((row) => ({ ...row, checked })));
  };

  const handleSelectRow = (index: number, checked: boolean) => {
    setRows((prev) =>
      prev.map((row, i) => (i === index ? { ...row, checked } : row))
    );
  };

  const handleDelete = (index: number) => {
    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const allChecked = rows.every((r) => r.checked);
  const someChecked = rows.some((r) => r.checked);

  return (
    <div className="mx-5 bg-white mt-10 rounded-md">
      <div className="flex items-center gap-4 py-5 px-5 w-full justify-between">
        <h3 className="text-[18px] font-[600]">Users List</h3>

        <div className="ml-auto self-end">
          <div className="w-[300px] h-auto bg-[#f1f1f1] relative overflow-hidden">
            <FaSearch className="absolute top-[13px] left-[10px] opacity-80" />
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]"
              placeholder="Search here..."
            />
          </div>
        </div>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.id === "checked" ? (
                      <Checkbox
                        checked={allChecked}
                        indeterminate={!allChecked && someChecked}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                      />
                    ) : (
                      column.label
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => (
                  <TableRow hover key={rowIndex}>
                    {columns.map((column) => {
                      const value = row[column.id as keyof CreateData];

                      if (column.id === "checked") {
                        return (
                          <TableCell key={column.id} align="center">
                            <Checkbox
                              checked={row.checked}
                              onChange={(e) =>
                                handleSelectRow(page * rowsPerPage + rowIndex, e.target.checked)
                              }
                            />
                          </TableCell>
                        );
                      }

                      if (column.id === "User") {
                        return (
                          <TableCell key={column.id} align="left">
                            <div className="flex items-center gap-2">
                              <img
                                src={row.User.image}
                                alt={row.User.name}
                                className="w-10 h-10 rounded-md"
                              />
                              <div>{row.User.name}</div>
                            </div>
                          </TableCell>
                        );
                      }

                      if (column.id === "Action") {
                        return (
                          <TableCell key={column.id} align="center">
                            <div className="flex items-center justify-center gap-3 text-blue-500">
                              <FaTrashAlt
                                className="text-[17px] hover:text-[#f25252] cursor-pointer"
                                onClick={() => handleDelete(page * rowsPerPage + rowIndex)}
                              />
                            </div>
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : (value as React.ReactNode)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Users;
