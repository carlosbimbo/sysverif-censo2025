import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import axios from '../api/axios';
//const LOGIN_URL = '/auth';
const LOGIN_URL = '/';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            /*const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );*/

            //return this.http.get(`${apiUrl}/${credentials.login}/${credentials.password}`,  reqestuOptions);

            const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJub21icmUiOiJDYXJsb3MgYmFycmllbnRvcyIsImVtYWlsIjoiY2FybG9zYmFyczhAZ21haWwuY29tIn0sImlhdCI6MTY2NjU3NzQ0NX0.IU5I4jE-7VWZ55jHAPVsqlaWYzndqJQYdc1CSGEzWwA' };
            const response = await axios.get(`${user}/${pwd}`,
            { headers }
            );

            //console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            console.log(accessToken);
            const roles = response?.data?.roles;            
            console.log(roles);
            console.log('holaaa ceroo');
            console.log(`${user}/${pwd}`);
            setAuth({ user, pwd, roles, accessToken });
            console.log('holaaa unoo ' + from);
            setUser('');
            setPwd('');
            
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                       
            <form onSubmit={handleSubmit}>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
      
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Bienvenido al Sistema</span>
          <span className="font-light text-gray-400 mb-8">
            Sistema de Verificacion Web - Captura de Datos
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Usuario</span>
            
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>          

                <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Recordar en los 30 dias</span>
            </div>
            <span className="font-bold text-md">Olvide mi Clave</span>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src="../assets/img/google.svg" alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            
            <span className="font-bold text-black">Inei@2023</span>
          </div>
        </div>
      
        <div className="relative">
          <img
            src="../assets/img/image.jpg"
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
         
          <div
            className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
          >
            <span className="text-white text-xl"
              >Sistema de Verificacion Web<br />Plataforma Digital <br />Para la Transferencia de Datos."
            </span>
          </div>
        </div>
      </div>
    </div>
    </form>

         
        </section>

    )
}

export default Login