const {Modul} = require("../models");

//tambah modul
exports.tambahModul = async (req,res) => {
    try {
        const namaModul = await Modul.findOne({
            where: {
                nama:req.body.nama
            }
        });

        if(namaModul){
            return res.status(500).send({
                status:"Error",
                message: "Gagal menambahkan modul, nama modul sudah digunakan"
            })
        }

        const modul = await Modul.create({nama:req.body.nama});
        res.status(200).send({
            status: "Ok",
            message: "Modul Berhasil Dibuat"
        })   
        
        
    } catch (error) {
        res.status(500).send(console.log(error));
    }
}

//tampilkan modul
exports.tampilkanModuls = async (req,res) => {
    try {
        const modul = await Modul.findAll({
            include : {
                module: Tes,
                as : "tes",
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }
        });
        return modul.id;
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: "Modul tidak dapat Ditampilkan"
        })
    }
}

exports.tampilkanModul = async (req,res) => {
    try {
        const modul = await Modul.findOne({
            include : {
                module: Tes,
                as : "tes",
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }
        },{where:{id:req.params.id}});
        res.status(200).send({
            status: "Ok",
            data: modul
        })
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: "Modul tidak dapat Ditampilkan"
        })
    }
}


//edit modul
exports.editModul = async (req,res) => {
    try {
        const modul = await Modul.update(req.body, {
            where: {id:req.params.id}
        });
        res.status(200).send({
            status: "Ok",
            message: "Modul Berhasil Diupdate"
        })
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: "Modul Gagal Diupdate"
        })
    }
}


//hapus modul
exports.hapusModul = async (req,res) => {
    try {
        const modul = await Modul.destroy();
        res.status(200).send({
            status: "Ok",
            message: "Modul Berhasil Dihapus"
        })
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: "Modul Gagal Dihapus"
        })
    }
}