import React from 'react';
import { connect } from 'react-redux';

import './stylesheets/App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.author = '';
  }

 handleChange = (event) => {
   const {value} = event.target;
   this.setState({author: value});
 };

 handleSubmit = (event) => {
   event.preventDefault();
   this.props.createNewAuthor(this.state.author);
 };

 render() {
   return(
      <>
        {
          this.props.authors.map((author, i) =>
            <li key={i}>{author}</li>
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
    createNewAuthor: (authorName) => {
      dispatch({
        type: 'AUTHOR_CREATE',
        payload: authorName,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
