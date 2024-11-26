import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "kiko";
let password = "password";

async function initializeScreen() {
    token = await getAccessToken(rootURL, username, password);
    showNav();
    getPosts();
    getProfile();
    getSuggestions();
    getStories();
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
async function getProfile() {
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
    showProfile(data);
}

function showProfile(data) {
    const asideEl = document.querySelector("aside")
    const template = `
         <header class="flex gap-4 items-center">
            <img src="${data.thumb_url}" class="rounded-full w-16" alt="profile pic"/>
            <h2 class="font-Comfortaa font-bold text-2xl text-blue-950">${data.username}</h2>
        </header>
    `
    asideEl.insertAdjacentHTML("afterbegin", template);
}

async function getSuggestions() {
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/suggestions/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
    showSuggestions(data);
}

function showSuggestions(data) {
    const asideEl = document.querySelector("aside")
    const template1 = `
        <div class="mt-4">
        <p class="text-base  text-blue-950 font-bold mb-4">Suggestions for you</p>
    `
    asideEl.insertAdjacentHTML("beforeend", template1);
    data.forEach(data => {
        const template = `
            <section class="flex justify-between items-center mb-4 gap-2">
                <img src="${data.thumb_url}" class="rounded-full" alt="profile pic"/>
                <div class="w-[180px]">
                    <p class="font-bold text-sm">${data.username}</p>
                    <p class=" text-blue-950 text-xs">suggested for you</p>
                </div>
                <button class=" text-blue-950 text-sm py-2">follow</button>
            </section>
        `
        asideEl.insertAdjacentHTML("beforeend", template);
    });
    const template2 = `
        </div>
    `
    asideEl.insertAdjacentHTML("beforeend", template2);
}

async function getStories() {
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/stories/", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
    showStories(data);
}

function showStories(data) {
    const mainEl = document.querySelector("main > header")
    data.forEach(data => {
        const template = `
            <div class="flex flex-col justify-center items-center">
                <img src="${data.user.thumb_url}" class="rounded-full border-4 border-gray-300" alt="profile pic"/>
                <p class="text-xs text-gray-500">${data.user.username}</p>
            </div>
        `
        mainEl.insertAdjacentHTML("beforeend", template);
    });
}

async function getPosts() {
    const endpoint =
        "https://photo-app-secured.herokuapp.com/api/posts/?limit=10";
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const posts = await response.json();
    console.log(posts);
    showPosts(posts);
}

function showPosts(posts) {
    const mainEl = document.querySelector("main")
    posts.forEach(post => {
        const template = `
            <section class="bg-white border mb-10">
                <div class="p-4 flex justify-between">
                    <h3 class="text-lg font-Comfortaa font-bold">${post.user.username}</h3>
                    <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
                </div>
                <img src="${post.image_url}" alt="${post.alt_text}" width="300" height="300"
                    class="w-full bg-cover">
                <div class="p-4">
                    <div class="flex justify-between text-2xl mb-3">
                        <div>
                            ${getLikeButton(post)}
                            <button><i class="far fa-comment"></i></button>
                            <button><i class="far fa-paper-plane"></i></button>
                        </div>
                        <div>
                            ${getBookmarkButton(post)}
                        </div>
                    </div>
                    <p class="font-bold mb-3">${post.likes.length} like(s)</p>
                    <div class="text-sm mb-3">
                        <p>
                            <strong>${post.user.username}</strong>
                            ${post.caption} 
                        </p>
                    </div>
                    ${showComments(post.comments)}
                    <p class="uppercase text-gray-500 text-xs">${post.display_time}</p>
                </div>
                <div class="flex justify-between items-center p-3">
                    <div class="flex items-center gap-3 min-w-[80%]">
                        <i class="far fa-smile text-lg"></i>
                        <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                    </div>
                    <button class=" text-blue-950 py-2">Post</button>
                </div>
            </section>
        `
        mainEl.insertAdjacentHTML("beforeend", template);
    });
}

function showComments (comments) {
    if(comments.length > 1) {
        const lastComment = comments[comments.length-1];
        return `
            <button>view all ${comments.length} comments</button>
            <p class="text-sm mb-3"><strong>${lastComment.user.username}</strong> ${lastComment.text}</p>
        `;
    }
    if(comments.length === 1) {
        const lastComment = comments[0];
        return `
            <p class="text-sm mb-3"><strong>${lastComment.user.username}</strong> ${lastComment.text}</p>
        `;
    }
    return '';
}

function getLikeButton (post) {
    if (post.current_user_like_id) {
        return `<button onclick="deleteLike(${post.current_user_like_id})"><i class="fa-solid text-red-700 fa-heart"></i></button>`;
    } else {
        return  `<button onclick="createLike(${post.id})"><i class="far fa-heart"></i></button>`;
    }
}

window.createLike = async function (postId) {
    const postData = {
        "post_id": postId,
    };
    

    const response = await fetch("https://photo-app-secured.herokuapp.com/api/likes/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    console.log(data);

}

window.deleteLike = async function (likeId) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/likes/${likeId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
}

function getBookmarkButton (post) {
    if (post.current_user_bookmark_id) {
        return `<button onclick="deleteBookmark(${post.current_user_bookmark_id})"><i class="fa-solid fa-bookmark"></i></button>`;
    } else {
        return  `<button onclick="createBookmark(${post.id})"><i class="far fa-bookmark"></i></button>`;
    }
}

window.createBookmark = async function (postId) {
    const postData = {
        "post_id": postId,
    };
    

    const response = await fetch("https://photo-app-secured.herokuapp.com/api/bookmarks/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(postData)
    });
    const data = await response.json();
    console.log(data);

}

window.deleteBookmark = async function (bookmarkId) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    console.log(data);
}

// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();
