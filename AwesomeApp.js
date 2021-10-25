// The below is peculiar to jQuery
/*$(function () {

    $(".btn").click(function () {

        $(".submenu").slideToggle(500)

    });

});*/

//Let's write the vanilla JS code for the above
const btn = document.querySelector('.btn');
const submenu = document.querySelector('.submenu');

btn.addEventListener('click', show);

function show() {

submenu.classList.toggle('active');

} 
