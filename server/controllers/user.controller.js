const User = require("../models/user.model");

const findAllUsers = async (req, res) => {

  try {

    const allDaUsers = await User.find()
    res.json({ users: allDaUsers })


  } catch (err) {
    res.json({ message: "Something went wrong", error: err })
  }

};

const findOneSingleUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(oneSingleUser => res.json({ user: oneSingleUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedUser => res.json({ user: updatedUser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

const deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


const usuarioAlAzar = async (req, res) => {

  try {

    const respuesta = await User.aggregate([{ '$sample': { 'size': 1 } }])

    res.json({ user: respuesta })


  } catch (err) {
    res.json({ message: "Something went wrong", error: err })
  }

}

module.exports = {
  findAllUsers,
  findOneSingleUser,
  createNewUser,
  updateExistingUser,
  deleteAnExistingUser,
  usuarioAlAzar
}