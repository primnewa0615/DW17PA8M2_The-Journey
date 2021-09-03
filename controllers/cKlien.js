const {Client} =require('../models');

//tambah klien
exports.tambahClient = async (req,res) =>{
    try {
            const client = await Client.create(req.body)
            res.status(200).send({
                status:"OK",
                message: "Tambah Client Berhasil",
                data: client
            })
        
    } catch (error) {
        res.status(500).send({
            status:'ERROR',
                message: "Tambah Client Gagal",
        })
    }
}

//edit klien
exports.editClient = async (req, res) =>{
    try {
         const client = await Client.update(req.body);
         res.status(200).send({
             status: "OK",
             message:"Data Client Berhasil Diubah",
             data : client
         });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: "Data Client Gagal Diubah"
        });
    }
 }

//hapus klien

exports.deleteClientById = async (req, res) => {
    try {
        const client = await Client.destroy({where:{id}})
        res.status(200).send({
            status: "OK",
            message:"Data Client Berhasil Dihapus",
            data : client
        });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: "Data Client Gagal Dihapus"
        });
    }
}

//get semua Client
exports.getClients = async (req, res) =>{
    try {
         const client = await Client.findAll();
         res.status(200).send({
             status: "OK",
             data : client
         });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: error
        });
    }
 }

 //get Client by id
 exports.getClient = async (req, res) =>{
    try {
         const client = await Client.findOne({where:{id}});
         res.status(200).send({
             status: "OK",
             data : client
         });
    } catch (error) {
        res.status(500).send({
            status : "ERROR",
            message: error
        });
    }
 }


