import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 600,
    height: 'auto',
    margin: "50px auto"
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'fill',
  },
};

function Project(props) {
  const { classes } = props;
  return (
    <div className="project">
        <Card raised className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={props.title}
              className={classes.media}
              height="auto"
              image={props.pic}
              title={props.title}
              />
            <CardContent>
              <a target="_blank" rel="noopener noreferrer" href={`https://${props.link}`}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
              </a>
              <Typography component="p">
                {props.description}
              </Typography>
              <a target="_blank" rel="noopener noreferrer" href={`https://${props.frontLink}`}>
                <Typography component="p">
                  {props.backLink ? `Front end repo: ${props.frontLink}` : `Repo: ${props.frontLink}`}
                </Typography>
              </a>
              {props.backLink ? (<a target="_blank" rel="noopener noreferrer" href={`https://${props.backLink}`}>
                <Typography component="p">
                  {`Back end repo: ${props.backLink}`}
                </Typography></a>) : null}
            </CardContent>
          </CardActionArea>
        </Card>
    </div>
  )
}

export default withStyles(styles)(Project);
