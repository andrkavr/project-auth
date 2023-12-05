import { Router, Route } from 'react-router-dom';
import { RegistrationForm } from './components/RegistrationForm';
import { SignInForm } from './components/SignInForm';
import { AuthenticatedContent } from './components/AuthenticatedContent';



export const App = () => {
  return (
  <Router>
    <div>
    <Route path="/register" component={RegistrationForm} />

    <Route path="/signin" component={SignInForm} />

    <Route path="/authenticated" />

    </div>
    </Router>
  );
};
