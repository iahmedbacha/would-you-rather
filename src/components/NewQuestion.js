import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  options: {
    marginTop: theme.spacing(4),
  },
}));

export default function NewQuestion(props) {
  const classes = useStyles();

  const [optionOneText, setOptionOneText] = React.useState('');

  const handleOptionOneTextChange = (event) => {
    setOptionOneText(event.target.value);
  };

  const [optionTwoText, setOptionTwoText] = React.useState('');

  const handleOptionTwoTextChange = (event) => {
    setOptionTwoText(event.target.value);
  };

  const { handleNewQuestion } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create New Question
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleNewQuestion(e, optionOneText, optionTwoText)}
        >
          <Typography component="h2" variant="body1">
            Complete the question:
          </Typography>
          <Typography component="h2" variant="h6">
            Would you rather ...
          </Typography>
          <div className={classes.options}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="optionOne"
                  name="optionOne"
                  variant="outlined"
                  required
                  fullWidth
                  id="optionOne"
                  label="Option One"
                  placeholder="Enter Option One Text Here"
                  onChange={handleOptionOneTextChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="optionTwo"
                  name="optionTwo"
                  variant="outlined"
                  required
                  fullWidth
                  id="optionTwo"
                  label="Option Two"
                  placeholder="Enter Option Two Text Here"
                  onChange={handleOptionTwoTextChange}
                />
              </Grid>
            </Grid>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
