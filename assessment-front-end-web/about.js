console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('This is an alert');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const duckPhoto = document.querySelector('img');
duckPhoto.addEventListener('mouseover', alertduck);

function alertduck(evt) {
	evt.preventDefault();
	
	alert('You have nice hair!');
}
