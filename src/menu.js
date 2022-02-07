import image from "./images.jpg"

function menu () {
    const container = document.querySelector('.container');
    let heading = document.createElement('h1');
    let img = document.createElement('img');
    let descript = document.createElement('p');

    heading.innerText = "Jay's Jerk Spot"
    img.src = image;
    descript.innerText = "This is a restaurant"
    container.appendChild(heading);
    container.appendChild(img);
    container.appendChild(descript);
}

export {menu}