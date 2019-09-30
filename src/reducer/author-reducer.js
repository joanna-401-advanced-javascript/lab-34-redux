export default (state = [], {type, payload}) => {
  switch(type){
  case 'AUTHOR_CREATE':
    return [...state, payload];
  case 'AUTHOR_UPDATE':
    return state.map((author) => {
      if(author.id === payload.id){
        author.name = payload.name;
      }
      return author;
    });
    // Vinicio - try this
    // Return state.map((author => author.id === payload.id ? payload : car);
  case 'AUTHOR_DELETE':
    return state.filter((author) => author.id !== payload.id);
  default:
    return state;
  }
};
