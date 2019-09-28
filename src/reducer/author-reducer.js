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
    console.log(payload);
    return state.filter((author) => author.id !== payload.id);
  default:
    return state;
  }
};
