import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config } = props;

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
          {column.label} IS SORTABLE
        </th>
      ),
    };
  });

  return <div>
    {sortOrder} - {sortBy}
    <Table {...props} config={updatedConfig} />;
    {/* props should contain the following properties */}
  </div>
}

export default SortableTable;
