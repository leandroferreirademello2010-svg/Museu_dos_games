
  var loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    var login = document.getElementById('login-screen');
      if (login) {
        login.classList.add('saindo');
      }
    setTimeout(function(){ location.hash = 'home-screen'; }, 250);
  });
  }