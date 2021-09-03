const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

// const { tambahModul, tampilkanModuls, editModul, hapusModul } = require("../controllers/cModul");
// const { tambahModulLengkap } = require("../controllers/cUrutanTes");
// const {emailSend} =require('../controllers/sendEmail');
const { register, login, editUser, deleteUserById, getUsers,getUser } = require("../controllers/cUser");
const { auth } = require("../midleware/auth");
const { tambahClient, editClient, deleteClientById,getClients,getClient } = require("../controllers/cKlien");

//user

router.post('/register', register);
router.post('/login', auth, login);
router.patch('/user/:id', editUser);
router.delete('/user/:id', deleteUserById);
router.get('/user', getUsers);
router.get('/user/:id', getUser);


//client
router.post('/client', tambahClient);
router.patch('/client/:id', editClient);
router.delete('/client/:id', deleteClientById);
router.get('/client', getClients);
router.get('/client/:id', getClient);

// //tes
// router.post('/tes', tambahTes);
// router.get('/tes', tampilkanTes);
// router.patch('/tes/:id', editTes);
// router.delete('/tes/:id', hapusTes);

// //modul
// router.post('/modul', tambahModul);
// router.get('/moduls', tampilkanModuls);
// router.get('/modul/:id', tampilkanModuls);
// router.patch('/modul/:id', editModul);
// router.delete('/modul/:id', hapusModul);

// //urutan tes
// router.post('/tambah-modul', tambahModulLengkap);

// //kirim email
// router.post('/send', emailSend);

module.exports = router;