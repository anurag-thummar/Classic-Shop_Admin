"use client";
import { useState } from "react";
import { TablePagination } from "@mui/material";
import { FaEye } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";

// Row type
interface Data {
  images: string;
  Title: string;
  Description: string;
}

// Example rows
const initialRows: Data[] = [
  { images: "/img1.jpg", Title: "Product 1", Description: "Description 1" },
  { images: "/img2.jpg", Title: "Product 2", Description: "Description 2" },
  { images: "/img3.jpg", Title: "Product 3", Description: "Description 3" },
  { images: "/img4.jpg", Title: "Product 4", Description: "Description 4" },
  { images: "/img5.jpg", Title: "Product 5", Description: "Description 5" },
  { images: "/img6.jpg", Title: "Product 6", Description: "Description 6" },
];

const columns = ["Images", "Title", "Description", "Action"];

const BlogList = () => {
  const [rows, setRows] = useState<Data[]>(initialRows);
  console.log('setRows: ', setRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="mx-5 mt-10 rounded-md bg-white shadow-md">
      <div className="flex items-center justify-between gap-4 py-5 px-5">
        <h3 className="text-[18px] font-semibold">Blog List</h3>
        <Link href="/blog-list/add-blogArticle">
          <button className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white font-medium text-sm">
            Add Blog
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center gap-2">
                  <Image src={row.images} alt={row.Title} width={50} height={50} className="h-10 w-10 rounded-md object-cover" />
                </td>
                <td className="px-6 py-4">{row.Title}</td>
                <td className="px-6 py-4">{row.Description}</td>
                <td className="px-6 py-4 text-center flex justify-center gap-3 text-blue-500">
                  <FaEye className="w-5 h-5 cursor-pointer" />
                  <PiPencilSimpleLineFill className="w-5 h-5 cursor-pointer" />
                  <FaTrashAlt className="w-4 h-4 cursor-pointer hover:text-red-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default BlogList;
