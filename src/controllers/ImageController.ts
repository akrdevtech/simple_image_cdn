import { Request, Response } from 'express';
import { Image } from '../models/Image';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { path: imagePath, filename } = req.file;
    const { filePath } = req.body;

    // Move the uploaded image to the specified path on the server
    const newPath = path.join(__dirname, '../../images', filePath, filename);
    fs.renameSync(imagePath, newPath);

    // Save the image record in MongoDB
    const image = new Image({ filename, path: newPath });
    await image.save();

    // Send the image ID in the response
    res.json({ id: image._id });
  } catch (error) {
    console.error('Error saving image:', error.message);
    res.status(500).json({ error: 'Error saving image' });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Fetch the image record from MongoDB using the provided ID
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }

    // Send the image file as a response
    res.sendFile(image.path);
  } catch (error) {
    console.error('Error fetching image:', error.message);
    res.status(500).json({ error: 'Error fetching image' });
  }
};
