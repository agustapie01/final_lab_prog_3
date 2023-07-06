const { db } = require("../db.js");

const mostrar = (req, res) => {
  db.query("SELECT * FROM pacientes;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

const mostrarUno = (req, res) => {
  const { id } = req.params;

  db.query(
    `SELECT * FROM pacientes WHERE id_Pacientes = ${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

const registrar = (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const dni = req.body.dni;
  const sexo = req.body.sexo;
  const domicilio = req.body.domicilio;
  const fechaNacimiento = req.body.fechaNacimiento;
  const edad = req.body.edad;
  const idHistorialClinico = req.body.idHistorialClinico;

  db.query(
    "INSERT INTO Pacientes (nombre, apellido, dni, sexo, domicilio, fechaNacimiento, edad, idHistorialClinico) values(?,?,?,?,?,?,?,?)",
    [
      nombre,
      apellido,
      dni,
      sexo,
      domicilio,
      fechaNacimiento,
      edad,
      idHistorialClinico,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

const editar = (req, res) => {
  const id = req.params.id;
  const {
    nombre,
    apellido,
    dni,
    sexo,
    domicilio,
    fechaNacimiento,
    edad,
    idHistorialClinico,
  } = req.body;
  

  db.query(
    `UPDATE pacientes SET nombre = '${nombre}',
                          apellido = '${apellido}', 
                          dni = '${dni}', 
                          sexo = '${sexo}', 
                          domicilio = '${domicilio}', 
                          fechaNacimiento = '${fechaNacimiento}', 
                          edad = '${edad}', 
                          idHistorialClinico = '${idHistorialClinico}'
                          WHERE id_Pacientes= ${id}`,

    //  [nombre, apellido, dni, sexo, domicilio, fechaNacimiento, edad, idHistorialClinico, id_Pacientes],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

const eliminar = (req, res) => {
  
  const  id_Pacientes = req.params.id;

  db.query("DELETE FROM pacientes WHERE id_Pacientes = "+ id_Pacientes, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { mostrar, mostrarUno, registrar, editar, eliminar };
