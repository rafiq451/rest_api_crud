// IMPORT data student
// const data = require('../data/Student');
// import Model Students

const Student = require('../model/Students');

class StudentController {
  async index(req, res) {
    const student = await Student.findAndCountAll();

    if (student.count > 0) {
      const data = {
        message: 'menampilkan seluruh data ',
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Student not Found / tidak ada data ',
      };
      res.status(404).json(data);
    }
  }

  //* menambahkan data
  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;

    if (!nama || !nim || !email || !jurusan) {
      //* respon jika salah satu data tidak dikirim
      const data = {
        message: 'semua data harus dikirim',
      };
      res.status(422).json(data);
    } else {
      const student = await Student.create(req.body);

      const data = {
        message: `Menambah data Student`,
        // jumlah: student,
        // data: student,
        data: student,
      };
      res.status(201).json(data);
    }
  }

  //* mengupdate data
  async update(req, res) {
    const student = await Student.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (student) {
      const id = req.params.id;
      const { nama, nim, email, jurusan } = req.body;
      const studen = await Student.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const data = {
        message: `Mengupdate data Student`,
        jumlah: studen,
        data: {
          id: id,
          nama: nama,
          nim: nim,
          email: email,
          jurusan: jurusan,
        },
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: 'Student not found',
      };
      res.status(404).json(data);
    }
  }

  //* menghapus data
  async destroy(req, res) {
    const id = req.params.id;
    const student = await Student.destroy({
      where: {
        id: req.params.id,
      },
      force: true,
    });
    if (student) {
      const data = {
        message: `Berhasil Menghapus data dengan id : ${id}`,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not Found`,
      };

      res.status(404).json(data);
    }
  }

  //* melihat data sesuai id
  async show(req, res) {
    const id = req.params.id;
    const student = await Student.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (student) {
      const data = {
        message: `data dengan id ${id}`,
        data: student,
        // data: Student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not Found`,
      };
      res.status(404).json(data);
    }
  }
}

const object = new StudentController();

module.exports = object;
