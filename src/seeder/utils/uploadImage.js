export const uploadImage = async (req, res, next) => {
  try {
    // files for multiple
    const formData = req.file;
    const title = req.body.title;
    if (!title) {
      await cloudinary.uploader.destroy(formData.filename);
      return;
    }
    return formData;
  } catch (error) {
    next(error);
  }
};
