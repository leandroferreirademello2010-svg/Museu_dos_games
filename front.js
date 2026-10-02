var loginForm = document.getElementById('login-form');

  var menuState = document.getElementById('menu-toggle');
  if (menuState) {
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') { menuState.checked = false; }
    });
    var navLinks = document.querySelectorAll('.sidebar .nav-item, .sidebar .nav-create');
    for (var n = 0; n < navLinks.length; n++) {
      navLinks[n].addEventListener('click', function(){ menuState.checked = false; });
    }
  }

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
  var jogosLista = document.getElementById('jogos-lista');
  var addJogo = document.getElementById('add-jogo');
  if (jogosLista && addJogo) {
    addJogo.addEventListener('click', function(){
      var nova = jogosLista.firstElementChild.cloneNode(true);
      var campos = nova.querySelectorAll('input');
      for (var i = 0; i < campos.length; i++) { campos[i].value = ''; }
      jogosLista.appendChild(nova);
    });
    jogosLista.addEventListener('click', function(e){
      if (e.target.classList.contains('rm') && jogosLista.children.length > 1) {
        jogosLista.removeChild(e.target.parentNode);
      }
    });
  }
  var criarForm = document.getElementById('criar-form');
  if (criarForm) {
    criarForm.addEventListener('submit', function(e){
      e.preventDefault();
      location.hash = 'home-screen';
    });
  }
  var q = document.getElementById('q');
  if (q) {
    var box = document.getElementById('resultados');
    var ordem = document.getElementById('ordem');
    var minav = document.getElementById('minav');
    var vazio = document.getElementById('vazio');
    var aplicar = function(){
      var cards = Array.prototype.slice.call(box.children);
      var termo = q.value.trim().toLowerCase();
      var min = parseInt(minav.value, 10);
      var o = ordem.value;
      cards.sort(function(a, b){
        if (o === 'pior') { return a.dataset.n - b.dataset.n; }
        if (o === 'mais') { return b.dataset.c - a.dataset.c; }
        return b.dataset.n - a.dataset.n;
      });
      var visiveis = 0;
      for (var i = 0; i < cards.length; i++) {
        var ok = cards[i].dataset.t.indexOf(termo) !== -1 && parseInt(cards[i].dataset.c, 10) >= min;
        cards[i].style.display = ok ? '' : 'none';
        if (ok) { visiveis++; }
        box.appendChild(cards[i]);
      }
      vazio.style.display = visiveis ? 'none' : 'block';
    };
    q.addEventListener('input', aplicar);
    ordem.addEventListener('change', aplicar);
    minav.addEventListener('change', aplicar);
    aplicar();
  }