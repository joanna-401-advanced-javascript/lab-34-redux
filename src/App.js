import React from 'react';
import { connect } from 'react-redux';
import './stylesheets/App.css';

const uuid = require('uuid/v4');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.author = '';
    this.state.id = '';
    this.state.timeStamp = '';
  }

 handleChange = (event) => {
   const {value} = event.target;
   this.setState({author: value});
 };

 handleSubmit = (event) => {
   event.preventDefault();
   const authorId = uuid();
   const timeStamp = Math.floor(Date.now() / 1000);
   this.props.createNewAuthor({name: this.state.author, id: authorId, timeStamp: timeStamp});
 };

 render() {
   return(
      <>
        {
          this.props.authors.map((author, i) =>
            <li key={i}>{author.name}</li>
          )
        }
        <form onSubmit={this.handleSubmit}>
          <input
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
    createNewAuthor: ({name, id, timeStamp}) => {
      dispatch({
        type: 'AUTHOR_CREATE',
        payload: {name, id, timeStamp},
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
