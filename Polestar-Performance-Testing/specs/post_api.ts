import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export const options = {
    vus: 10,
    duration: '50s',
  };
  
  const  url = 'https://gorest.co.in/public/v2/users';

  export default function(){

    const response = http.post(url, {
        "id": "",
        "name": "Test QA08",
        "email": "test@test.com008",
        "gender": "male",
      "status": "active"
    })

    check(response, { 'status code validation': (response) => response.status ===201  })


  }

  export function handleSummary(data) {
    return {
      "result.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
  }
