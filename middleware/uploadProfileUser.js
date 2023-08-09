import multer from "multer";
import path from "path";
import { v4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profile/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = v4(); // Generate UUID
    const ext = path.extname(file.originalname);

    const filename = `profile-${uniqueSuffix}${ext}`;
    cb(null, filename);
  },
});

const uploadProfleUser = multer({ storage: storage }).single("image_profile");

export default uploadProfleUser;
