const { db } = require("../db.js");

const innerjoin = (req, res) => {
    db.query("SELECT * FROM pacientes p INNER JOIN historialclinico h ON p.idHistorialClinico = h.id_HistorialClinico; ;",
     (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };

  const innerjoin2 = (req, res) => {
    db.query("SELECT * FROM pacientes p INNER JOIN turnos t ON p.id_Pacientes = t.idPaciente INNER JOIN dentista d ON t.idDentista = d.id_Dentista;",
     (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  };

  module.exports = { innerjoin, innerjoin2 };
  //  registrar, editar, eliminar, historialPacientes