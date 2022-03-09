import { connect } from "react-redux";
import CurrentScheduleDialog from "./presentation";
import { currentScheduleCloseDialog } from "../../redux/currentSchedule/actions";
import { asyncSchedulesFetchItem, asyncSchedulesDeleteItem } from "../../redux/schedules/effects";
import { formatMonth } from "../../services/calendar";

const mapStateToProps = state => ({
  schedule: state.currentSchedule
});
const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
      dispatch(currentScheduleCloseDialog());
    },
    deleteSchedule: ({month, year, id}) => {
      dispatch(asyncSchedulesDeleteItem(id,
        () => {
          dispatch(asyncSchedulesFetchItem({month, year}));
          dispatch(currentScheduleCloseDialog());
        }
      ));
    }
});
const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  deleteSchedule: () => {
    const { date, id } = stateProps.schedule.item;
    dispatchProps.deleteSchedule({...formatMonth(date), id});
  }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CurrentScheduleDialog);