import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  formControl: {
    padding: theme.spacing(0, 3, 3, 3),
    width: '100%',
  },
  form: {
    width: '100%',
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bar: {
    height: 20,
    borderRadius: 3,
    marginBottom: 5.6,
  },
  option: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  results: {
    padding: theme.spacing(2),
  },
  badge: {
    width: '100%',
  },
}));

export default function AnsweredQuestion(props) {
  const classes = useStyles();

  const { authedUser, user, question } = props;
  const countOne = question.optionOne.votes.length;
  const countTwo = question.optionTwo.votes.length;

  const answeredOptionOne = question.optionOne.votes.includes(authedUser);

  const optionOne = (
    <Paper variant="outlined" className={classes.option}>
      <Typography gutterBottom variant="body1" component="p">
        {`Would you rather ${question.optionOne.text}?`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(countOne / (countOne + countTwo)) * 100}
        color="primary"
        className={classes.bar}
      />
      <Typography gutterBottom variant="body1" component="p">
        {`${question.optionOne.votes.length} out of ${
          question.optionOne.votes.length + question.optionTwo.votes.length
        } votes (${(countOne / (countOne + countTwo)) * 100}%)`}
      </Typography>
    </Paper>
  );
  const optionTwo = (
    <Paper variant="outlined" className={classes.option}>
      <Typography gutterBottom variant="body1" component="p">
        {`Would you rather ${question.optionTwo.text}?`}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={(countTwo / (countOne + countTwo)) * 100}
        color="primary"
        className={classes.bar}
      />
      <Typography gutterBottom variant="body1" component="p">
        {`${question.optionTwo.votes.length} out of ${
          question.optionOne.votes.length + question.optionTwo.votes.length
        } votes (${(countTwo / (countOne + countTwo)) * 100}%)`}
      </Typography>
    </Paper>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Avatar"
              height="140"
              image={user.avatarURL}
              title="Avatar"
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="p">
                {`${user.name} asks:`}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                Results:
              </Typography>
              <Box className={classes.results}>
                {answeredOptionOne ? (
                  <Badge
                    badgeContent="Yours"
                    color="primary"
                    className={classes.badge}
                  >
                    {optionOne}
                  </Badge>
                ) : (
                  optionOne
                )}
                {!answeredOptionOne ? (
                  <Badge
                    badgeContent="Yours"
                    color="primary"
                    className={classes.badge}
                  >
                    {optionTwo}
                  </Badge>
                ) : (
                  optionTwo
                )}
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Container>
  );
}
