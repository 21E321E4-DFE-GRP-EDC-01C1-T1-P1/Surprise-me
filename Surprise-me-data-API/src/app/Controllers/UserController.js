const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const yup = require("yup");

class UserController {
  show(req, res) {
    var users = ["Kaio", "Larissa", "Danver"];
    return res.status(200).json({
      error: false,
      users,
    });
  }

  async store(req, res) {
    // let schema = yup.object().shape({
    //   name: yup.string().required(),
    //   email: yup.string().email().required(),
    //   password: yup.string().required()
    // });

    // if(!(await schema.isValid(req.body))){
    //   return res.status(400).json({
    //     error: true,
    //     message: "Dados inválidos"
    //   })
    // }
    let userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(400).json({
        error: true,
        message: "Este usuário já existe!",
      });
    }
    const { nome, email, senha, posicao,status,endereco} = req.body;
    const data = {  nome, email, senha, posicao,status,endereco };
    data.senha = await bcrypt.hash(data.senha, 8);
    await User.create(data, (err) => {
      if (err)
        return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir usuário no MongoDB",
          description: err,
        });

      return res.status(200).json({
        error: false,
        message: "Usuário Cadastrado com sucesso",
      });
    });
  }
}

module.exports = new UserController();