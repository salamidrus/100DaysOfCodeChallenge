function findIntersection(p, q) {
  // container
  let count = 0;
  // check length of arr src only 2 then check p and q intersection
  if (p.length == 2) {
    if ((p[0] > p[1] && q[0] < q[1]) || (p[0] < p[1] && q[0] > q[1])) return 1;
    else return 0;
  }

  // count the intersection lines forward and backward p & q
  for (let i = 0; i < p.length - 1; i++) {
    for (j = i + 1; j < p.length; j++) {
      if ((p[i] > p[j] && q[i] < q[j]) || (p[i] < p[j] && q[i] > q[j])) {
        count += 1;
      }
    }
  }

  return count;
}

const p = [2, 4, 6, 7, 8, 9, 10];
const q = [2, 5, 4, 6, 7, 8, 1];

const intersections = findIntersection(p, q);
console.log(intersections);
