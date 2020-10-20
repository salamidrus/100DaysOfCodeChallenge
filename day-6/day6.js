function nonOverlappingInterval(interval) {
  const intervalSize = interval.length;

  // validate if only one interval provided,
  // then no need to check the overlaps
  if (intervalSize <= 1) return 0;

  interval.sort((a, b) => a[1] - b[1]);

  // variables as marker
  let x = 0;
  let remove = 0;
  for (let i = 1; i < intervalSize; i++) {
    if (interval[x][1] > interval[i][0]) {
      remove++;
    } else {
      x = i;
    }
    return remove;
  }
}

console.log(
  nonOverlappingInterval([
    [7, 9],
    [2, 4],
    [5, 3],
  ])
);
