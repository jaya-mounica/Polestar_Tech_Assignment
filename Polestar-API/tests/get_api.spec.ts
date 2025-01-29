const {test, expect} = require('@playwright/test')

test('Graph API POST Request', async({ request }) => {
    const postAPIResponse = await request.get ('https://gorest.co.in/public/v2/users/7666399', {
       headers:{
        //"key": "Authorization",
        "Authorization": "Bearer 66e1585618294e76a7386de64603bb6021fe54623ba1b8c3072da1ccc8d75bd4"
       }
    })

   await  expect(postAPIResponse.ok()).toBeTruthy();
   await  expect(postAPIResponse.status()).toBe(200);



    const postAPIresponseBody = await postAPIResponse.json();
    console.log(postAPIresponseBody);
})
