import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TeamPage = () => {
    return (
        <div className="team-page-container">
            <Link to="/teams/create-team">
                <button className="create-team-btn button-primary d-flex align-center gap-20">
                    Create New Team <FaPlusSquare />
                </button>
            </Link>
            <div className='row m-0'>
                <div className='col-lg-4 col-md-6'>
                    <div className="team-card container-secondary-bg mt-3 d-flex d-flex-space-between d-flex-end pxy-3">
                        <div>
                            <h2>Team Alpha</h2>
                            <p className='mt-1'>Assigned Members: 07</p>
                            <p>Assigned Clients: 20</p>
                        </div>
                        <Link to="/teams/edit-team">
                            <button className="edit-team-btn button-dark">Edit Team</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamPage;
