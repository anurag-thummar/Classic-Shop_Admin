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
    Pagination,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { FiPieChart } from "react-icons/fi";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaAngleDown, FaAngleUp, FaEye, FaPlus, FaTrash } from "react-icons/fa6";
import { FaEdit, FaSearch, FaTrashAlt } from "react-icons/fa";
import { PiPencilSimpleLineFill } from "react-icons/pi";

// Column definition
interface Column {
    id:
    | "checked"
    | "Product"
    | "Category"
    | "SubCategory"
    | "Price"
    | "Sales"
    | "Stock"
    | "Rating"
    | "Action";
    label: string;
    minWidth?: number;
    align?: "right" | "left" | "center";
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: "checked", label: "", minWidth: 50, align: "center" }, // checkbox col
    { id: "Product", label: "Product", minWidth: 150 },
    { id: "Category", label: "Category", minWidth: 120 },
    { id: "SubCategory", label: "SubCategory", minWidth: 120 },
    {
        id: "Price",
        label: "Price (₹)",
        minWidth: 100,
        align: "right",
        format: (value: number) => value.toLocaleString("en-IN"),
    },
    {
        id: "Sales",
        label: "Sales",
        minWidth: 100,
        align: "right",
        format: (value: number) => value.toLocaleString("en-IN"),
    },
    { id: "Stock", label: "Stock", minWidth: 100, align: "right" },
    {
        id: "Rating",
        label: "Rating",
        minWidth: 100,
        align: "right",
        format: (value: number) => value.toFixed(1),
    },
    { id: "Action", label: "Action", minWidth: 120, align: "center" },
];

// Row type
interface Data {
    checked: boolean;
    Product: { name: string; image: string };
    Category: string;
    SubCategory: string;
    Price: number;
    Sales: number;
    Stock: number;
    Rating: number;
}

// Row type
interface Data {
    checked: boolean;
    Product: { name: string; image: string };
    Category: string;
    SubCategory: string;
    Price: number;
    Sales: number;
    Stock: number;
    Rating: number;
}

// Helper
function createData(
    checked: boolean,
    ProductName: string,
    ProductImage: string,
    Category: string,
    SubCategory: string,
    Price: number,
    Sales: number,
    Stock: number,
    Rating: number
): Data {
    return {
        checked,
        Product: { name: ProductName, image: ProductImage },
        Category,
        SubCategory,
        Price,
        Sales,
        Stock,
        Rating,
    };
}

// Example rows
const initialRows = [
    createData(false, "Product 1", "https://via.placeholder.com/50", "Category 1", "SubCategory 1", 100, 10, 50, 4.5),
    createData(false, "Product 2", "https://via.placeholder.com/50", "Category 2", "SubCategory 2", 200, 20, 60, 4.6),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
    createData(false, "Product 3", "https://via.placeholder.com/50", "Category 3", "SubCategory 3", 300, 30, 70, 4.7),
];

const page = () => {
    const [rows, setRows] = useState<Data[]>(initialRows);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleSelectAll = (checked: boolean) => {
        setRows(prev => prev.map(row => ({ ...row, checked })));
    };

    const handleSelectRow = (index: number, checked: boolean) => {
        setRows(prev => prev.map((row, i) => (i === index ? { ...row, checked } : row)));
    };

    const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const allChecked = rows.every(r => r.checked);
    const someChecked = rows.some(r => r.checked);
    return (
        <div><div className="mx-5 bg-white mt-10 rounded-md">
            <div className="flex items-center gap-4 py-5 px-5 w-full justify-between">
                <h3 className="text-[18px] font-[600]">Products</h3>
                <button className="buttonUtils !capitalize !flex !items-center !gap-2 !bg-blue-500 !font-[500] !text-[14px]" type="button">
                    Add Product</button>
            </div>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <div className="flex items-center gap-4 px-5 py-4">
                    <FormControl fullWidth>
                        <label id="demo-simple-select-label" className="!text-[13px] !font-[600] !text-light mb-[6px]">Category by</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            size="small"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <label id="demo-simple-select-label" className="!text-[13px] !font-[600] !text-light mb-[6px]">Sub Category by</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            size="small"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <label id="demo-simple-select-label" className="!text-[13px] !font-[600] !text-light mb-[6px]">Third Level Sub Category by</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            size="small"
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="ml-auto self-end">
                        <div className="w-[300px] h-auto bg-[#f1f1f1] relative overflow-hidden">
                            <FaSearch className="absolute top-[13px] left-[10px] z-50 pointer-events-none opacity-80" />
                            <input type="text" className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]" placeholder="Search here..." value="" />
                        </div>
                    </div>
                </div>
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
                                            const value = row[column.id as keyof Data];

                                            if (column.id === "checked") {
                                                return (
                                                    <TableCell key={column.id} align="center">
                                                        <Checkbox
                                                            checked={row.checked}
                                                            onChange={(e) =>
                                                                handleSelectRow(
                                                                    page * rowsPerPage + rowIndex,
                                                                    e.target.checked
                                                                )
                                                            }
                                                        />
                                                    </TableCell>
                                                );
                                            }
                                            if (column.id === "Product") {
                                                return (
                                                    <TableCell key={column.id} align={column.align} className="flex items-center gap-2">
                                                        <div className="flex items-center gap-2">
                                                            <img src={row.Product.image} alt={row.Product.name} className="w-10 h-10 rounded-md" />
                                                            <div>{row.Product.name}</div>
                                                        </div>
                                                    </TableCell>
                                                );
                                            }

                                            if (column.id === "Action") {
                                                return (
                                                    <TableCell key={column.id} align="center">
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

export default page