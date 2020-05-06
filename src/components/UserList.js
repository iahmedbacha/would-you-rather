import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserContainer from '../containers/UserContainer';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function UserListContainer(props) {
  const classes = useStyles();

  const { usersIds } = props;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {usersIds.map((userId) => (
          <UserContainer key={userId} id={userId} />
        ))}
      </div>
    </Container>
  );
}
