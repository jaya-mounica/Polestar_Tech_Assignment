const {test, expect} = require('@playwright/test')
import{ faker } from '@faker-js/faker';


test('Graph API DELETE Request', async({ request }) => {
  
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

    const DeleteAPIResponse = await request.delete (`https://gorest.co.in/public/v2/users/${userid}`, {
       headers:{
        "Authorization": "Bearer 66e1585618294e76a7386de64603bb6021fe54623ba1b8c3072da1ccc8d75bd4"
       }
    })

   await  expect(DeleteAPIResponse.status()).toBe(204);

})
