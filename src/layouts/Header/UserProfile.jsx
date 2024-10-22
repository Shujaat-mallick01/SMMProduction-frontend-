import { FaBell, FaCog } from 'react-icons/fa'; 
import userprofile  from "../../assets/Images/ProfilePicture.png";

const UserProfile = () => {
    return (
        <div className="user-profile ">
            <img src={userprofile} alt="User Profile" className="profile-pic" />
            <div className="user-info">
                <span className="user-name">Bilal Faheem</span>
                <span className="user-role">Marketing Director</span>
            </div>
            <div className="user-icons">
                <FaBell className="icon bell-icon" />
                <FaCog className="icon settings-icon" />
            </div>
        </div>
    );
};

export default UserProfile;
