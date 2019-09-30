import reducer from '../reducer/author-reducer';

describe('Authors reducers test', () => {
  test('It can create an author', () => {
    let info = {type: 'AUTHOR_CREATE', payload: {name: 'Test author', id: 1, timeStamp: 123}};
    let state = [];
    let testState = reducer(state, info);
    expect(testState[0].name).toEqual('Test author');
    expect(testState[0].id).toEqual(1);
    expect(testState[0].timeStamp).toEqual(123);
  });

  test('It can update an author', () => {
    let updateInfo = {type: 'AUTHOR_UPDATE', payload: {name: 'Updated author', id: 1}};
    let state = [{name: 'test', id: 1, timeStamp: 456}];
    let updatedState = reducer(state, updateInfo);
    expect(updatedState[0].name).toEqual('Updated author');
    expect(updatedState[0].id).toEqual(1);
    expect(updatedState[0].timeStamp).toEqual(456);
  });

  test('It can delete an author', () => {
    let deleteInfo = {type: 'AUTHOR_DELETE', payload: {id: 1}};
    let state = [{name: 'apple', id: 1, timeStamp: 456}, {name: 'berry', id: 2, timeStamp: 789}];
    let deletedState = reducer(state, deleteInfo);
    expect(deletedState[0].name).toEqual('berry');
    expect(deletedState[0].id).toEqual(2);
    expect(deletedState[0].timeStamp).toEqual(789);
    expect(deletedState[1]).toEqual(undefined);
  });
});
