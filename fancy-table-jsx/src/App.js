import React, {Component} from 'react';
import './App.css';

class App extends Component {
  displayName = 'Excel';
  constructor(props) {
    super(props);
    this.state = {
      headersData: this.props.headers,
      bodyData: this.props.data, 
      sortby: null, 
      descending: false
    };
    this._sort = this._sort.bind(this);
  }

  _sort(e) {
        var column = e.target.cellIndex;
        var descending = this.state.sortby === column && !this.state.descending;
        var data = this.state.bodyData.slice();
        data.sort(function (a, b) {
            return descending
                ? a[column] < b[column]
                : a[column] > b[column];
        });
        
        this.setState({bodyData: data, sortby: column, descending: descending});
    }

  render() {
    return (
      <table>
        <thead onClick={this._sort}>
          <tr>
            {
              this.state.headersData.map(function(d,i){
                return <th key={d}>{d}</th>
              })
            }
          </tr>
        </thead>
        <tbody>
          {
              this.state.bodyData.map(function(d,i){
                return <tr key={i}>
                  {d.map(function(idata,ii){
                    return <td key={ii}>{idata}</td>
                  })
                  }
                </tr>
              })
            }
        </tbody>
      </table>
    );
  }
}

export default App;
