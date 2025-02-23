// // CALLBACK ASYNC AWAIT

// // setTimeout(() => {
// //     console.log("hello");
// // }, 3000);
// // setInterval(() => {
// //     location.reload()
// // }, 1000);

// // PROMISE ASYNC AWAIT

// // let myPromise1 = new Promise((resolve, reject) => {
// //   let x = 10;
// //   if (x == 10) {
// //     resolve(x);
// //   } else {
// //     reject("NOT OK");
// //   }
// // });
// // console.log(myPromise1);

// // myPromise1
// //   .then((data, myPromise1) => display(data, myPromise1))
// //   .catch((data, myPromise1) => display(data, myPromise1));

// // let myPromise2 = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve("HELLO THIS IS RESOLVE");
// //   }, 10000);
// // });
// // console.log(myPromise2);

// // myPromise2
// //   .then((data, myPromise2) => display(data, myPromise2))
// //   .catch((data, myPromise2) => display(data, myPromise2));

// // const display = (data, promiseName) => {
// //   console.log(data);
// // };

// // const func = async () => {
// //   return "HELLO";
// // };
// // console.log(func());

// // const greeting = () => {
// //   return (myAsyncPromise = new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve("Good Evening");
// //     }, 3000);
// //   }));
// // };

// // const asynccall = async () => {
// //   console.log("Hello");
// //   console.log(await greeting());
// //   console.log("BYEE");
// // };
// // asynccall();

// // const greet1 = () => {
// //   setTimeout(() => {
// //     console.log("This is Normal Function");
// //   }, 3000);
// // };

// // const asyncgreet = () => {
// //   return (myPromise = new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve("This is async Function");
// //     }, 3000);
// //   }));
// //   setTimeout(() => {
// // return "HELLO"
// //   }, 3000);
// // };

// // const asyncCall = async () => {
// //   console.log(await asyncgreet());
// // };
// // greet1()
// // asyncCall();

// // console.log("HEY1");
// // console.log("HEY2");
// // setTimeout(() => {
// //   console.log("HEY3");
// // }, 5000);
// // console.log("HEY4");

// // new Promise((res, rej) => {
// //   let x = 0;
// //   if (x == 0) {
// //     return res("RESOLVE");
// //   } else {
// //     return rej("REJECT");
// //   }
// // })
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((data) => {
// //     console.log(data);
// //   });

// const myPromise = new Promise((res, rej) => {
//   const XMLREQ = new XMLHttpRequest();
//   XMLREQ.onload = () => {
//     return res(this.responseText);
//   };
// });
// myPromise
//   .then((response) => {
//     response.json();
//   })
//   .then((response2) => {
//     console.log(response2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const XML = new XMLHttpRequest();
XML.open("GET", "https://jsonplaceholder.typicode.com/users");
XML.onload = () => {
  const data = JSON.parse(XML.responseText);
  console.log(data);
};
XML.send();
