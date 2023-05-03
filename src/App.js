import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import FullName from './Component/Profile/FullName.js';
import Address from './Component/Profile/Adress.js';
function App () {
  return (
    <div className="container">
    <ProfilePhoto />
    <FullName />
    <Address />
    </div>
    );
}

export default App;