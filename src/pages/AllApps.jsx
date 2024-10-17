import UploadFiles from "../components/upload-files.component";
//import { useContext } from 'react';
//import AuthContext from '../context/AuthProvider';
const AllApps = () => {
  //return <h1>All Apps</h1>;
  //const { auth } = useContext(AuthContext);
  return <div className="container" style={{ width: "600px" }}>
  <div className="my-2">  
  <p class="font-bold ...">carlosbars8@gmail.com</p>
  <p class="font-bold ...">Subida de Archivos</p>
  </div>

  <UploadFiles />
</div>

};

export default AllApps;
