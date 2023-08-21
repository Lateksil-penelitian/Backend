const multer = require("multer");
const path = require("path");
const { v4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/payment/kwitansi/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = v4(); // Generate UUID
    const ext = path.extname(file.originalname);

    const filename = `kwitansi-${uniqueSuffix}${ext}`;
    cb(null, filename);
  },
});

const uploadKwitansiPembayaran = multer({ storage: storage }).single(
  "image_kwitansi"
);

module.exports = uploadKwitansiPembayaran;
