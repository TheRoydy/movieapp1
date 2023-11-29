const options = {
    method: 'GET' ,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjA1NDQ4NDZlM2NlMzUwYmY5MWQ2OGIxODkzMWMwZiIsInN1YiI6IjVkMzRiZmY4MDY5ZjBlMDAxMGNmNzRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p61VbCoHgHcNwpJtaNQ0BbqiDgmf08qF41ARMOBDt0A'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));