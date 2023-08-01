import { Router } from 'express';
import { uploadImage, getImage } from '../controllers/ImageController';

const router = Router();

router.post('/', uploadImage);
router.get('/:id', getImage);

export default router;
