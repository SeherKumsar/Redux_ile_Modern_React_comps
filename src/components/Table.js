function Table({ data, config }) {
  const renderedHeader = config.map((columnConfig) => {
    return <th key={columnConfig.label}>{columnConfig.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    const renderedCells = config.map((column) => {
        return <td className="p-2" key={column.label}>{column.render(fruit)}</td>
    });
    return (
    //   <tr className="border-b" key={fruit.name}>
    //     <tr className="p-3">{config[0].render(fruit)}</tr>
    //     <td className="p-3">
    //       <td className={`p-3 ${config[1].render(fruit)}`}></td>
    //     </td>
    //     <td className="p-3">{config[2].render(fruit)}</td>
    //   </tr>
        <tr className="border-b" key={fruit.name}>
            {renderedCells}
        </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {/* <th>Fruit</th>
            <th>Color</th>
            <th>Score</th> */}
          {renderedHeader}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
