import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./public/temp"),
  filename: (req, file, cb) => {
    // const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1E9)
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });
