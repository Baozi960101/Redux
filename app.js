const { createStore } = require("redux");

const ActionType = {
  ADD_TODO: "add_todo",
  DELETE_TODO: "delete_todo",
};
//定義Type

let todoId = 0;

const initState = {
  mail: "12345",
  todo: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: todoId++,
            name: action.payload.name,
          },
        ],
      };
    case ActionType.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((data) => data.id !== action.payload.id),
      };
    default:
      return state;
  }
}

let store = createStore(reducer);

function addTodo(name) {
  return {
    type: ActionType.ADD_TODO,
    payload: {
      name
    },
  };
}
//新增事件

store.subscribe(() => {
  console.log(store.getState());
});
//有變動就呼叫getState

store.dispatch(addTodo("NEW SECORD NAME"));
store.dispatch(addTodo("NEW SECORD NAME"));
store.dispatch(addTodo("NEW SECORD NAME"));

store.dispatch({
  type: ActionType.ADD_TODO,
  payload: {
    name: "NEW SECORD NAME",
  },
});

store.dispatch({
  type: ActionType.DELETE_TODO,
  payload: {
    id: 0,
  },
});
