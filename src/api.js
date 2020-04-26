const HOSTNAME = 'http://localhost:8000/'

const post = (url, data) => {
  console.log("In post")
  fetch(`${HOSTNAME}${url}`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => Promise.resolve({foo: "bar"}))
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export {
  post,
};
