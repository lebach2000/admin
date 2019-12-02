import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

class TablePizza extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('products');
    this.unsubscribe = null;
    this.state = {
      products: [],
    };
  }

  onCollection = (querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      const {name,title,price,url} = doc.data()
      products.push({
        key: doc.id,
        doc,
        name,
        title,
        price,
        url,
      });
    });
    this.setState({
      products
    })
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollection);
  }

  render() {
    return (
      <div>
        <div className="container margin">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                BOARD LIST
              </h3>
            </div>
            <div className="panel-body">
              <table className="table table-stripe">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {this.state.products.map(board =>
                  <tr>
                    <td>{board.name}</td>
                    <td>{board.title}</td>
                    <td><img width="100px" src={board.url} alt=""/></td>
                    <td>{board.price}</td>
                    <td><Link to={`/show/${board.key}`}>detail</Link></td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TablePizza;
