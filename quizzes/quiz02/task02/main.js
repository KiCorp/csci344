// 1. Create your businessToHTML function here:

function businessToHTML(data) {
    //const bodyEl = document.querySelector("body")
    const template = `
            <div style="
                width: 500px;
                margin: auto;
                padding: 10px;
                border: 3px solid black;
                font-family: Arial;
            ">
                <h1>${data.name}</h1>
                <img src="${data.image_url}" alt="${data.name}'s food" width="80%" >
                <h4>${data.display_address}</h4>
                <h4>Rating: ${data.rating}</h4>
                <h4>Price: ${typeof data.price !== 'undefined' ? data.price : ""}</h4>
                <h4># of Reviews: ${data.review_count}</h4>
            </div>
        `
    //bodyEl.insertAdjacentHTML("beforeend", template);
    return template;
} 








// 2. When you're done, uncomment the test code below and preview index.html in your browser:

///*
const businessObjPriceDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    price: "$$",
    review_count: 1257,
};
//businessToHTML(businessObjPriceDefined);
///*
const businessObjPriceNotDefined = {
    id: "d8Vg0DxRY-s2a8xnZ6ratw",
    name: "Chestnut",
    rating: 4.5,
    image_url:
        "https://s3-media3.fl.yelpcdn.com/bphoto/TprWlxsHLqjZfCRgDmqimA/o.jpg",
    display_address: "48 Biltmore Ave, Asheville, NC 28801",
    coordinates: { latitude: 35.5931657, longitude: -82.550943 },
    review_count: 1257,
};
//console.log("HTML representation of a business (no price):", businessToHTML(businessObjPriceNotDefined));


console.log("HTML representation of a business:", businessToHTML(businessObjPriceDefined));
console.log("HTML representation of a business (no price):", businessToHTML(businessObjPriceNotDefined));
//*/
