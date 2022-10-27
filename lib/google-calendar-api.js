import axios from "axios";

const gAPIKey = process.env.NEXT_PUBLIC_GAPI_KEY || "";

// IEEE Events General Calendar
const calendarId = "j5pafm1jpvqaon3fjepueq18tg@group.calendar.google.com";

if (!gAPIKey) {
  throw new Error("Error: No Google API Key found");
}

// Cheaty way to get attachments to events uploaded to Google Drive to be read
export const driveDirectURI = `https://drive.google.com/uc?export=view&id=`;

const URIs = {
  listEvents: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
};

const DEFAULT_ITEMS = 6;

/**
 *
 * @param {(number)} items max number of events to return
 * @returns array of Google Events
 */
export const getUpcomingEvents = async (items = 6) => {
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
      {
        params: {
          orderBy: "startTime",
          singleEvents: true,
          maxResults: items || DEFAULT_ITEMS,
          timeMin: new Date(),
        },
      }
    )
    .then((res) => {
      return res.data.items;
    });
};

/**
 *
 * @param {(number)} year year range of events
 * @returns
 */
export const getEventsWithinYear = async (year) => {
  const now = new Date();

  let startOfYear, endOfYear;
  // if year selected is still in this year

  // TODO Fix loose equality
  if (!year || year === now.getFullYear()) {
    startOfYear = new Date(now.getFullYear(), 0);
    endOfYear = now;
  } else {
    startOfYear = new Date(year, 0);
    endOfYear = new Date(year, 12, 0, 23, 59, 59);
  }

  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
      {
        params: {
          orderBy: "startTime",
          singleEvents: true,
          timeMax: endOfYear,
          timeMin: startOfYear,
        },
      }
    )
    .then((res) => {
      return res.data.items;
    });
};

export const getPastEvents = async (items, year) => {
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${gAPIKey}`,
      {
        params: {
          orderBy: "startTime",
          singleEvents: true,
          maxResults: items || DEFAULT_ITEMS,
          timeMax: new Date(),
          sortorder: "descending",
        },
      }
    )
    .then((res) => {
      return res.data.items;
    });
};
export const getEventsThisMonth = async () => {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  );

  return axios
    .get(URIs.listEvents, {
      params: {
        orderBy: "startTime",
        singleEvents: true,
        timeMin: firstDay,
        timeMax: lastDay,
      },
    })
    .then((res) => {
      return res.data.items;
    });
};

/**
 *
 * @param {string} evtId Google Calendar Event Id
 * @returns
 */
export const getEventForId = async (evtId) => {
  return axios
    .get(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${evtId}?key=${gAPIKey}`
    )
    .then((res) => {
      return res.data;
    });
};
