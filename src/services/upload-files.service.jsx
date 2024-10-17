import http from "./http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    //formData.append("file", file);
    formData.append("images", file);
    formData.append("modoenvio", "web");
    
    return http.post("https://www.macrocorpsystem.com/pruebas/api/fsupmultiple", formData, {

    //return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    //return http.get("/files");
    return http.get("https://www.macrocorpsystem.com/pruebas/api/files");
    
  }
}

export default new UploadFilesService();
