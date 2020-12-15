import React, { Component } from 'react';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import '_core/styles/react-bootstrap-table.min.css';
import './table.scss';

export default class Table extends Component {
  static displayName = 'Table';

  constructor(props) {
    super(props);
    document.title = `${props.title} - Table`;
  }

  priceFormatter(cell) {
    return (
      <span>
        <i className="fa fa-dollar" />
        {' '}
        {cell}
      </span>
    );
  }

  render() {
    const products = [{
      id: 1,
      name: 'Item name 1',
      price: 100
    }, {
      id: 2,
      name: 'Item name 2',
      price: 150
    }];
    return (
      <div className="table">
        <h3>Table Component</h3>
        <BootstrapTable data={products} striped hover search height={300}>
          <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter} dataAlign="right">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
