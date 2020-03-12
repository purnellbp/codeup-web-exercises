const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let skilledProfs = users.filter(user => user.languages.length >= 3);


// Map all emails and DOM as list
const theEmails = users.map(function (string) {
    return string.email;
}); // ["ryan@codeup.com", "luis@codeup.com", "zach@codeup.com", "fernando@codeup.com", "justin@codeup.com"]
console.log(theEmails);
var emailAddies = users.map(user => user.email);
console.log(emailAddies);
// .reduce to get total years and calculate average.
const totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
// [5, 6, 7, 8, 9]

let longestEmail = users.reduce((currentLongest, user) => user.email.length > currentLongest.length ? user.email : currentLongest, 'j');
console.log(longestEmail);

let names = users.reduce(( sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name, '');



console.log("Your instuctors are: " + names);
