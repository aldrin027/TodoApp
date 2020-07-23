import PropTypes from 'prop-types';
import React from 'react';


export interface ITodoItem {
    uerId: number;
    id: number;
    title: string;
}

export interface ITodoListState {
    todos: ITodoItem[]
}

const todoList: ITodoListState = {
    todos: []
}

interface ITodoListAction {
    type: string;
    payload?: {
        uerId?: number;
        id?: number;
        title?: string;
    }
}

const todoReducer = (state: ITodoListState, action: ITodoListAction): any => {

    switch (action.type) {
        case 'get':
            return { ...state, todos: action.payload }

        case 'create':
            return {...state, todos: [...state.todos, action.payload]};
        case 'update':

            const updateTodo = [...state.todos];

            return updateTodo.map((item: any) => {
                return {...item, ...action.payload}
            });
        case 'delete':
            return 'DELETE';
        default:
            return state;
    }

}

const AppContext = React.createContext
    <{ state: ITodoListState, dispatch: React.Dispatch<ITodoListAction>}>({ state: todoList, dispatch: () => null});

interface IProvider {
    children: React.ReactNode
}



export const AppProvider = ({ children }: IProvider) => {

    const [state, dispatch] = React.useReducer(todoReducer, todoList);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );

}

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppContext
