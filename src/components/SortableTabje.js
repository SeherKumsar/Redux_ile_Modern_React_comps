import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const handleClick = (label) => {
    console.log(`Sorting by ${label}`);
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column; // If the column is not sortable, return it as is
    }

    return {
      ...column,
      // Which column should be selected for sorting
      header: () => <th onClick = {() => handleClick(column.label)}>{column.label} IS SORTABLE</th>,
    };
  });

  return <Table {...props} config={updatedConfig} />;
  // props should contain the following properties
}

export default SortableTable;
