const { db } = require("../db.js");

const mostrar = (req, res) => {
  db.query("SELECT * FROM historialclinico;", (err, result) => {
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
    `SELECT * FROM historialclinico WHERE id_HistorialClinico = ${id}`,
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
    const fecha = req.body.fecha;
    const diagnostico = req.body.diagnostico;
    const observaciones = req.body.observaciones;


    db.query(
      "INSERT INTO historialclinico (fecha, diagnostico, observaciones) values(?,?,?)",
      [
       fecha,
       diagnostico,
       observaciones
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
    const id_HistorialClinico = req.params.id;
    const {
        fecha,
       diagnostico,
       observaciones
    } = req.body;


    db.query(
      `UPDATE historialclinico SET fecha = "${fecha}",
                           diagnostico =" ${diagnostico}", 
                            observaciones = "${observaciones}"
                            WHERE id_HistorialClinico= ${id_HistorialClinico}`,

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

    const  id_HistorialClinico = req.params.id;

    db.query("DELETE FROM historialclinico WHERE id_HistorialClinico = "+ id_HistorialClinico, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };

  const historialPacientes = (req,res) =>{

    db.query("SELECT * FROM pacientes p INNER JOIN historialclinico h ON p.idHistorialClinico = h.id_HistorialClinico;", (err,result) =>{
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });

  };

  module.exports = { mostrar, mostrarUno, registrar, editar, eliminar, historialPacientes };