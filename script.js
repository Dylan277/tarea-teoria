const archivos = [
  'dato1.json',
  'dato2.json',
  'dato3.json'
];

const lista = document.getElementById('lista');

archivos.forEach(archivo => {
  fetch(archivo)
    .then(res => res.json())
    .then(data => {
      const li = document.createElement('li');
      li.textContent = data.nombre;
      lista.appendChild(li);
    })
    .catch(error => {
      console.error(`Error al cargar ${archivo}:`, error);
    });
});
