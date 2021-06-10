import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserDetail from './components/EmployeeDashboard/UserDetail/UserDetail';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/" exact component={LoginPage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/employeeDashboard' component={EmployeeDashboard} />
          <Route path='/employeeDashboard/userDetail' component={UserDetail}/>
          <Route path='/adminDashboard' component={AdminDashboard} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
