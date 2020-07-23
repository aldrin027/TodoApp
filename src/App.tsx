import * as React from 'react';
import './App.scss';

import Todo from './components/Todo';
import { AppProvider } from './contexts/AppContext';

const App = () => {
    return (
        <AppProvider>
            <Todo />
        </AppProvider>
    );
}

export default App;
