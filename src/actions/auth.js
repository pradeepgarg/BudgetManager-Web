const authLogin = (data) => {
  console.log("authlogin function calling..", data);
  return {
   type: 'REQUEST_LOGIN',
   data,
  };
};

export {
  authLogin,
};