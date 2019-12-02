import React, { Component } from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name: '',
      title: '',
      url:'',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('products').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const products = doc.data();
        this.setState({
          key: doc.id,
          name: products.name,
          title: products.title,
          url:products.url,
          price:products.price
        });
      } else {
        console.log('ngu nguowif');
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, title,price,url } = this.state;
    const updateRef = firebase.firestore().collection('products').doc(this.state.key);
    updateRef.set({
      name,
      title,
      price,
      url
    }).then((docRef) =>{
      this.setState({
        key:'',
        name:'',
        title:'',
        price:'',
        url:''
      })
    }).catch((err) =>{
      console.log(err);
    })
  };

  render() {
    return (
      <div>
        <div className="container margin">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                EDIT BOARD
              </h3>
            </div>
            <div className="panel-body">
              <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Board List</Link></h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" className="form-control" name="name" value={this.state.name}
                         onChange={this.onChange} placeholder="Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input type="text" className="form-control" name="title" value={this.state.title}
                         onChange={this.onChange} placeholder="Title"/>
                </div>
                <div className="form-group">
                  <label htmlFor="url">Url:</label>
                  <input className="form-control" value={this.state.url}
                         onChange={this.onChange} placeholder="Url"/>
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price:</label>
                  <input type="text" className="form-control" name="price" value={this.state.price}
                         onChange={this.onChange} placeholder="Price"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
