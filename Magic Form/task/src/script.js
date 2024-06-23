const allInput = document.querySelectorAll('input')

allInput.forEach(id => {
	id.value = localStorage.getItem(id.name);

  id.addEventListener('input', () => {
    localStorage.setItem(id.name, id.value);
  });
});