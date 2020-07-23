import React from 'react'
import AppContext, { ITodoItem } from '../contexts/AppContext'
import { Input, Button, Icon} from 'semantic-ui-react'

const Todo: React.FC = () => {

    const { state, dispatch } = React.useContext(AppContext);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'get', payload: json})
            });
    }, [dispatch]);

    const addHandler = () => {
        console.log('Added');
    }

    return (
        <div className="main-container">
            <Input />
            {
                state.todos && state.todos.map((item: ITodoItem) => {
                    return (
                        <div key={item.id}>
                            <span className="todoItem">
                                {item.title}
                            </span>
                            {/* <Button icon>
                                <Icon name='edit' />
                            </Button>
                            <Button icon>
                                <Icon name='delete' />
                            </Button> */}
                        </div>
                    );
                
                })
            }

            <Button icon ref={() => (<Icon name='world' />)}>
                
            </Button>

            <button onClick={addHandler} className="addButton">Add New Todo List</button>
        </div>
    )
}

export default Todo
