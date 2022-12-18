console.log('here');

const color = document.querySelector('#color')
color.addEventListener('click', alertcolor);

function alertcolor(evt) {
	evt.preventDefault();
	
	alert('My favorite color is Red!');
}
const place = document.querySelector('#place')
place.addEventListener('click', alertplace);

function alertplace(evt) {
	evt.preventDefault();
	
	alert('My favorite place is my home!');
}
const ritual = document.querySelector('#ritual')
ritual.addEventListener('click', alertritual);

function alertritual(evt) {
	evt.preventDefault();
	
	alert('My favorite ritual is eating dinner with my wife!');
}
