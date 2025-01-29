const {test, expect} = require('@playwright/test')

test('Graph API POST Request', async({ request }) => {
    const postAPIResponse = await request.post('https://gorest.co.in/public/v2/users', {
       headers:{
        //"key": "Authorization",
        "Authorization": "Bearer 66e1585618294e76a7386de64603bb6021fe54623ba1b8c3072da1ccc8d75bd4"
       },
      
       
        data:{
            "id": "",
            "name": "Test QA81",
            "email": "test@test.com8npmx3",
            "gender": "male",
            "status": "active"
        }
    })

   await  expect(postAPIResponse.ok()).toBeTruthy();
   await  expect(postAPIResponse.status()).toBe(201);



    const postAPIresponseBody = await postAPIResponse.json();
    console.log(postAPIresponseBody);
})
