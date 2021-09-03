const {User} = require('../models');
const jwt = require('jsonwebtoken');

exports.getUserById = async (id, req, res) =>{
   try {
        const user = await User.findOne({where:{
            [Op.or]:[
                {username:id},{
                    username:req.params.id
                }
            ]
        }});
        res.status(200).send({
            status: "OK",
            data : user,
            exist: true
        });
   } catch (error) {
       res.status(500).send({
           status : "ERROR",
           message: error,
           exist:false
       });
   }
}

getUserByEmail = async (username, req, res) =>{
    try {
         const user = await User.findOne({where:{
             [Op.or]:[
                 {username},{
                     username:req.params.username
                 }
             ]
         }});
         res.status(200).send({
             status: "OK",
             data : user,
             exist: true
         });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: error,
            exist:false
        });
    }
 }

//register
exports.register = async (req,res) =>{
    try {

        if(getUserByEmail(req.body.userName).exist){
            res.status(500).send({
                status:'ERROR',
                message: 'Registrasi Gagal'
            })
        }else{
            const user = await User.create(req.body)
            res.status(200).send({
                status:"OK",
                message: "Registrasi Berhasil"
            })
        }
    } catch (error) {
        res.status(500).send({
            status: "ERROR",
            message: "Regeistrasi Gagal"
        })
    }
}

//login
exports.login = async (req,res) =>{
    try {
        const user = await User.findOne(req.body);
        const token = jwt.sign({
            id: user.id
        }, "Talenta21");

        res.status(200).send({
            status:"OK",
            data: user
        });
    } catch (error) {
        res.status(500).send({
            status:"ERROR",
            message: "Password / Username Salah"
        })
    }
}

//edit
exports.editUser = async (req, res) =>{
    try {
         const user = await User.update(req.body);
         res.status(200).send({
             status: "OK",
             message:"Data User Berhasil Diubah",
             data : user
         });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: "Data User Gagal Diubah"
        });
    }
 }

//delete
exports.deleteUserById = async (req, res) => {
    try {
        const user = await User.destroy({where:{id}})
        res.status(200).send({
            status: "OK",
            message:"Data User Berhasil Dihapus",
            data : user
        });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: "Data User Gagal Dihapus"
        });
    }
}

//get semua user
exports.getUsers = async (req, res) =>{
    try {
         const user = await User.findAll();
         res.status(200).send({
             status: "OK",
             data : user
         });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: error
        });
    }
 }

 //get user by id
 exports.getUser = async (req, res) =>{
    try {
         const user = await User.findOne({where:{id}});
         res.status(200).send({
             status: "OK",
             data : user
         });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: error
        });
    }
 }
