const HOSTNAME = 'http://localhost:8000/'

const post = (url, data) => {
  console.log("In post")
  fetch(`${HOSTNAME}${url}`, {
    method: 'POST', // or 'PUT'http
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
 /*  let promise = new Promise((resolve, reject) => {
    
    resolve(response.json());
    reject(new Error("…"));
    })
  
  promise.then((data) => {
    console.log("Success:", data)
  }) */
  .then((response) => Promise.resolve(response.json()))
  .then((data) => {
    console.log('Success:', data);
    const auth_token = data.auth_token;
    console.log("This is auth token: ", auth_token);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); 

};
export {
  post,
};
