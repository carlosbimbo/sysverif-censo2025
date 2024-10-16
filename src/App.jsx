import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import Login from "./pages/Login";
import RequireAuth from "./pages/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import Missing from "./pages/Missing";

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

const App = () => {
  return (

      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      <Route path="/" element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />} >

      <Route path="/" element={<RootLayout />} >
     
        <Route path="/allapp" element={<AllApps />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/stroage" element={<Stroage />} />                
        <Route path="/settings" element={<Settings />} />
        <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} />

         {/* catch all */}
         <Route path="*" element={<Missing />} />

        </Route>

        </Route>

      </Routes>

  );
};

export default App;
