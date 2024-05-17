import cloudinary from "@/config/cloudinary.config";

export const uploadImages = async (images: { src: string; name: string }[]) => {
  try {
    const folder = "ec312/woo-api";
    const imageUrls: { src: string; name: string }[] = [];

    for (const image of images) {
      const fileName = image.name.replace(/\.(jpg|jpeg|png|gif|ifif)$/i, "");

      const url = await cloudinary.uploader.upload(image.src, {
        folder: folder,
        public_id: `${Date.now()}_${fileName}`,
        resource_type: "auto",
      });
      imageUrls.push({ src: url.secure_url, name: fileName });
    }
    return imageUrls;
  } catch (error) {
    console.error(error);
  }
};
