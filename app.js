console.log('Before');
/* getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        });
    });
}); */

getUser(1)
    .then(user => getRepositories(user.gitHubUsername)
        .then(repos => getCommits(repos[0]))
        .then(commit => console.log(commit)))
    .catch(err => console.log(err.message));


function getRepositories(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github API...');
            resolve(['repo1', 'repo2', 'repo3']);
        },2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting Commits...')
            resolve(['commit'])
        }, 2000)
    })
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'derdroste'});
        }, 2000);
    })
}





