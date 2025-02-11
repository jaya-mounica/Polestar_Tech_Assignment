const {test, expect} = require('@playwright/test')
import{ faker } from '@faker-js/faker';

test('Graph API PUT Request', async({ request }) => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    console.log(name,email)
 
     const postAPIResponse = await request.post('https://gorest.co.in/public/v2/users', {
        headers:{
         "Authorization": "Bearer 66e1585618294e76a7386de64603bb6021fe54623ba1b8c3072da1ccc8d75bd4"
        },
       
 
         data:{
             "id": "",
             "name": name,
             "email": email,
             "gender": "male",
             "status": "active"
         }
     })
 
     const postAPIresponseBody = await postAPIResponse.json();
     const userid = postAPIresponseBody.id;
     console.log(postAPIresponseBody)

    const putAPIResponse = await request.put(`https://gorest.co.in/public/v2/users/${userid}`, {
       headers:{
        "Authorization": "Bearer 66e1585618294e76a7386de64603bb6021fe54623ba1b8c3072da1ccc8d75bd4"
       },

        data:{
            "id": userid,
            "name": name,
            "email": email,
            "gender": "female",
            "status": "active"
        }
    })

   await  expect(postAPIResponse.ok()).toBeTruthy();
   await  expect(putAPIResponse.status()).toBe(200);



    const putAPIresponseBody = await putAPIResponse.json();
    console.log(putAPIresponseBody);
})
