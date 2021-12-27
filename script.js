//  craete to do list using js




const myInput = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const myList = document.querySelector(".container ul");

myButton.addEventListener("click", (event) => {
    if (myInput.value != "") {
        event.preventDefault();

        // create li
        let myLi = document.createElement('li');
        myLi.innerHTML = myInput.value;

        // Append li to ul
        myList.appendChild(myLi)

        // create span 
        let mySpan = document.createElement("span");
        mySpan.innerHTML = "delete";

        // append span to li 
        myLi.appendChild(mySpan);

    }
    // create close function 
    let close = document.querySelectorAll("span");

    // close to array
    for (let i = 0; i < close.length; i++) {
        // add click to function 
        close[i].addEventListener("click", () => {
            close[i].parentElement.style.opacity = 0;

            setTimeout(() => {
                close[i].parentElement.style.display = "none";
            }, 500)
        })
    }

    // local storage
    window.localStorage.setItem("task", myInput.value)
    window.localStorage.getItem("task", myInput.value)

});





f = function(a) {
    return (Math.pow(a, 3))
}





// making scroll top 

let btn = document.querySelector(".scroll-top");


window.onscroll = function() {
    if (window.scrollY >= 100) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"

    }
}


btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })

})