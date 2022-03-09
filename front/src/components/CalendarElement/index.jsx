import React from "react";

import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";
import Schedule from "../Schedule";

import { isSameDay, isSameMonth, isFirstDay, getMonth } from "../../services/calendar.js";


const CalendarElement = ({ day, month, schedules, ...props }) => {
    const today = dayjs();

    const isToday = isSameDay(today, day);
    const isCurrentMonth = isSameMonth(getMonth(month), day);

    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    const format = isFirstDay(day) ? "M月D日" : "D";

    return (
      <div className={styles.element}>
        <Typography
          className={styles.date}
          color={textColor}
          align="center"
          variant="caption"
          component="div"
        >
            <span className={isToday ? styles.today : ""}>
                {day.format(format)}
            </span>
            <div className={styles.schedules}>
                {schedules.map(schedule => 
                    <Schedule key={schedule.id} schedule={schedule}
                    {...props}
                    />)}
            </div>
        </Typography>
      </div>
    );
  };
export default CalendarElement;
