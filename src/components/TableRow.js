import React from 'react';

class TableRow extends React.Component {
  render() {
    const { rowData, highlightRow, highlighted } = this.props;
    const { index } = rowData;
    return (
      <tr onClick={() => highlightRow(index)} className={highlighted ? 'highlighted' : ''}>
        {Object.keys(rowData).map((el, id) => {
          return <td key={id}>{rowData[el]}</td>;
        })}
      </tr>
    );
  }
}

export default TableRow;
