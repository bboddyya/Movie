export function getTime(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return `${mins} мин. / ${hours}:${minutes}`;
}
