import { UsersListContainer } from './components/usersList/userList.container';
import TodoListContainer  from './components/todoList/todoList.container';
import Counter from './components/counter/counter.component';
function App() {
  return (
    <div>
      <Counter />
      <UsersListContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
