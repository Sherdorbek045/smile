import { ToastContainer } from 'react-toastify';
import Signup from './components/Signup';
import Login from './components/Login';
import Demo from './components/Demo';
import Page404 from './components/Page404';
import Home from './components/Home';

function App() {
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const user = async () => {
    try {
      const url = "http://localhost:5050/api/users/verify";
      const res = await axios.get(url, { headers: { token: localStorage.getItem('token') } });
      setUsers(res.data.user);
      setAuth(true);
    } catch (error) {
      console.error(error);
    }
  };
  const setAuth = (bool) => {
    setIsAuth(bool)
  };

  useEffect(() => {
    user();
  }, []);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={ <Login setAuth={ setAuth }/> } />
          <Route path="/register" exact element={ <Signup/> } />
          <Route path="/demo" exact element={ <Demo/> } />
          <Route path="/" exact element={ <Home/> } />
          <Route path="*" exact element={ <Page404/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
};


export default App;