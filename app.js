console.log('Before');
getUser(1, (user) => {
    // Get the repos
    getRepositories(user.gitHubUsername, (repos) => {
        console.log(repos);
    });
    console.log('After');
});

// Callbacks
// Promises
// Async/await

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'derdroste'});
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}
