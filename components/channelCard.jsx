import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, CardContent } from "@mui/material";

const useStyles = makeStyles({
  Box: {
    display: "block",
    marginLeft: 30,
    marginTop: "10vh",
  },

  channelCard: {
    width: "100%",
    minHeight: "150px",
    borderRadius: "10px",
    width: 250,
    height: 250,
    borderWidth: 1,
  },

  avatar: {
    margin: 10,
    width: 120,
    height: 120,
    display: "flex",
  },
});

export default function ChannelCard(props) {
  const classes = useStyles();

  return (
    <Box sx={{ width: 200 }} className={classes.Box}>
      <Card className={classes.channelCard} variant="outlined" elevation={22}>
        <CardContent>
          <Box display="flex" justifyContent={"center"}>
            <Avatar src={props.avatarImg} className={classes.avatar} />
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {props.channelName}
          </Typography>
          <Typography variant="h6" color="primary" align="center">
            {props.subscribers}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Learn More</Button> */}
        </CardActions>
      </Card>
    </Box>
  );
}
