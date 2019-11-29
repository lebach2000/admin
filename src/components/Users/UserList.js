import React, { Component } from 'react';
import { compose } from 'recompose';
import { withAuthorization } from '../Session';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.unsubscribe = this.props.firebase
      .users()
      .onSnapshot(snapshot => {
        let users = [];

        snapshot.forEach(doc =>
          users.push({ ...doc.data(), uid: doc.id }),
        );

        this.setState({
          users,
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { users } = this.state;

    return (
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
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      width="100%"
                      cellSpacing={0}
                    >
                      <thead>
                      <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>User name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                      </tr>
                      </thead>
                      <tbody>
                      {users.map(user => (
                        <tr  key={user.uid}>
                          <td>{user.uid}</td>
                          <td>{user.email}</td>
                          <td>{user.username}</td>
                          <td>{user.phone}</td>
                          <td>{user.address}</td>
                          <td>{user.birthday}</td>
                          {/*<div>*/}
                          {/*  <Link*/}
                          {/*    to={{*/}
                          {/*      pathname: `${ROUTES.ADMIN}/${user.uid}`,*/}
                          {/*      state: { user },*/}
                          {/*    }}*/}
                          {/*  >*/}
                          {/*    Details*/}
                          {/*  </Link>*/}
                          {/*</div>*/}
                        </tr>
                      ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
)(UserList);

