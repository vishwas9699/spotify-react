export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirecturi = "http://localhost:3000/";
const clientId = "9296aa4b6ea04ade9ca0367d4a54e47f"
const scope = [
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
];

export const getTokenFromUrl = () =>{
    return window.location.hash.substring(1).split('&').reduce((initial,item) =>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        
        return initial;
    },{})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}
&redirect_uri=${redirecturi}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;
