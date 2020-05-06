import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
}));

function ScoreDetails(props) {
  const classes = useStyles();

  const { answeredQuestions, createdQuestions } = props;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Score
              </TableCell>
              <TableCell align="right">
                {answeredQuestions + createdQuestions}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Answered questions
              </TableCell>
              <TableCell align="right">{answeredQuestions}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Created questions
              </TableCell>
              <TableCell align="right">{createdQuestions}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default function User(props) {
  const classes = useStyles();

  const { user } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Avatar"
        height="140"
        image={user.avatarURL}
        title="Avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {user.name}
        </Typography>
        <ScoreDetails
          answeredQuestions={Object.keys(user.answers).length}
          createdQuestions={user.questions.length}
        />
      </CardContent>
    </Card>
  );
}
