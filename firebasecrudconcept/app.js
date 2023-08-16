// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaKZCOB5VnSK4juWGV2jo5RO3oc79ZFLk",
  authDomain: "smit-firebase-779b2.firebaseapp.com",
  projectId: "smit-firebase-779b2",
  storageBucket: "smit-firebase-779b2.appspot.com",
  messagingSenderId: "496663047977",
  appId: "1:496663047977:web:31efeb46aba5b6ad199138",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// let btn = document.getElementById("register-btn");
// btn.addEventListener("click", () => {
//   let myName = document.getElementById("name");
//   let phone = document.getElementById("number");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");

//   let userData = {
//     myName: myName.value,
//     phone: phone.value,
//     email: email.value,
//     password: password.value,
//   };
  //   //! use firebase login fucntion using firestore "addDoc"
  //   //* auth use keya or firestore add adddoc use keya hay(iska kam bhy data add krana hay)//?ismay kd say id dey rha
//   createUserWithEmailAndPassword(auth, userData.email, userData.password)
//     .then(async (userCredential) => {
//       const user = userCredential.user;
//       console.log("user", user);
//       try {
//         const docRef = await addDoc(collection(db, "users"), {
//           ...userData,
//           uid: user.uid,
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("errorMessage", errorMessage);
//     });
// });
//*auth use keya or firestore ka or data add kraya database may setdoc ka use kr kay(iska kam bhy data add krana hay)//? "setdoc"

//    createUserWithEmailAndPassword(auth, userData.email, userData.password)
//     .then(async(userCredential) => {
//       const user = userCredential.user;
//       try {
//         //! firebase setdoc fucntion using firestore
//         await setDoc(doc(db, "users", user.uid), {
//          ...userData,
//          uid:user.uid
//         });
//         console.log("added");
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("errorMessage",errorMessage);
//     });
// });

//! updated data
//? purany data ko update or new data ko add bhy karta hay
// let btn = document.getElementById("update-btn");
// btn.addEventListener("click",  async() => {
//   const id =auth.currentUser.uid;
//   console.log(id);
//   await deleteDoc(doc(db,"users",id))
//   console.log("deleted");

// const id = auth.currentUser.uid;
// let myName = document.getElementById("name");
// let phone = document.getElementById("number");
// const washingtonRef = doc(db, "users", id);
// try {
//   await updateDoc(washingtonRef, {
//     myName:myName.value,
//     phone: phone.value,
//     school:"smit",
//     timestamp: serverTimestamp(),
//     //!create array using arrayunion method
//     // attendance:arrayUnion("present")
//     //!delete array using arrayremove method
//     // attendance:arrayRemove("present")
//     //?increament
//     population: increment(1)// decrement hoga -1 krnay say
//   });
//   console.log("updated");
// } catch (error) {
//   console.log("error", error);
// }
// });

//! delete button
let btn1 = document.getElementById("del-btn");
btn1.addEventListener("click",  async() => {
  const id =auth.currentUser.uid;
  console.log(id);
  try{
    await deleteDoc(doc(db,"users",id))
    console.log("deleted");
  }catch(err){
    console.log("error",err);
  }
});