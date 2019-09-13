import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm, Form } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import SessionService from '../../Services/SessionService';
import './LoginForm.style.css';

function submit(values, history) {
	return SessionService.login(values.username, values.password, history);
}

const renderTextField = ({
	label,
	post,
	input,
	meta: { touched, invalid, error },
	...custom
}) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
);

const LoginForm = (props) => {
	const { handleSubmit, reset, history } = props;
	return (
		<>
			<Form
				className="w100 h100 login-bg"
				onSubmit={handleSubmit((values) => {
					submit(values, history);
				})}>
				<Grid>
					<Grid
						container
						direction="column"
						alignItems="center"
						justify="center">
						<Card className="card">
							<CardContent>
								<Field
									className="w100"
									name="username"
									component={
										renderTextField
									}
									label="Username"
									type="text"
								/>
								<Field
									className="w100"
									name="password"
									component={
										renderTextField
									}
									label="Password"
									type="password"
								/>
							</CardContent>
							<CardActions className="form-card-actions">
								<Button
									variant="contained"
									color="primary"
									type="submit">
									Ingresar
								</Button>
								<Button
									variant="contained"
									color="default"
									onClick={
										reset
									}>
									Limpiar
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<Grid
					container
					direction="column"
					alignItems="center"
					justify="center"
					className="mt-4">
					<Grid item md={4}>
						<Typography
							variant="body2"
							gutterBottom>
							Use alguno de los
							siguientes usuarios:
							jsantoro , fzamudio ,
							luvargas , epeluffo ,
							lolguin para realizar
							pruebas con la
							contraseña 123456
						</Typography>
					</Grid>
				</Grid>
			</Form>
		</>
	);
};

export default withRouter(
	reduxForm({
		form: 'LoginForm',
	})(LoginForm)
);
