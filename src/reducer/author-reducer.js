export default (state =[], {type, payload}) => {
  switch(type){
  case 'AUTHOR_CREATE':
    return [...state, payload];
  case 'AUTHOR_UPDATE':
    //TODO:--------------------------------------------------------
    break;
  case 'AUTHOR_DELETE':
    //TODO:--------------------------------------------------------
    break;
  default:
    return state;
  }
};
