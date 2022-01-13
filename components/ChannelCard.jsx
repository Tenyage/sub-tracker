import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CardActionArea, CardContent } from "@mui/material";
import router from "next/router";

const ChannelCard = (props) => {
  return (
    <Card
      elevation={10}
      sx={{
        minHeight: "150px",
        borderRadius: "10px",
        width: 250,
        height: 250,
        borderWidth: 1,
      }}
    >
      <CardActionArea
        onClick={() =>
          !props.disabled && router.push(`/details/${props.channelID}`)
        }
      >
        <CardContent>
          <Box display="flex" justifyContent={"center"}>
            <Avatar
              src={props.avatarImg}
              sx={{
                margin: 1.5,
                width: 120,
                height: 120,
                display: "flex",
              }}
            />
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {props.channelName}
          </Typography>
          <Typography variant="h6" color="primary" align="center">
            {props.subscribers}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChannelCard;
