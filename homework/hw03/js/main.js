import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "kiko";
let password = "password";

async function initializeScreen() {
    token = await getAccessToken(rootURL, username, password);
    showNav();
    getPosts();
}

//async function getToken() {
//    return await getAccessToken(rootURL, username, password);
//}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:

/**
 * 
 * 
 * 
 */

async function getPosts() {
    //get http body (json object)
    //const response = await fetch("https://photo-app-secured.herokuapp.com/api/posts/?limit=10")
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/posts/?limit=10", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer token ${token}`
        }
    });
    //
    const posts = await response.json();
    console.log(posts);
}


// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();
