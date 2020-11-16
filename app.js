console.log('Before');
getUser(1, getRepositories);


function displayCommits(commits) {
    console.log(commits);
}

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repos, displayCommits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback({ id: id, gitHubUsername: 'derdroste'});
    }, 2000);
}





