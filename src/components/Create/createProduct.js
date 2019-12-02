import React, { Component } from 'react';
import firebase from 'firebase';
import storage from '../Firebase';

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('products');
    this.state = {
      name: '',
      title: '',
      price: '',
      url:''
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = (e) => {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            this.onSubmit()
          });
      });
    e.preventDefault();
  };

  onSubmit = () => {
    const { name, title, price, url,category} = this.state;
    this.ref.add({
      name,
      title,
      price,
      url,
      category
    }).then((docRef) => {
      this.setState({
        name: '',
        title: '',
        price:'',
        category:''
      });
    }).catch((err) => {
      console.log(err);
    });

  };

  render() {
    const { name, title, price,category } = this.state;
    return (
      <div className="margin container">
        <form onSubmit={this.handleUpload}>
          <div className="form-group">
            <label htmlFor="title">Category:</label>
            <input type="Name" className="" name="category" value={category} onChange={this.onChange}
                   placeholder="Title"/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Name:</label>
            <input type="Name" className="" name="name" value={name} onChange={this.onChange}
                   placeholder="Title"/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" className="" name="title" value={title} onChange={this.onChange}
                   placeholder="Title"/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Image:</label>
            <input type="file" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Price:</label>
            <input type="Price" className="" name="price" value={price} onChange={this.onChange}
                   placeholder="Title"/>
          </div>
          <button type='submit'>
            save
          </button>
        </form>
      </div>
    );
  }
}

export default CreateProduct;
