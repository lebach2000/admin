import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import firebase from 'firebase';

class Test extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('messages')
    this.unsubscribe = null;
    this.state ={
      messages:[]
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
  }

  render() {

    return (

      <div>
        {this.state.messages.map(item =>(
          <div>{item.namedish}</div>
        ))}
      </div>
    )
      ;
  }
}

export default withFirebase(Test);
