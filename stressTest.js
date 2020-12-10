import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '1m', target: 200 },
    // { duration: '1m30s', target: 1000 },
    // { duration: '2m', target: 5000 },
  ],
};
export default function () {
  http.get('http://localhost:9898/api/reviews-module/reviews/1233');
  sleep(1);
}
