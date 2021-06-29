export enum ACTIONS {
    ADD_TASK = 'ADD_TASK',
    TOGGLE_TASK = 'TOGGLE_TASK'
}

// TodoList에 Task를 추가
function addTask(task: Task) {
    return {
        type: ACTIONS.ADD_TASK as ACTIONS.ADD_TASK,
        task: task
    }
}

// TodoList 상태를 전환하는 action
function toggleTask(id: number) {
    return {
        type: ACTIONS.TOGGLE_TASK as ACTIONS.TOGGLE_TASK,
        id: id
    }
}

export type UnionedAction = {
    type: ACTIONS.ADD_TASK;
    task: Task;
} | {
    type: ACTIONS.TOGGLE_TASK;
    id: number;
}