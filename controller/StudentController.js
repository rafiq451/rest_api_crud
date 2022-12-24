// IMPORT data student
// const data = require('../data/Student');
// import Model Students

const Student = require('../model/Students');

class StudentController {
  async index(req, res) {
    const student = await Student.all();
    const data = {
      message: 'menampilkan seluruh data ',
      data: student,
    };
    res.json(data);
  }

  async store(req, res) {
    const nama = req.body.nama;
    const nim = req.body.nim;
    const email = req.body.email;
    const jurusan = req.body.jurusan;
    const student = await Student.create(nama, nim, email, jurusan);
    // const studentall = await Student.all();
    // const student = Student.push(nama);

    const data = {
      message: `Menambah data Student dengan Nama : ${nama}`,
      // jumlah: student,
      // data: student,
      data: student,
    };
    res.json(data);
  }
  async update(req, res) {
    const id = req.params.id;
    const newnama = req.body.nama;
    const newnim = req.body.nim;
    const newemail = req.body.email;
    const newjurusan = req.body.jurusan;
    const student = await Student.update(id, newnama, newnim, newemail, newjurusan);

    // const student = Student.push(nama);
    const data = {
      message: `Mengupdate data Student`,
      ubah: student,
      data: Student,
    };
    res.json(data);
  }
  async destroy(req, res) {
    const id = req.params.id;
    const student = await Student.delete(id);
    const data = {
      message: `Berhasil Menghapus data`,
      hapus: student,
      // data: Student,
    };
    res.json(data);
  }
  async show(req, res) {
    const id = req.params.id;
    const student = await Student.find(id);
    const data = {
      message: `Berhasil Menghapus data`,
      data: student,
      // data: Student,
    };
    res.json(data);
  }
}

const object = new StudentController();

module.exports = object;
