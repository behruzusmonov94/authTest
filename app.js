function getU(name){
    return(document.querySelector(name));
}
function getALL(name){
    return(document.querySelectorAll(name));
}
function getID(name){
    return(document.getElementById(name));
}

function getCLASS(name){
    return(document.getElementsByClassName(name));
}
function getTAG(name){
    return(document.getElementsByTagName(name));
}

//selectors
const signup = getID('signup');
const login = getID('login');
const infoDiv = getID('infoDiv');
const logout = getID('logout');

signup.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = signup.email.value;
    let password = signup.password.value;
    if(email && password){
        // console.log(email, password);

        auth.createUserWithEmailAndPassword(email, password).catch((error)=>{
            console.log(error);
        })
        
    }else{
        console.log('error');
    }

    signup.email.value = '';
    signup.password.value = '';

})


//login

login.addEventListener('submit', (e) => {
    e.preventDefault();

    let email = login.email.value;
    let password = login.password.value;
    if(email && password){
        // console.log(email, password);

        auth.signInWithEmailAndPassword(email, password).catch((error)=>{
            console.log(error);
        })
        
    }else{
        console.log('error');
    }

    login.email.value = '';
    login.password.value = '';

})


// state change
auth.onAuthStateChanged((user) =>{
    if(user){
        infoDiv.innerHTML = `<h2>${user.email}</h2>`;
        logout.style = "display: block";

    }else{
        // console.log('user signed out');
        infoDiv.innerHTML = `<p>Ro'yxatdan o'ting yoki Login qiling</p>`;
        logout.style = "display: none";
    }
})



//logout
logout.addEventListener('click', (e) =>{
    e.preventDefault();

    auth.signOut().then(()=>{
        console.log('user signed out');
    }).catch(()=>{
        console.log('error');
    })

})


//firestore



// db.collection('user').doc('user').set({
//     name: 'Behruz',
//     age: 26
// })


// db.collection('user').doc('user').get().then((doc) => {
//     console.log(doc.data());
// })





//get firestore

const fireInfo = getID('fireInfo');

let currentLog = auth.onAuthStateChanged((user) =>{
    user.email
})

fireInfo.innerHTML = `${currentLog}`;