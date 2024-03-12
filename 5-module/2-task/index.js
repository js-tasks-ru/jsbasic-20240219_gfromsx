function toggleText() {
  button = document.querySelector('.toggle-text-button');
  text = document.getElementById('text');

  button.addEventListener('click', function () {
    if (text.hidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  })
}
