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


const result = users.filter(user => user.languages.length > 2);


// Map all emails and DOM as list
const theEmails = users.map(function (string) {
    return string.email;
}); // ["ryan@codeup.com", "luis@codeup.com", "zach@codeup.com", "fernando@codeup.com", "justin@codeup.com"]

theEmails.forEach(element => $('#filterExample').append(`<li>${element}</li>`));

// .reduce to get total years and calculate average.
const totalYears = users.map(function (number) {
return number.yearsOfExperience;
}); // [5, 6, 7, 8, 9]

const sumTotalYears = totalYears.reduce((a, b) => {
	return a + b;
}); // 35

// Average years experience.
let yearsExperience = sumTotalYears/totalYears.length; // 7

// Get the longest email

console.log(longestEmail);