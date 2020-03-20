const url = 'https://api.github.com/users';
const gitHeader = {headers: {'Authorization': 'token 50bdaf75600dc21f2f5091a3ff4555132dc618db'}};

// GET /users/:username/received_events


// fetch(url, gitHeader)
//     .then(response => response.json())
//     .then(users => users.map(user => user.login))
//     .then(usernames => users.forEach((username) => {
//         console.log(username);
//     }))
//         .catch(error => console.error(error));

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users', gitHeader)
//         .then(response => response.json())
//         .then(users => users.map(user => user.login));
//
// }
//
// getGithubUsernames().then((usernames) => {
//     usernames.forEach((username) => {
//         console.log(username);
//     });
// }).catch(error => console.error(error));

//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made.
function getEvents(username) {
    fetch(`https://api.github.com/users/${username}/events/public`, gitHeader)
        .then(response => {
            return response.json();
        })
        .then((data) => {
            var date = new Date(data[0].created_at).toString();
            console.log(data);
            console.log("Last push: " + date);
        });
}

getEvents("hadley");


// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// const wait = num => {
//     return new Promise((res) => {
//         setTimeout(res, num);
//     });
// };
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//
// function wait(someTime) {
//     const myPromise = new Promise((resolve, reject) => {
//         if (typeof someTime === "number") {
//             resolve(
//                 setTimeout(() => {
//                     console.log("You'll see this after " + someTime / 1000 + " seconds");
//                 }, someTime)
//             );
//         } else {
//             reject("That's not a good time.");
//         }
//     });
//     myPromise.then(() => console.log('resolved!'));
//     myPromise.catch(() => console.log('rejected!'));
// }
// wait(2000);

// let goodKid = false;
//
// const getCake = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//     if (goodKid) { resolve("CAAAAKE!!!!");
//     } else {
//     reject( "NO CAKE FOR YOU!");
//     }},2000);
// });
//
// getCake.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });


