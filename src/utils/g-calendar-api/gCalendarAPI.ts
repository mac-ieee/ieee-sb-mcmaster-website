import { gAPIKey, calendarId } from 'app/data/data';
import axios from 'axios';

export const driveDirectURI = `https://drive.google.com/uc?export=view&id=`;

const URIs = {
  listEvents: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
};

const DEFAULT_ITEMS = 6;

export const getUpcomingEvents = async (items?: 6) => {
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
      {
        params: {
          orderBy: 'startTime',
          singleEvents: true,
          maxResults: items || DEFAULT_ITEMS,
          timeMin: new Date(),
        },
      },
    )
    .then(res => {
      return res.data.items;
    });
};

export const getEventsWithinYear = async (year?: number) => {
  const now = new Date();

  let startOfYear, endOfYear;
  // if year selected is still in this year

  // TODO Fix loose equality
  if (!year || year == now.getFullYear()) {
    startOfYear = new Date(now.getFullYear(), 0);
    endOfYear = now;
  } else {
    startOfYear = new Date(year, 0);
    endOfYear = new Date(year, 12, 0, 23, 59, 59);
  }

  console.log(startOfYear, endOfYear);
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
      {
        params: {
          orderBy: 'startTime',
          singleEvents: true,
          timeMax: endOfYear,
          timeMin: startOfYear,
        },
      },
    )
    .then(res => {
      return res.data.items;
    });
};

export const getPastEvents = async (items?: number, year?: number) => {
  var date = new Date();
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
      {
        params: {
          orderBy: 'startTime',
          singleEvents: true,
          maxResults: items || DEFAULT_ITEMS,
          timeMax: new Date(),
          sortorder: 'descending',
        },
      },
    )
    .then(res => {
      return res.data.items;
    });
};
export const getEventsThisMonth = async (): Promise<
  Array<Record<string, unknown>>
> => {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59,
  );

  return axios
    .get(URIs.listEvents, {
      params: {
        orderBy: 'startTime',
        singleEvents: true,
        timeMin: firstDay,
        timeMax: lastDay,
      },
    })
    .then(res => {
      return res.data.items;
    });
};
