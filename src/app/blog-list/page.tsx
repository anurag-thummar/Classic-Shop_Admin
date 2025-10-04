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
    Link,
} from "@mui/material";
import { FaEye } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { PiPencilSimpleLineFill } from "react-icons/pi";

// Column definition
interface Column {
    id:
    | "images"
    | "Action";
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "images", label: "Images", minWidth: 500, align: "left" },
    { id: "Action", label: "Action", align: "center" },
];

// Row type
interface Data {
    images: any;
}

// Row type
interface Data {
    images: any;
}

// Helper
function createData(
    images: any
): Data {
    return {
        images,
    };
}

// Example rows
const initialRows = [
    createData("Product 1"),
    createData("Product 2"),
    createData("Product 3"),
    createData("Product 3"),
    createData("Product 3"),
    createData("Product 3"),
];

const BlogList = () => {
    const [rows, setRows] = useState<Data[]>(initialRows);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div><div className="mx-5 bg-white mt-10 rounded-md">
            <div className="flex items-center gap-4 py-5 px-5 w-full justify-between">
                <h3 className="text-[18px] font-[600]">Home Slider Banners</h3>
                <Link href="/products/upload">
                    <button className="buttonUtils !capitalize !flex !items-center !gap-2 !bg-blue-500 !font-[500] !text-[14px]" type="button">
                        Add Home Slide
                    </button>
                </Link>
            </div>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} className="!bg-[#f1f1f1] rounded-0">
                                        {column.label}
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
                                            const value = row[column.id as keyof Data];
                                            if (column.id === "images") {
                                                return (
                                                    <TableCell key={column.id} align={column.align} className="flex items-center gap-2">
                                                        <div className="flex items-center gap-2 px-6">
                                                            <img src={row.images} alt={row.images} className="w-10 h-10 rounded-md" />
                                                        </div>
                                                    </TableCell>
                                                );
                                            }

                                            if (column.id === "Action") {
                                                return (
                                                    <TableCell key={column.id} align="left">
                                                        <div className="flex items-center justify-center gap-3 text-blue-500">
                                                            <FaEye className="w-[20px] h-[20px] cursor-pointer" />
                                                            <PiPencilSimpleLineFill className="w-[20px] h-[20px] cursor-pointer" />
                                                            <FaTrashAlt className="text-[17px] hover:text-[#f25252] cursor-pointer" />
                                                        </div>
                                                    </TableCell>
                                                );
                                            }

                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === "number" ? column.format(value) : value as React.ReactNode}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[20, 30, 50, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
        </div>
    )
}

export default BlogList