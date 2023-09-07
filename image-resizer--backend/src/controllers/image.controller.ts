import imageService, { image } from "../services/image.service";
import { Body, Controller, Post, Route, Tags } from "tsoa";

@Tags("Image")
@Route("/image")
export class IMageController extends Controller {
  @Post("/")
  async create(@Body() data: image) {
    const image = await imageService.create(data);
    return {
      success: true,
      message: "image created",
    };
  }
}
