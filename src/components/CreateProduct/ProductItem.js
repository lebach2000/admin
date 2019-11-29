import React, { Component } from 'react';


class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: this.props.message.text,
    };
  }

  onToggleEditMode = () => {
    this.setState(state => ({
      editMode: !state.editMode,
      editText: this.props.message.text,
    }));
  };

  onChangeEditText = event => {
    this.setState({ editText: event.target.value });
  };

  onSaveEditText = () => {
    this.props.onEditMessage(this.props.message, this.state.editText);

    this.setState({ editMode: false });
  };

  render() {
    const { authUser, message, onRemoveMessage } = this.props;
    const { editMode, editText } = this.state;

    return (
      <div>
        {editMode ? (
          <input
            type="text"
            value={editText}
            onChange={this.onChangeEditText}
          />
        ) : (
          <div className="row text-center table-bordered">
            <div className="col-sm-2">{message.category}</div>
            <div className="col-sm-2">{message.namedish}</div>
            <div className="col-sm-2">{message.price}</div>
            <div className="col-sm-2">{message.title}</div>
            <div className="col-sm-2"><img style={{with:"100px",height:"100px"}} src={message.url} alt=""/></div>
          </div>
        )}

        {authUser.uid === message.userId && (
          <div className="col-sm-2" style={{ right: 0 }}>
            {editMode ? (
              <span className="row">
                <button onClick={this.onSaveEditText}>Save</button>
                <button onClick={this.onToggleEditMode}>Reset</button>
              </span>
            ) : (
              <button onClick={this.onToggleEditMode}>Edit</button>

            )}

            {!editMode && (
              <button
                type="button"
                onClick={() => onRemoveMessage(message.uid)}
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}


export default ProductItem;
