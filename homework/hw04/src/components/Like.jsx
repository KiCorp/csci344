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
    return ( 
        
        <button>
            <i className="far fa-heart"></i>
        </button>
    )
}