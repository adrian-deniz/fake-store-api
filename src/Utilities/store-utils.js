let getMoviesByName =  async function (name) {
    if(typeof name !== "string") return;

    let response = await fetch(`http://www.omdbapi.com/?s=${name}&apikey=${apiKey}`);
    let data = await response.json();

    try {
        if(data.Response === "True") return [data.Search, null];
        if(data.Response === "False") throw data.Error;
    }
    catch(error) {
        return [[], error];
    }
}

let getMovieDetailsById =  async function (id) {
    if(typeof id !== "string") return;
    let response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    let data = await response.json();

    try {
        if(data.Response === "True") return [data, null];
        if(data.Response === "False") throw data.Error;
    }
    catch(error) {
        return [{}, error];
    }
}

export  { getMoviesByName, getMovieDetailsById };

