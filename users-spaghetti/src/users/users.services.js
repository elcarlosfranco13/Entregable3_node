const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = usersControllers.findAllUsers()
    .then((data)=>{
        res.status(200).json(data)
    }) 
    .catch((err)=>{
        res.status(400).json({message: err.message})
    })
}

const getUserById = (req, res) => {
    const id = req.params.id
    usersControllers.findUserById(id)
    .then((data)=>{
      if(data){
        res.status(200).json(data)
      }else{
        res.status(400).json({message: err.message})
      }
    })
    .catch((err)=>{
      res.status(400).json({message: err.message})
    })
    
}

const postUser = (req, res ) => {
    const {first_name, last_name,email, password, birthday} = req.body
    
    usersControllers.createUser({first_name, last_name,email, password, birthday})
      .then((data)=>{
        res.status(201).json(data)
      })
      .catch((err)=>{
        res.status(400).json({message:err.message})
      })
    
}

const patchUser = (req,res) => {
    const id= req.params.id 
    const {first_name, last_name,email, password, birthday} = req.body

    usersControllers.updateUser(id, {first_name, last_name,email, password, birthday} )
    .then((data)=>{
      if(data){
          res.status(200).json ({message:'User Modified Successfully'})
      }else{
        res.status(400).json({message:'Invalid ID'})
      }
    })
    .catch((err)=>{
      res.status(400).json({message:err.message})
    })
}

const deleteUser = (req,res) => {
    const id= req.params.id
    usersControllers.deleteUser(id)
    .then((data)=>{
      if(data){
        res.status(204).json({message:'Deleted Successfully'})
      }else{
        res.status(400).json({message:'Invalid ID'})
      }
    })
    .catch((err)=>{
      res.status(400).json({message: err.message})
    })

}


module.exports={
  getAllUsers,
  getUserById,
  patchUser,
  postUser,
  deleteUser
}