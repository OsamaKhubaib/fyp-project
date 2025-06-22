 //App.jsx
import SignupPage from './components/SignupPage';
import ContactCard from './components/ContactCard';
import {Footer} from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <SignupPage />       {/* Keep existing signup page */}
      <ContactCard />
      <Footer />           {/* Add the contact card below it */}
    </div>
    
  );
};

export default App;
