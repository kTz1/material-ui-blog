import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 150,
        },
    }
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia 
                className={classes.media}
                image="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                title="Forest"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    consectetur earum est.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                    consectetur earum est.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
  );
};

export default Post;