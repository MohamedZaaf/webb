var clicked = false;
var iconContainer = document.getElementById('icon-container');

iconContainer.addEventListener('click', function() {
    if (clicked) {
        iconContainer.innerHTML = '<script src="https://cdn.lordicon.com/ritcuqlt.js"></script><lord-icon id="my-icon" src="https://cdn.lordicon.com/eanmttmw.json" trigger="click" colors="primary:#121331" state="morph-1" style="width:32px;height:32px"></lord-icon>';
        clicked = false;
    } else {
        iconContainer.innerHTML = '<script src="https://cdn.lordicon.com/ritcuqlt.js"></script><lord-icon id="my-icon" src="https://cdn.lordicon.com/gigfpovs.json" trigger="click" colors="primary:#121331" state="morph-2"  style="width:32px;height:32px"></lord-icon>';
        clicked = true;
    }
    setTimeout(toggleAnimations, 2000);
});


const passwordInput = document.getElementById('password-input');

passwordInput.addEventListener('input', function(event) {
  if (!isValidPassword(event.target.value)) {
    passwordInput.classList.add('is-invalid');
  } else {
    passwordInput.classList.remove('is-invalid');
  }
});

function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}