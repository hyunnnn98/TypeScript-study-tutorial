// type Todo = {
//   id: number,
//   title: string,
//   done: boolean
// }
// object로 구성된 배열이라는 뜻. 멋대로 any 선언 금지.
var todoItems;
// api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}
// crud methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    console.log("Add Todo " + todo.id + " " + todo.title);
    todoItems.push(todo);
}
function deleteTodo(id) {
    console.log("Delete Todo ID: " + id);
    todoItems.splice(findIndexById(id), 1);
}
function completeTodo(id) {
    console.log("Complete Todo ID: " + id);
    // 함수형으로 불러와서 수정.
    // todo.done = true;
    // todoItems.splice(id, 1, todo);
    getItemById(id).done = true;
}
function getItemById(id) {
    return todoItems.filter(function (item) { return item.id === id; })[0];
}
function findIndexById(id) {
    for (var i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === id)
            return i;
    }
    return -1;
}
// business logic
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) { return item.done; });
    // ES5 버전풀이.
    // return todoItems.filter(function(item) {
    //   if (item.done) {
    //     return item;
    //   }
    // });
}
function addTwoTodoItems() {
    addTodo({ id: 10, title: "hello", done: false });
    addTodo({ id: 11, title: "mello", done: false });
}
// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}
todoItems = fetchTodoItems();
addTwoTodoItems();
console.log(getItemById(10));
completeTodo(10);
completeTodo(11);
console.log(showCompleted());
deleteTodo(10);
log();
