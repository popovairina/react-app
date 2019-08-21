import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.highlightRow = this.highlightRow.bind(this);
    this.state = { highlightedId: '' };
  }
  highlightRow(id) {
    this.setState({ highlightedId: id });
  }
  render() {
    const { dataSource } = this.props;
    const { highlightedId } = this.state;
    const Data = [...dataSource];
    const tableRows = Data.map((el, id) => {
      return (
        <TableRow
          key={id}
          rowData={el}
          highlighted={highlightedId === id}
          highlightRow={this.highlightRow}
        />
      );
    });
    return (
      <table>
        <tbody>{tableRows}</tbody>
      </table>
    );
  }
}

export default Table;
