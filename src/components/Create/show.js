import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      product:{},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('products').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          product: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('products').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container margin">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4><Link to="/">Board List</Link></h4>
          </div>
          <div class="panel-body">
            <dl>
              <dt><h3>Name</h3></dt>
              <dt><h3 className="panel-title">
                {this.state.product.name}
              </h3></dt>
            </dl>
            <dl>
              <dt>Title:</dt>
              <dd>{this.state.product.title}</dd>
            </dl>
            <dl>
              <dt>Image:</dt>
              <dd>{this.state.product.url}</dd>
            </dl>
            <dl>
              <dt>Price:</dt>
              <dd>{this.state.product.price}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
