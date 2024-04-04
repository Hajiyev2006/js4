const apikey = "33c9694b3c4e5c9e466cefda4d18826";
const apiurl = "https://api.themoviedb.org/3/authentication/token/new?api_key=" + apikey;

function movie() {
    fetch(apiurl)
    .then((res) => res.json())
    .then((data) => {
        console.log("Token: ", data.request_token);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

movie();

