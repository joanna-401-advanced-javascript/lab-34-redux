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
  case 'AUTHOR_DELETE':
    //TODO:--------------------------------------------------------
    // Use a filter
    break;
  default:
    return state;
  }
};
