import { ACTIONS, UnionedAction } from './actions'

export interface TodoState {
    tasks: Task[]
}

const initialState: TodoState = {
    tasks: []
}

export function todoReducer(state = initialState, action: UnionedAction) {
    const { tasks } = state

    switch (action.type) {
        case ACTIONS.ADD_TASK:
            return Object.assign({}, state, {
                tasks: [
                    ...tasks,
                    action.task
                ]
            })

        case ACTIONS.TOGGLE_TASK:
            const i = tasks.findIndex((v, _) => { return v.id === action.id });
            tasks[i].isDone = !tasks[i].isDone;
            return Object.assign({}, state, {
                tasks: tasks
            })

        default:
            ((_: never): void => { return })(action);
            return state
    }

}