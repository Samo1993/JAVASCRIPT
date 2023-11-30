function callback_BasedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        resolve(`Result is odd!`);
      } else {
        reject(new Error('Result is not odd!'));
      };
    }, 1000);
  });
      /* setTimeout(() => { 
        const result = arg1 + arg2; 
        if (result % 2 !== 0) { 
          callback(null, result); 
        } else { 
          callback(new Error('Result is not odd!'), null);
      }
    }, 1000); */
}

const arg1 = 7;
const arg2 = 2;

callback_BasedFunction(arg1, arg2).then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
