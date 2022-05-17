// Stolen from https://stackoverflow.com/a/37770048 for time purposes
export function convertToTime(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }