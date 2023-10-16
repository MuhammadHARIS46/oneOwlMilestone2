import React, { createContext, useEffect, useState } from 'react'
import './styles/App.css'
import './styles/responsive.css'
import { Sidebar } from './Website/components/sidebar';
// import 'react-toastify/dist/ReactToastify.css';
// import { ExternalRoutes } from './routing/routes';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import { Dashboard } from './Website/pages/Dashboard/dashboard'
import { Layout } from './Website/layout'
import Communication from './Website/pages/Communication/communication';
import Prefernce from './Website/pages/preference/preference';
import Billing from './Website/pages/Billing/billing';
import { Notification } from './Website/pages/Notification/notification';
import { Settings } from './Website/pages/Settings/settings';
import { Profile } from './Website/pages/profile/profile';
import { Faq } from './Website/pages/faq/faq';
import { Privacy } from './Website/pages/Privacy/privacy';
import { DashboardAgent } from './Website/pages/DashbordAgent/dashboardAgent';
import { Service } from './Website/pages/Service/service';
import { Performance } from './Website/pages/Performance/performance';
import { Compliance } from './Website/pages/compliance/compliance';
import { Workflow } from './Website/pages/workflow/workflow';

import { UserNameContext, ThemeContext } from './services/contextFile';
import { DarkMode } from './services/darkMode';
import ReactGA from "react-ga4";
import { DashboardAdmin } from './Website/pages/AdminDashboard/dashboardAdmin';
import { AdminCompliance } from './Website/pages/adminCompliance/adminCompliance';
import { UserManagement } from './Website/pages/userManagement/userManagement';
import { Channel } from './Website/pages/channels/channel';
import Login from './Website/pages/Auth/Login';
import Signup from './Website/pages/Auth/Signup';

const TRACKING_ID = "G-3L133H7SGZ"
ReactGA.initialize(TRACKING_ID);

function App() {


  const { getDarkMode } = DarkMode();
  const [userState, setUserState] = useState('');
  const [userStateLast, setUserStateLast] = useState('');
  const getUserNameVal = (data) => {
    setUserState(data)
  }
  const getUserLastVal = (data) => {
    setUserStateLast(data)
  }

  const [isDarkMode, setIsDarkMode] = useState(false);
  const getThemeColor = (data) => {
    setIsDarkMode(data)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.backgroundColor = '#222222';
    }
    return () => {
      document.documentElement.style.backgroundColor = '';
    };
  }, [isDarkMode]);

  useEffect(() => {
    setIsDarkMode(getDarkMode())
  }, [])


  const location = useLocation();
  useEffect(() => {
    const locations = location.pathname + location.search
    ReactGA.send({ hitType: "pageview", page: locations, title: locations });
  }, [location.pathname, location.search]);

  const trackEvent = (category, action, label) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };


  return (
    <React.Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} onEnter={() => trackEvent('pageview', 'Dashboard View', 'Dashboard')} />
          <Route path={ROUTES.COMMUNICATION} element={<Communication />} onEnter={() => trackEvent('pageview', 'Communication View', 'Communication')} />
          <Route path={ROUTES.FAQ} element={<Faq />} onEnter={() => trackEvent('pageview', 'FAQ View', 'FAQ')} />
          <Route path={ROUTES.PREFERENCE} element={<Prefernce />} onEnter={() => trackEvent('pageview', 'Preference View', 'Preference')} />
          <Route path={ROUTES.BILLING} element={<Billing />} onEnter={() => trackEvent('pageview', 'Billing View', 'Billing')} />
          <Route path={ROUTES.NOTIFICATION} element={<Notification />} onEnter={() => trackEvent('pageview', 'pageview', 'Notification')} />
          <Route path={ROUTES.SETTINGS} element={<Settings getThemeColor={getThemeColor} />} onEnter={() => trackEvent('pageview', 'Settings View', 'Settings')} />
          <Route path={ROUTES.PROFILE} element={<Profile getUserNameVal={getUserNameVal} getUserLastVal={getUserLastVal} />} onEnter={() => trackEvent('pageview', 'Profile View', 'Profile')} />

          <Route path={ROUTES.DASHBOARD_AGENT} element={<DashboardAgent />} onEnter={() => trackEvent('pageview', 'DashboardAgent View', 'DashboardAgent')} />
          <Route path={ROUTES.SERVICE} element={<Service />} onEnter={() => trackEvent('pageview', 'Service View', 'Service')} />
          <Route path={ROUTES.PERFORMANCE} element={<Performance />} onEnter={() => trackEvent('pageview', 'Performance View', 'Performance')} />
          <Route path={ROUTES.COMPLIANCE} element={<Compliance />} onEnter={() => trackEvent('pageview', 'Compliance View', 'Compliance')} />
          <Route path={ROUTES.WORKFLOW} element={<Workflow />} onEnter={() => trackEvent('pageview', 'Workflow View', 'Workflow')} />


          <Route path={ROUTES.DASHBOARD_ADMIN} element={<DashboardAdmin />} onEnter={() => trackEvent('pageview', 'DashboardAdmin View', 'dashboardAdmin')} />
          <Route path={ROUTES.ADMINCOMPLIANCE} element={<AdminCompliance />} onEnter={() => trackEvent('pageview', 'AdminCompliance View', 'AdminCompliance')} />
          <Route path={ROUTES.CHANNELS} element={<Channel />} onEnter={() => trackEvent('pageview', 'UserManagement View', 'UserManagement')} />
          <Route path={ROUTES.USER_MANAGEMENT} element={<UserManagement />} onEnter={() => trackEvent('pageview', 'UserManagement View', 'UserManagement')} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} onEnter={() => trackEvent('pageview', 'Privacy View', 'Privacy')} />

        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;