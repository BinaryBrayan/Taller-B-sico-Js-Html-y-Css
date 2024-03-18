document.getElementById('alumnoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    identificacion = document.getElementById('identificacion').value;
    nombre = document.getElementById('nombre').value;
    codigo = document.getElementById('codigo').value;
    fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    proyectoCurricular = document.getElementById('proyectoCurricular').value;

    yearActual = new Date().getFullYear();
    añoIngreso = parseInt(codigo.substring(0, 4));
    semestreIngreso = parseInt(codigo.charAt(4));
    semestresCursados = ((yearActual - añoIngreso) * 2) + (semestreIngreso - 1);
    edad = yearActual - fechaNacimiento.getFullYear();

    resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        Año de ingreso: ${añoIngreso}<br>
        Semestre de ingreso: ${semestreIngreso}<br>
        Semestres cursados: ${semestresCursados}<br>
        Edad: ${edad} años<br>
        Identificación: ${identificacion}<br>
        Nombre: ${nombre}<br>
        Código: ${codigo}<br>
        Proyecto Curricular: ${proyectoCurricular}<br>
    `;
});