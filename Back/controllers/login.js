const { db } = require("../db.js");
const axios = require('axios')

const mostrar = (req, res) => {
  db.query("SELECT * FROM login;", (err, result) => {
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
    `SELECT * FROM login WHERE id_User = ${id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};

// const login = (req, res) => {
//   const usuario = req.body.usuario;
//   const contraseña = req.body.contraseña;
//   db.query("SELECT * FROM login WHERE usuario = ? AND contraseña = ?",[usuario, contraseña],
//   (err,result)=>{
     
//       if(err){
//       res.status(500).send(err)
      
//   }else{
     
//       if(result.length>0) {
//           res.status(200).send(result[0])
//       }
//       else{
          
//           res.status(400).send('Usuario y/o contraseña incorrecta')
//       }
//   }
//   }
//   );
// }

const login = async (req,res) =>{
  //console.log(req.body);
  const usuario = req.body.usuario
  const contraseña = req.body.contraseña 
  try {
    const response = await axios.get('http://localhost:8000/login');
    const usuarios = response.data;

    const verifiedData = usuarios.some(user => user.usuario === usuario && user.contraseña === contraseña);
    
    if (verifiedData) {
      let nDatos = {usuario,contraseña}
      res.status(200).json(nDatos)
    }else {
      res.status(400).send("credenciales incorrectas")
    }
  } catch (error) {
    console.error(error);
  }
}

const registrar = (req, res) => {

  const usuario = req.body.usuario;
  const contraseña = req.body.contraseña;

  db.query(
    "INSERT INTO login (usuario, contraseña) values(?,?)",
    [
      usuario,
      contraseña
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
  const id_User = req.params.id;
  const {
    usuario,
    contraseña,
  } = req.body;

  db.query(
    `UPDATE login SET usuario = '${usuario}',
                          contraseña = '${contraseña}'--
                          WHERE id_User = ${id_User}`,
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
  
  const  id_User = req.params.id;

  db.query("DELETE FROM login WHERE id_User = "+ id_User, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = { mostrar, mostrarUno, registrar, editar, eliminar, login };
