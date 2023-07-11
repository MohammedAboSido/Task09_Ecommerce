import React from "react";
import TableRow from "../TableRow/TableRow";
import { TableWrapper } from "./style";

function Table() {
  return (
    <TableWrapper>
      <TableRow property="Model" value="#8786867" />
      <TableRow property="Style" value="Classic style" />
      <TableRow property="Certificate" value="ISO-898921212" />
      <TableRow property="Size" value="34mm x 450mm x 19mm" />
      <TableRow property="Memory" value="36GB RAM" />
    </TableWrapper>
  );
}

export default Table;
