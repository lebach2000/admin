import React, { Component } from 'react';
import { AuthUserContext } from '../Session';
import { withAuthorization } from '../Session';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import ProductList from '../CreateProduct/ProductList';


class PizzaPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      messages: [],
    };
  }

  componentDidMount() {
    this.onListenForMessages();
  }

  onListenForMessages = () => {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase
      .messages()
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        if (snapshot.size) {
          let messages = [];
          snapshot.forEach(doc =>
            messages.push({ ...doc.data(), uid: doc.id }),
          );

          this.setState({
            messages: messages.reverse(),
            loading: false,
          });
        } else {
          this.setState({ messages: null, loading: false });
        }
      });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  // onChangeText = event => {
  //   this.setState({ text: event.target.value });
  // };
  //
  // onCreateMessage = (event, authUser) => {
  //   this.props.firebase.messages().add({
  //     text: this.state.text,
  //     userId: authUser.uid,
  //     createdAt: this.props.firebase.fieldValue.serverTimestamp(),
  //   });
  //
  //   this.setState({ text: '' });
  //
  //   event.preventDefault();
  // };

  onEditMessage = (message, text) => {
    const { uid, ...messageSnapshot } = message;

    this.props.firebase.message(message.uid).update({
      ...messageSnapshot,
      text,
      editedAt: this.props.firebase.fieldValue.serverTimestamp(),
    });
  };

  onRemoveMessage = uid => {
    this.props.firebase.message(uid).delete();
  };
  //
  // onNextPage = () => {
  //   this.setState(
  //     state => ({ limit: state.limit + 5 }),
  //     this.onListenForMessages,
  //   );
  // };


  render() {
    const { messages } = this.state;
    return (

      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            <div>
              <div id="wrapper">
                <div id="content-wrapper">
                  <div className="container-fluid">
                    <div className="card mb-3">
                      <div className="card-header">
                        <i className="fas fa-table"/>
                        Data Table Example
                      </div>
                      <div className="card-body mb-3">
                        <div className="">
                          <div className="row text-center table-bordered">
                            <div className="col-sm-2 "><b>Category</b></div>
                            <div className="col-sm-2 "><b>Name</b></div>
                            <div className="col-sm-2 "><b>Price</b></div>
                            <div className="col-sm-2 "><b>Title</b></div>
                            <div className="col-sm-2 "><b>Image</b></div>
                            <div className="col-sm-2"></div>
                          </div>
                          {messages && (
                            <ProductList
                              authUser={authUser}
                              messages={messages}
                              onEditMessage={this.onEditMessage}
                              onRemoveMessage={this.onRemoveMessage}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition),
)(PizzaPage);

// export default withFirebase(TablePage)
