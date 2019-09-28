import React from 'react';
import { connect } from 'react-redux';
import './stylesheets/App.css';

const uuid = require('uuid/v4');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author: '',
      id: '',
      timeStamp: '',
    };
    this.state.temp = '';
  }

 handleChange = (event) => {
   const {name, value} = event.target;
   this.setState({[name]: value});
 };

 handleSubmit = (event) => {
   event.preventDefault();
   const authorId = uuid();
   const timeStamp = Math.floor(Date.now() / 1000);
   this.props.createNewAuthor({name: this.state.author, id: authorId, timeStamp: timeStamp});
 };

 handleUpdate = (event, id) => {
   event.preventDefault();
   this.props.updateAuthor({name: this.state.temp, id: id});
 };

 handleDelete = (event, id) => {
   event.preventDefault();
   this.props.deleteAuthor({id: id});
 };

 render() {
   return(
      <>
        {
          this.props.authors.map((author, i) =>
            <React.Fragment key={i}>
              <li>{author.name}</li>
              <form onSubmit={(event) => this.handleUpdate(event, author.id)}>
                <input
                  name='temp'
                  type='text'
                  value={this.state.temp}
                  onChange={this.handleChange}
                  placeholder='Type here...'
                />
                <button type='submit'>Update</button>
                <button type='submit' onClick={(event) => this.handleDelete(event, author.id)}>Delete</button>
              </form>
            </React.Fragment>
          )
        }
        <form onSubmit={this.handleSubmit}>
          <input
            name='author'
            type='text'
            value={this.state.author}
            onChange={this.handleChange}
            placeholder='Type here...'
          />
          <button type='submit'>Create New Author</button>
        </form>
      </>
   );
 }
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewAuthor: (authorInfo) => {
      dispatch({
        type: 'AUTHOR_CREATE',
        payload: authorInfo,
      });
    },
    updateAuthor: (updatedInfo) => {
      dispatch({
        type: 'AUTHOR_UPDATE',
        payload: updatedInfo,
      });
    },
    deleteAuthor: (authorId) => {
      dispatch({
        type: 'AUTHOR_DELETE',
        payload: authorId,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
