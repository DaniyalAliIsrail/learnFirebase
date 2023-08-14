
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,updateEmail,sendEmailVerification,updatePassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAaKZCOB5VnSK4juWGV2jo5RO3oc79ZFLk",
    authDomain: "smit-firebase-779b2.firebaseapp.com",
    projectId: "smit-firebase-779b2",
    storageBucket: "smit-firebase-779b2.appspot.com",
    messagingSenderId: "496663047977",
    appId: "1:496663047977:web:31efeb46aba5b6ad199138"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);

  //! login
  

//   createUserWithEmailAndPassword(auth, "dani@gmail.com" , "123456")
//   .then((res) => { 
//     const user = res.user;
//     console.log("user",user);
//   })
//   .catch((error) => {
//     const errorMessage = error.message;
//     console.log("errorMessage",errorMessage);
//   });

//! sigIN
//   signInWithEmailAndPassword(auth, "dani@gmail.com", "123456")
//   .then((userCredential) => { 
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });


//! update Email
//  let btn = document.getElementById("update-email");
// let updateBtn = ()=>{
//         updateEmail(auth.currentUser, "daniyalali12568@gmail.com").then(() => {
//                 console.log("update email");
//                       }).catch((error) => {
//                         console.log(error);
//                         // An error occurred
//                         // ...
//                       });
// }
// btn.addEventListener("click",updateBtn)


//! password update
// let btn2 = document.getElementById("updatePassword1");
// let updatePass = ()=>{
// const user = auth.currentUser;
// const newPassword = 666777;
// updatePassword(user, newPassword).then(() => {
//   console.log("password update");
// }).catch((error) => {
//   console.log("error",error);
//   // ...
// });
// }
// btn2.addEventListener("click",updatePass)

//! sendEmailVerification
// let btn1 = document.getElementById("send-email");
// let emailSnd = ()=>{
// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//     console.log("send email verification");
//   });
// btn1.addEventListener("click",updateBtn)

//! onAuthStateChanged
// onAuthStateChanged(auth, (user) => {
//         if (user) {
//         //   const uid = user.uid;
//         console.log("user",user);
//         } else {
//                 console.log("user not login");
//           // User is signed out
//           // ...
//         }
//       });


















