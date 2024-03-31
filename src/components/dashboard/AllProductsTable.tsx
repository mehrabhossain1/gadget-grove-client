"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const AllProductsTable = ({ allProducts }: any) => {
  const columns = [
    { key: "title", label: "Title" },
    { key: "brand", label: "Brand" },
    { key: "price", label: "Price" },
  ];

  return (
    <Table aria-label="All Products Table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={allProducts}>
        {(item: { [key: string]: string }) => (
          <TableRow key={item._id}>
            {columns.map((column) => (
              <TableCell key={column.key}>{item[column.key]}</TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default AllProductsTable;
