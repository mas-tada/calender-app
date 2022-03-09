import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar.js";
import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";
import { currentScheduleOpenDialog, currentScheduleSetItem } from "../../redux/currentSchedule/actions";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";


import { setSchedules } from "../../services/schedule";

const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules
});
const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: date => {
      dispatch(addScheduleOpenDialog());
      dispatch(addScheduleSetValue({ date: date }));
    },
    openCurrentScheduleDialog: (schedule, e) => {
        // 他のイベントが発火するのをキャンセル
        e.stopPropagation();
    
        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    },
    fetchSchedule: month => {
        dispatch(asyncSchedulesFetchItem(month));
    }
});
const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    month: stateProps.calendar,
    calendar: setSchedules(createCalendar(stateProps.calendar), stateProps.schedules.items),
    fetchSchedule: () => dispatchProps.fetchSchedule(stateProps.calendar),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);