import React from "react";
import {
    Dialog,
    DialogContent,
    // ==========ここから追加する==========
    DialogActions,
    Input,
    Grid,
    IconButton,
    Typography
    // ==========ここまで追加する==========
} from "@material-ui/core";

import { LocationOnOutlined, NotesOutlined, Close, DeleteOutlineOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import * as styles from "./style.css";

const spacer = (top, bottom) => ({
  margin: `${top}px 0 ${bottom}px 0`
});

const Title = withStyles({
  root: { marginBottom: 32, fontSize: 22 }
})(Input);


const CurrentScheduleDialog = ({ schedule:{item, isDialogOpen}, closeDialog, deleteSchedule }) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={deleteSchedule} size="small">
            <DeleteOutlineOutlined />
          </IconButton>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>
      <DialogContent>
        {item && (
          <>
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                style={spacer(0, 30)}
              >
                <Grid item>
                  <span className={styles.box}></span>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.date.format("M月 D日")}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {item.location && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                style={spacer(0, 4)}
              >
                <Grid item>
                  <LocationOnOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.location}</Typography>
                </Grid>
              </Grid>
            )}
            {item.description && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                style={spacer(0, 4)}
              >
                <Grid item>
                  <NotesOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.description}</Typography>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CurrentScheduleDialog;