export const CALENDAR_SET_MONTH = "CALENDAR_SET_MONTH";
export const CALENDAR_REFRESH = "CALENDAR_REFRESH";

export const calendarSetMonth = payload => ({
    type: CALENDAR_SET_MONTH,
    payload
  });

  export const calendarRefresh = payload => ({
    type: CALENDAR_REFRESH,
    payload
  });

  