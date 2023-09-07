import { ImageEntity } from "../entities/image.entity";
import { AppDataSource } from "../config/database.config";
import { MediaDTO } from "../dtos/media.dto";
import mediaUploadService from "./mediaUpload.service";

export interface image {
  title: string;
  uploadedImage: MediaDTO;
  width: number;
  height: number;
}

class ImageService {
  constructor(private imageRepo = AppDataSource.getRepository(ImageEntity)) {}

  async create(data: image) {
    const image = new ImageEntity();
    image.title = data.title;
    if (data.uploadedImage) {
      image.uploadedImage = await mediaUploadService.uploadFile(
        data.uploadedImage,
        data.width,
        data.height
      );
    }
    return await this.imageRepo.create(image).save();
  }
}

export default new ImageService();
