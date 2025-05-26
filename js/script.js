function mostrarTela(id) {
  const telas = ['tela-inicial', 'login', 'criar-conta', 'perfil', 'home'];
  telas.forEach(tela => {
    const el = document.getElementById(tela);
    if (el) el.style.display = (tela === id) ? 'flex' : 'none';
  });
}
