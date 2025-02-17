export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";

export const addScheduleSetValue = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
    payload
});
  
export const addScheduleOpenDialog = payload => ({
    type: ADD_SCHEDULE_OPEN_DIALOG,
    payload
});
  
export const addScheduleCloseDialog = () => ({
    type: ADD_SCHEDULE_CLOSE_DIALOG
});
  