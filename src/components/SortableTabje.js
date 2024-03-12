import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      // Which column should be selected for sorting
      header: () => <th>{column.label} IS SORTABLE</th>,
    };
  });

  return <Table {...props} config={updatedConfig} />;
  // props should contain the following properties
}

export default SortableTable;
