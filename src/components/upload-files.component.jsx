import React, { Component } from "react";
import Dropzone from "react-dropzone";

import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.onDrop = this.onDrop.bind(this);

    this.state = {
      selectedFiles: undefined,
      progressInfos: [],
      message: [],
      fileInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  upload(idx, file) {
    let _progressInfos = [...this.state.progressInfos];

    UploadService.upload(file, (event) => {
      _progressInfos[idx].percentage = Math.round(
        (100 * event.loaded) / event.total
      );
      this.setState({
        _progressInfos,
      });
    })
      .then((response) => {
        this.setState((prev) => {
          let nextMessage = [
            ...prev.message,
            //"Uploaded the file successfully: " + file.name,
            "Archivo cargado Correctamente: " + file.name,
          ];
          return {
            message: nextMessage,
          };
        });

        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        _progressInfos[idx].percentage = 0;
        this.setState((prev) => {
          let nextMessage = [
            ...prev.message,
            "Could not upload the file: " + file.name,
          ];
          return {
            progressInfos: _progressInfos,
            message: nextMessage,
          };
        });
      });
  }

  uploadFiles() {
    const selectedFiles = this.state.selectedFiles;

    let _progressInfos = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      _progressInfos.push({ percentage: 0, fileName: selectedFiles[i].name });
    }

    this.setState(
      {
        progressInfos: _progressInfos,
        message: [],
      },
      () => {
        for (let i = 0; i < selectedFiles.length; i++) {
          this.upload(i, selectedFiles[i]);
        }
      }
    );
  }

  onDrop(files) {
    if (files.length > 0) {
      this.setState({ selectedFiles: files });
    }
  }

  render() {
    const { selectedFiles, progressInfos, message, fileInfos } = this.state;

    return (
      <div>
        {progressInfos &&
          progressInfos.map((progressInfo, index) => (
            <div className="mb-2" key={index}>
              <span>{progressInfo.fileName}</span>
              <div className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                <div
                  className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center"
                  role="progressbar"
                  aria-valuenow={progressInfo.percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: progressInfo.percentage + "%" }}             

                >
                  {progressInfo.percentage}%
                </div>
              </div>
            </div>
          ))}

        <div className="my-3">
          <Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  {selectedFiles &&
                  Array.isArray(selectedFiles) &&
                  selectedFiles.length ? (
                    <div className="selected-file">
                      {selectedFiles.length > 3
                        ? `${selectedFiles.length} Archivos`
                        : selectedFiles.map((file) => file.name).join(", ")}
                    </div>
                  ) : (
                    //`Drag and drop files here, or click to select files`
                    `Arrastrar y soltar aqui, o click para quitar los archivos`
                  )}
                </div>
                <aside className="selected-file-wrapper">
                  <button
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    disabled={!selectedFiles}
                    onClick={this.uploadFiles}
                  >
                    
                    Upload
                  </button>
                </aside>
              </section>
            )}
          </Dropzone>
        </div>

        {message.length > 0 && (
          <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">

          <div class="flex">
              <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
              <div>
                <p class="font-bold">Archivos Procesados</p>              

                <ul className="pl-5 space-y-3 text-gray-600 list-disc marker:text-blue-600">
              {message.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>

              </div>
            </div>

          
          </div>
        )}

        {fileInfos.length > 0 && (
           <div class="container mx-auto py-5 flex justify-center h-screen max-h-96">
           <div class="w-1/1 pl-1  h-full flex flex-col">
                     <div class="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
                     Lista de Archivos
                     </div>                    
                     <div class="w-full h-full overflow-auto shadow bg-white" id="journal-scroll">

                     <table class="w-full">

                         <tbody class="">  
              {fileInfos &&
                fileInfos.map((file, index) => (
                  /*<li className="list-group-item" key={index}>
                    <a href={file.url}>{file.name}</a>
                  </li>
                  */
                                                              

                                    <tr class="relative transform scale-100
                                                text-xs py-1 border-b-2 border-blue-100 cursor-default

                                        ">                             

                                        <td class="px-2 py-2 whitespace-no-wrap">
                                            <div class="leading-5 text-gray-500 font-medium">{file.name}</div>                                    
                                        </td>

                                    </tr>                                    
                                  

                ))}
           </tbody>
                            </table>
                            </div>
                            
                          </div>
                    </div>

        )}


 

      </div>
    );
  }
}
