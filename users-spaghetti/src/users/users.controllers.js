const Users = require('../models/users.models')

const findAllUsers = async () => {
  const data = await Users.findAll()
  return data
}

const findUserById = async (id) => {
  const data = await Users.findOne({
      where:{
        id : id
      }
  })
  return data
}

const createUser = async (obj) => {
    const newUser = await Users.create({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    })
    return newUser
}

const updateUser =  async (id,data) => {
    const data = await Users.update(data, {
      where:{
        id: id
      }
    })
    return data
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
      where: {
        id:id
      }
    })
    return data
}

module.exports={
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser
}
