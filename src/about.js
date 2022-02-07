
function about () {
    const container = document.querySelector('.container');
    let heading = document.createElement('h1');
    let descript = document.createElement('p');
    let hours = document.createElement('p');
    let location = document.createElement('p');

    heading.innerText = "Jay's Jerk Spot";
    descript.innerText = 
    `This is a restaurant that has some delicious ass chicken, 
    like this shit is so good it'll make you slap yo mamma no drama 
    took niggas to mclarens from hondas, from 0s to commas`;
    hours.innerText = 
    `time<br>
    killa<br>
    woo <br>`
    container.appendChild(heading);
    container.appendChild(descript);
}

export {about}