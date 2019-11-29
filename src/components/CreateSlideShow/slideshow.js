import React, { Component } from 'react';
import storage from '../Firebase';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      title: '',
      text: '',
    };
  }

  componentDidMount() {
    this.onListenForSlide();
  }

  onListenForSlide = () => {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase
      .slideshows()
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let slideshows = [];
          snapshot.forEach(doc =>
            slideshows.push({ ...doc.data(), uid: doc.id }),
          );

          this.setState({
            slideshows: slideshows.reverse(),
            loading: false,
          });
        } else {
          this.setState({ slideshows: null, loading: false });
        }
      });
  };

  onChangeTitle = event => {
    this.setState = ({ title: event.target.value });
  };
  onChangeText = event => {
    this.setState = ({ text: event.target.value });
  };

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };


  handleUpload = (event, authUser) => {
    event.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            this.onCreateSlide(authUser);
          });
      });
    event.preventDefault();
  };

  onCreateSlide = (authUser) => {
    this.props.firebase.slideshows().add({
      title: this.state.title,
      userId: authUser.uid,
      url: this.state.url,
      text:this.state.text,
      createdAt: this.props.firebase.fieldValue.serverTimestamp(),
    });

    this.setState({ text:'', url: '', title: '' });

  };

  render() {
    const {title,text} = this.setState
    return (
      <div>
        <div>
          <form className="container" onSubmit={event =>
            this.handleUpload(event)
          }>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-1 col-form-label">
                Title :
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={this.onChangeTitle}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-1 col-form-label">
                Title :
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={text}
                  onChange={this.onChangeText}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword" className="col-sm-1 col-form-label">
                Image :
              </label>
              <div className="col-sm-5">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Slideshow;