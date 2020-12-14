// import http from 'k6/http';
// import { sleep } from 'k6';
// export let options = {
//   stages: [
//     { duration: '30s', target: 100 },
//     { duration: '1m', target: 200 },
//     // { duration: '1m30s', target: 1000 },
//     // { duration: '2m', target: 5000 },
//   ],
// };
// export default function () {
//   http.get('http://localhost:9898/api/reviews-module/reviews/1233');
//   sleep(1);
// }


/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable eqeqeq */
import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export const options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '1m', target: 500 },
    { duration: '1m30s', target: 1000 },
    { duration: '2m', target: 2000 },
  ],
};
export default () => {
  const id = Math.floor(Math.random() * 100000);

  // get request
  // check(http.get(`http://localhost:9898/api/reviews-module/reviews/${id}`), {
  //   'status is 200': (r) => r.status == 200,
  // }) || errorRate.add(1);

  // post request
  check(http.post(`http://localhost:9898/api/reviews-module/reviews/${id}`, {
    username: 'Fabian Yee',
    review: 'k6 test',
  }), {
    'status is 201': (r) => r.status == 201,
  }) || errorRate.add(1);
  sleep(1);
};
