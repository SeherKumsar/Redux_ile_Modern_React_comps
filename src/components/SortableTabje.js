import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  
  const { config, data } = props;
  
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumn,
  } = useSort(data, config); 
  // first parameter is the data, second parameter is the config
  
  

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column; // If the column is not sortable, return it as is
    }

    return {
      ...column,
      // Which column should be selected for sorting
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });
  
  return (
    <div>
      {/* {sortOrder} - {sortBy} */}
      <Table {...props} data={sortedData} config={updatedConfig} />;
      {/* props should contain the following properties */}
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
    </div>
  }

  if (sortOrder === null) {
    return <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
    </div>;
  }  else if (sortOrder === "asc") {
    return <div>
        <GoArrowSmallUp />
    </div>;
  } else if (sortOrder === "desc") {
    return <div>
        <GoArrowSmallDown />
    </div>;
  }
}

export default SortableTable;
