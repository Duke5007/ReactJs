import React from "react";
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      value: "",
    };
    this.getColumns = this.getColumns.bind(this);
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
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
    } else {
      return [];
    }
  }

  render() {
    const columns = this.getColumns();
    return (
      <div>
        <ReactTable
          data={this.state.posts}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default Tables
