const teclado = document.querySelector('.teclado');

teclado.addEventListener('click', e =>{
	alert('You should use your keyboard');
})

window.addEventListener('keydown', e =>{
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const teclas = document.querySelector(`div[data-key="${e.keyCode}"]`);
	teclas.classList.add('playing');
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	
})

function quitar (e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const remover = document.querySelectorAll(`div`);
remover.forEach(remover => remover.addEventListener('transitionend', quitar));




