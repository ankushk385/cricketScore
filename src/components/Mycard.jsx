import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import Vs from "./images/vs.gif";
import { getStats } from "../api/ApiKey";
const Mycard = ({ match }) => {
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    getStats(id)
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));

    handleOpen();
    getDialog();
    // console.log(details);
    // console.log([match]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getDialog = () => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Match Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Score :
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                {details.score}
              </span>
            </Typography>
          </DialogContentText>
          <DialogContentText>
            {/* <Typography>
              Match Status : {"  "}
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                {details.matchStarted
                  ? "match has started"
                  : "match is not yet started"}
              </span>
            </Typography> */}
            <Typography>
              Winner Team :{" "}
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                {match["winner_team"]}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
        </DialogActions>
      </Dialog>
    );
  };
  const getMatchCard = () => {
    return (
      <Card style={{ margin: "10px", backgroundColor: "#c8e6c9" }}>
        <CardContent>
          <Grid container spacing={4} alignItems="center" className="logoClass">
            <Grid item sm={4} xs={12}>
              <h3>{match["team-1"]}</h3>
            </Grid>
            <Grid item sm={4} xs={12} container justify="center">
              <img
                src={Vs}
                alt="..."
                height="150px"
                width="150px"
                style={{ borderRadius: "50%" }}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <h3>{match["team-2"]}</h3>
            </Grid>
          </Grid>

          <Grid
            container
            style={{ marginTop: "12px" }}
            justify="center"
            className="detailClass"
            direction="column"
            alignItems="center"
          >
            <Grid sm={6} xs={6} style={{ paddingBottom: "5px" }}>
              <Button
                onClick={() => {
                  handleClick(match.unique_id);
                }}
                item
                variant="contained"
                style={{
                  backgroundColor: "#00AC61",
                  color: "white",
                }}
              >
                details
              </Button>
            </Grid>

            <Grid sm={6} xs={6} style={{}}>
              <Button
                item
                style={{
                  border: "0.5px solid black",
                }}
              >
                Start time :{new Date(match.dateTimeGMT).toLocaleString()}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <Fragment>
      {getMatchCard()}
      {getDialog()}
    </Fragment>
  );
};
export default Mycard;
