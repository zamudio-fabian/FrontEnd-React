import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import './TodoListstyle.css';
import TodoList from '../../Components/TodoList';

class TodoListPage extends React.Component {
	render() {
		return (
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TodoList />
				</Grid>
			</Grid>
		);
	}
}

export default TodoListPage;
