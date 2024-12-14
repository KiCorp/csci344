import React, {useState} from "react";

import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({ likeId, postId, token }) {

    const [likeID, setLikeId] = useState(likeId)

    async function createLike() {
        const sendData = {
            post_id: postId
        }
        const responseData = await postDataToServer(token, "/api/likes/", sendData)
        setLikeId(responseData.id)
        console.log("fffffffffffffffffffffffffff")
    }

    async function deleteLike() {
        const responseData = await deleteDataFromServer(token, '/api/likes/' + likeID)
        setLikeId(null)
        console.log("fffffffffffffffffffffffffff")
    }

    if (likeID) {
        return (
            <button ariachecked="true" aria-label="Like This Post" aria-role="toggle" onClick={deleteLike}>
                <i className="fas text-red-700 fa-heart">
            </i></button>
        )
    } else {
        return (
            <button ariaChecked="false" aria-label="Unlike This Post" aria-role="toggle" onClick={createLike}>
                <i className="far fa-heart">
            </i></button>
        )
    }
   
}
/*
import React from "react";

export default function Like({ likeId, postId, token }) {
    if (likeId) {
        return (
            <button>
                <i className="fas text-red-700 fa-heart">
            </i></button>
        )
    } else {
        return (
            <button>
                <i className="far fa-heart">
            </i></button>
        )
    }
}
    */