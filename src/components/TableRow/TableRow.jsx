import React from "react";
import {
  TableRowDataProperty,
  TableRowDataValue,
  TableRowWrapper,
} from "./style";

function TableRow({ property, value }) {
  return (
    <TableRowWrapper>
      <TableRowDataProperty>{property}</TableRowDataProperty>
      <TableRowDataValue>{value}</TableRowDataValue>
    </TableRowWrapper>
  );
}

export default TableRow;
