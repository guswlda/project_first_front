import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Map from './Components/Map/index';
import Planner from './Components/Planner/index';
import HowToUse from './Components/HowToUse/index';
import TravelProject from './Components/Project';
import CreatePlanner from './Components/CreatePlanner';
import Calendar from './Components/Calendar';
import CalendarPage from './Components/CalendarPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="howtouse" element={<HowToUse />} />
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="map" element={<Map />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="planner/:project_idx" element={<Planner />} />
        <Route path="travelproject" element={<TravelProject />} />
        <Route path="createplanner" element={<CreatePlanner />} />
        <Route path="calendarpage" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
