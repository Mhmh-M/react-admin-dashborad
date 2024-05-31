import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashbord from './components/pages/Dashbord/Dashbord.jsx';
import Team from './components/pages/ManageTeam.jsx';
import Contacts from './components/pages/Contacts.jsx';
import Invoces from './components/pages/Invoices.jsx';
import Form from './components/pages/Form.jsx';
import Calendar from './components/pages/calender/Calendar.jsx'
import FAQ from './components/pages/Faq.jsx';
import Bar from './components/pages/bar/Bar.jsx';
import Pie from './components/pages/pieChart/Pie.jsx';
import Line from './components/pages/lineChart/Line.jsx';
import Geography from './components/pages/GeographyChart/Geography.jsx';
import NotFound from './components/NotFound.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Dashbord />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoces />} />

      <Route path='form' element={<Form />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='faq' element={<FAQ />} />

      <Route path='bar' element={<Bar />} />
      <Route path='pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='geography' element={<Geography />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
