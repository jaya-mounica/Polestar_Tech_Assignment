import http from 'k6/http'
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
  vus: 10,
  duration: '50s',
};

export default function () {
    const res = http.get('https://www.polestar.com/en-ca/preconfigured-cars/polestar-3/');
    sleep(1);

    check(res, {
      'is status 200': (r) => r.status === 200,
  });
  }

  export function handleSummary(data) {
    return {
      "result.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
  }
