export default (state = [], {type, payload}) => {
  switch(type){
  case 'AUTHOR_CREATE':
    return [...state, payload];
  case 'AUTHOR_UPDATE':
    //TODO:--------------------------------------------------------
    // Use a map
    break;
  case 'AUTHOR_DELETE':
    //TODO:--------------------------------------------------------
    // Use a filter
    break;
  default:
    return state;
  }
};
