const {Project} = require('../models')

exports.tambahProject = async (req, res) => {
    try {
        const project = await Project.create(re.body)
        res.status(200).send({
            status : 'OK',
            message : 'Project Berhasil Ditambahkan'
        })
    } catch (error) {
        res.status(500).send({
            status : 'ERROR',
            message : 'Project Gagal Ditambahkan'
        })
    }
}

exports.cariProject = async (req,res) => {
    try {
        const project = await Project.findAll({
            where:{
                [Op.or] : {
                    nama:req.body.nama
                }
            }
        })

        res.status(200).send({
            status : 'OK',
            data : project
        })
    } catch (error) {
        res.status(500).send({
            status : 'ERROR',
            message : 'Project yang anda cari tidak dapat ditemukan'
        })
    }
}

exports.editProject = async (req, res) => {
    try {
        const project = await Project.update(req.body)
        res.status(200).send({
            status : 'OK',
            message : 'Data Project Berhasil Diubah'
        })
    } catch (error) {
        res.status(500).send({
            status : 'ERROR',
            message : 'Data Project Gagal Diubah'
        })
    }
}

//untuk kolom jumlah peserta controller ada di cPeserta pada fungsi jumlahPesertaSelesai