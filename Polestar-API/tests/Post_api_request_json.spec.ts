const {test, expect} = require('@playwright/test');
import createAPIRequestBody from '../test-data/post_request_body.json';

test('Graph API POST Request using JSON', async({ request }) => {
    const postAPIResponse = await request.post('https://gorest.co.in/public/v2/users', {
       headers:{
        "Authorization": "Bearer 66e1585618294e76a7386de64603bb6021fe54623ba1b8c3072da1ccc8d75bd4"
       },
      
       
        data:createAPIRequestBody
    })

   await  expect(postAPIResponse.ok()).toBeTruthy();
   await  expect(postAPIResponse.status()).toBe(201);



    const postAPIresponseBody = await postAPIResponse.json();
    console.log(postAPIresponseBody);
})
