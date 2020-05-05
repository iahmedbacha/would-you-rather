import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function QuestionPreview() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Avatar"
          height="140"
          image="https://tylermcginnis.com/would-you-rather/sarah.jpg"
          title="Avatar"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="p">
            Sara Edo asks:
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Would you rather
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ...have horrible short term memory...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" fullWidth>
          View Poll
        </Button>
      </CardActions>
    </Card>
  );
}
