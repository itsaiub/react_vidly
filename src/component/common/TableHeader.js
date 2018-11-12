import React from "react";

const TableHeader = props => {
  const { onSort, columns } = props;
  const raiseSort = path => {
    const sortColumn = { ...props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  const renderSortIcon = column => {
    if((column.path !== props.sortColumn.path) || column.key ) {
      return null
    }
    if(props.sortColumn.order === 'asc') {
      return <i className="fa fa-sort-asc"></i>
    }
    return <i className="fa fa-sort-desc"></i>
  }

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            key={column.path || column.key}
            className='clickable'
            onClick={() => raiseSort(column.path)}
            scope="col"
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
