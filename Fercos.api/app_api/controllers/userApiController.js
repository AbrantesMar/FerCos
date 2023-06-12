var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJsonResponse = function(res, status, content){
  res.status(status);
  res.json(content);
}

module.exports.userListByDistance = async function(req, res) {
    try {
      const users = await User.find({ state: "Ativo" });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};
module.exports.userCreate = async function(req, res) {
  try {
    var user = new User(req.body);
    user.insertDate = Date.now()
    user.changeDate = Date.now()
    user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário' });
  }
};
module.exports.findById = async function(req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.atualizarUser = async function(req, res) {
  try {
    const { id } = req.params;
    req.body.changeDate = Date.now()
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar usuário' });
  }
};
module.exports.deletarUser = async function(req, res) {
  try {
    const { id } = req.params;
    req.body.changeDate = Date.now()
    req.body.state = "inativo";
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar usuário' });
  }
};