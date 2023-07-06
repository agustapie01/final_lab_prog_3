const { db } = require("../db.js");

const mostrar = (req, res) => {
  db.query("SELECT * FROM dentista;", (err, result) => {
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
    `SELECT * FROM dentista WHERE id_Dentista = ${id}`,
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
    const matricula = req.body.matricula;
    const sexo = req.body.sexo;
    const turno = req.body.turno;
  
    db.query(
      "INSERT INTO dentista (nombreDent, apellidoDent, dniDent ,matricula, sexo, turno) values(?,?,?,?,?,?)",
      [
        nombre,
        apellido,
        dni,
        matricula,
        sexo,
        turno,
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
    const id_Dentista = req.params.id;
    const {
        nombre,
        apellido,
        dni,
        matricula,
        sexo,
        turno
    } = req.body;
    
  
    db.query(
      `UPDATE dentista SET  nombreDent = "${nombre}",
                            apellidoDent =" ${apellido}", 
                            dniDent = "${dni}", 
                            matricula = "${matricula}", 
                            sexo = "${sexo}", 
                            turno = "${turno}"
                            WHERE id_Dentista= ${id_Dentista}`,
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
    
    const  id_Dentista = req.params.id;
  
    db.query("DELETE FROM dentista WHERE id_Dentista = "+ id_Dentista, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };
  
  module.exports = { mostrar, mostrarUno, registrar, editar, eliminar };


 