import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    // console.log(`Sorting by ${label}`);
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column; // If the column is not sortable, return it as is
    }

    return {
      ...column,
      // Which column should be selected for sorting
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />;
      {/* props should contain the following properties */}
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return "Show both icons";
  }

  if (sortOrder === null) {
    return "Show both icons";
  }  else if (sortOrder === "asc") {
    return "Show up icon ⬆";
  } else if (sortOrder === "desc") {
    return "Show down icon ⬇";
  }
}

export default SortableTable;
