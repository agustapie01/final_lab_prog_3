const { db } = require("../db.js");

const mostrar = (req, res) => {
  db.query("SELECT * FROM turnos", (err, result) => {
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
    `SELECT * FROM turnos WHERE id_Turnos = ${id}`,
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
    const {idPaciente, fechaTurno, numOrden, idDentista} = req.body

  db.query(
    "INSERT INTO turnos ( fechaTurno, idPaciente, numOrden, idDentista) values(?,?,?,?)",
    [
      fechaTurno,
      idPaciente,
      numOrden,
      idDentista
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
    idPaciente,
    fechaTurno,
    numOrden,
    idDentista
  } = req.body;
  

  db.query(
    `UPDATE turnos SET idPaciente = ${idPaciente},
                          fechaTurno = "${fechaTurno}", 
                          numOrden = ${numOrden},
                          idDentista = ${idDentista}
                          WHERE id_Turnos= ${id}`,


    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

const eliminar = (require, response) => {
  
  const id = require.params.id;

  db.query("DELETE FROM turnos WHERE id_Turnos = "+ id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.send(result);
    }
  });
};


module.exports = { mostrar, mostrarUno, registrar, editar, eliminar };