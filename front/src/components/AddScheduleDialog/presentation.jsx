import React from "react";
import {
    Dialog,
    DialogContent,
    // ==========ここから追加する==========
    TextField,
    DialogActions,
    Button,
    Input,
    Grid,
    IconButton
    // ==========ここまで追加する==========
} from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";

import { LocationOnOutlined, NotesOutlined, AccessTime, Close } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";
import * as styles from "./style.css";

const spacer = { margin: "4px 0" };

const Title = withStyles({
  root: { marginBottom: 32, fontSize: 22 }
})(Input);


const AddScheduleDialog = ({ schedule:{form, isDialogOpen}, closeDialog, setSchedule, saveSchedule }) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>
      <DialogContent>
        <Title autoFocus fullWidth placeholder="タイトルと日時を追加" value={form.title}
                onChange={e => setSchedule({ title: e.target.value })}
        />
        <Grid container spacing={1} alignItems="center" justifyContent="space-between">
            <Grid item>
                <AccessTime />
            </Grid>
            <Grid item xs={10}>
            <DatePicker
                value={form.date}
                onChange={value => setSchedule({ date: value})}
                variant="inline"
                format="YYYY年M月D日"
                animateYearScrolling
                disableToolbar
                fullWidth
                style={spacer}
            />
            </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justifyContent="space-between">
          <Grid item>
            <LocationOnOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField style={spacer} fullWidth placeholder="場所を追加" value={form.location}
                onChange={e => setSchedule({ location: e.target.value })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="center" justifyContent="space-between">
          <Grid item>
            <NotesOutlined />
          </Grid>
          <Grid item xs={10}>
            <TextField style={spacer} fullWidth placeholder="説明を追加" value={form.description}
                onChange={e => setSchedule({ description: e.target.value })}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary" variant="outlined" onClick={saveSchedule}>
          保存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddScheduleDialog;