# cal2sched

[Penbu][]'s helper script to turn a remote ICS file from Google Calendar into a list of events for use in his [schedule][].
Do not expect this to be robust or polished: it is only as good as it needs to be.

[Penbu]: https://www.penbuvt.ca/
[schedule]: https://github.com/penbuvt/penbuvt.github.io/blob/ffe9430a34b125dd6e42b1c8e5e08abe29d9540a/static/schedule/index.html#L29

It is best used with a wrapper script (requires `node` and `jq` in `PATH`):

```sh
#!/bin/sh
node /path/to/cal2sched/index.mjs | jq ".[-${1:-0}:]"
```

This wrapper script takes one argument: the number of events from the end to print.

## Using this for yourself

If you want to use this for your own purposes, edit the details in `index.mjs`, particularly:

- `calendar`: Change the string containing the remote ICS file to read.
- `otherUrls`: Change the list of additional locations for the event.
- `datetime`: Change the timezone to your local timezone (optional, but it makes the output easier to edit if necessary).

The output can and should be edited further as necessary.

## Licence

[MIT](./LICENSE)
