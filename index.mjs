import ical from 'node-ical';

const calendar = process.env.CALENDAR || 'https://calendar.google.com/calendar/ical/98ffa06e098bbabc76b5c80dd24a2f596219f3c3276ac94219725528def57501%40group.calendar.google.com/public/basic.ics';

const events = await ical.async.fromURL(calendar);
const eventList = Object.values(events)
  .filter(({ type }) => type === 'VEVENT')
  .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
  .map((e) => ({
    type: 'stream',
    title: e.summary,
    subtitle: '',
    url: e.location,
    otherUrls: ['https://www.twitch.tv/penbuvt'],
    datetime: e.start,
    id: e.uid,
  }));

process.stdout.write(JSON.stringify(eventList) + '\n');
