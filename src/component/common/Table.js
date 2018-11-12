import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = props => {
  const { columns, onSort, sortColumn, data } = props;
  return (
    <table className="table table-striped">
      <TableHeader 
         columns={columns} 
         sortColumn={sortColumn} 
         onSort={onSort} />
      <TableBody 
         data={data} 
         columns={columns} />
    </table>
  );
};

export default Table;
