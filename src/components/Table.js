function Table({ data }) {
    const renderedRows = data.map((fruit) => {
        return (
            <tr key={fruit.name}>
                <td>{fruit.name}</td>
                <td>{fruit.color}</td>
                <td>{fruit.score}</td>
            </tr>
        );
    });

    return <table>
        {/* <div>sadsad</div> */}
        <thead>
            <tr>
                <th>Fruit</th>
                <th>Color</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {renderedRows}
        </tbody>                
    </table>
}

export default Table;