import React from 'react';

class TableRow extends React.Component {
  render() {
    const { id, name, gender, highlightRow, highlighted } = this.props;
    return (
      <tr onClick={() => highlightRow(id)} className={highlighted ? 'highlighted' : ''}>
        <td>{id + 1}</td>
        <td>{name}</td>
        <td>{gender}</td>
      </tr>
    );
  }
}

export default TableRow;
