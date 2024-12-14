
import React, {useState} from "react";

import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Bookmark({ bookmarkId, postId, token }) {

    const [bookMarkId, setBookMarkId] = useState(bookmarkId)

    async function createBookMark() {
        const sendData = {
            post_id: postId
        }
        const responseData = await postDataToServer(token, "/api/bookmarks/", sendData)
        setBookMarkId(responseData.id)
        console.log("fffffffffffffffffffffffffff")
    }

    async function deleteBookMark() {
        const responseData = await deleteDataFromServer(token, '/api/bookmarks/' + bookMarkId)
        setBookMarkId(null)
        console.log("fffffffffffffffffffffffffff")
    }

    if (bookMarkId) {
        return (
            <button ariachecked="true" aria-label="Bookmark This Post" aria-role="toggle" onClick={deleteBookMark}>
                <i className="fas fa-bookmark">
            </i></button>
        )
    } else {
        return (
            <button ariaChecked="false" aria-label="Unbookmark This Post" aria-role="toggle" onClick={createBookMark}>
                <i className="far fa-bookmark">
            </i></button>
        )
    }
   
}