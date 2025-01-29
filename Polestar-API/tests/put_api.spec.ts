const {test, expect} = require('@playwright/test')

test('Graph API PUT Request', async({ request }) => {
    const postAPIResponse = await request.put('https://gorest.co.in/public/v2/users/7666399', {
       headers:{
        "Authorization": "Bearer 66e1585618294e76a7386de64603bb6021fe54623ba1b8c3072da1ccc8d75bd4"
       },
      
       
        data:{
            "id": "7653259",
            "name": "Test QA012",
            "email": "test@test.com012",
            "gender": "male",
            "status": "active"
        }
    })

   await  expect(postAPIResponse.ok()).toBeTruthy();
   await  expect(postAPIResponse.status()).toBe(200);



    const postAPIresponseBody = await postAPIResponse.json();
    console.log(postAPIresponseBody);
})
