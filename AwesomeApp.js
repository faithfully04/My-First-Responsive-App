// The below is peculiar to jQuery
/*$(function () {

    $(".btn").click(function () {

        $(".submenu").slideToggle(500)

    });

});*/

//Let's write the vanilla JS code for the above
const btn = document.querySelector('.btn');

btn.addEventListener('click', onClick);

function onClick() {

document.querySelector('.submenu').classList.add('.active');

} 
console.log(onClick());
