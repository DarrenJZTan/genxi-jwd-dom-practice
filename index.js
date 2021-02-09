// Buttons
const buttonClicking = () => {
    document.querySelector('#display-name').classList.remove('invisible')
}

document.querySelector('#display-name-button').addEventListener('click', buttonClicking)
// Mouse Over
const light = () => {
    document.querySelector('#light-bulb').src = 'https://raw.githubusercontent.com/DarrenJZTan/genxi-jwd-dom-practice/main/images/light-bulb-on.png'
}
const lightoff = () => {
    document.querySelector('#light-bulb').src = 'images/light-bulb-off.png'
}

document.querySelector('#light-bulb').addEventListener('mouseover', light)
document.querySelector('#light-bulb').addEventListener('mouseout', lightoff)
// Toggle
const toggle = () => {
    if (document.querySelector('#toggle-alert').classList.contains('invisible')) {
        document.querySelector('#toggle-alert').classList.remove('invisible')
        document.querySelector('#toggle-button').innerHTML = 'Off'
    } else {
    document.querySelector('#toggle-alert').classList.add('invisible')
    document.querySelector('#toggle-button').innerHTML = 'On' 
    }
}


document.querySelector('#toggle-button').addEventListener('click', toggle)


// Validate
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side

let validate = (event) => {
    event.preventDefault()
    if (document.querySelector('#form-validate-first-name').value.length > 2) {
        document.querySelector('#form-validate-first-name').classList.add('is-valid')
        document.querySelector('#form-validate-first-name').classList.remove('is-invalid')
    } else {
        document.querySelector('#form-validate-first-name').classList.add('is-invalid')
        document.querySelector('#form-validate-first-name').classList.remove('is-valid')
    }
}

document.querySelector('#form-validate').addEventListener('submit', validate)


// Challenge: Lists

let listing = (event) => {
    event.preventDefault()
    if (document.querySelector('#form-hobby-text').value.length > 1) {
        let ul = document.getElementById("hobby-list");
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.appendChild(document.createTextNode(document.querySelector('#form-hobby-text').value));
        ul.appendChild(li);
    }
}

document.querySelector('#form-hobby').addEventListener('submit', listing)

// Challenge: Lists (Part 2)

let listingremove = (event) => {
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        document.querySelector('#hobby-list-2').removeChild(event.target.parentElement)
    }
}

document.querySelector('#hobby-list-2').addEventListener('click', listingremove)