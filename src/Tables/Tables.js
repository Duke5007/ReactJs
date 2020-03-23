import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const url = "https://jsonplaceholder.typicode.com/posts";
class Tables extends Component {
  state = {
    posts: [],
    value: ""
  };
  componentDidMount() {
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(posts => {
        this.setState({ posts: posts });
      });
  }
  getColumns() {
    const getPostKeys = this.state.posts[0];
    if (getPostKeys) {
      const column =
        this.state.posts &&
        Object.keys(getPostKeys).map(key => {
          return {
            Header: key,
            accessor: key
          };
        });
      return column;
    }
    return [];
  }

  render() {
    const columns = this.getColumns();
    return (
      <React.Fragment>
        <ReactTable
          data={this.state.posts}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </React.Fragment>
    );
  }
}

export default Tables;
