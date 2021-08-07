import { gAPIKey, calendarId } from 'app/_data/data';
import axios from 'axios';

const URIs = {
  listEvents: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
};

export const getUpcomingEvents = async (items: number) => {
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
      {
        params: {
          orderBy: 'startTime',
          singleEvents: true,
          maxResults: items,
          timeMin: new Date(),
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
