import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Page404 from '../Page404';
import Test from './Test';
import New from './New';


const Demo = () => {
  return (
    <div className="container-lg">
      <BrowserRouter>
          <Routes>
              <Route path="/test" exact element={ <Test/> } />
              <Route path="/new" exact element={ <New/> } />
              <Route path="*" exact element={ <Page404/> } />
          </Routes>
        </BrowserRouter>
      </div>
  )
};

export default Demo;
