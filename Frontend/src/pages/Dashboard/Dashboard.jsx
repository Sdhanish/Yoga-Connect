import React from 'react';
import { useUser } from '../../hooks/useUser';
import DashboardNavigate from '../../routes/DashboardNavigate';
import { HashLoader } from 'react-spinners';
const Dashboard = () => {


    const { currentUser, isLoading } = useUser();

    const role = currentUser?.role;


    if (isLoading) {
        return <div className='flex justify-center items-center h-screen'>
        <HashLoader
            color="#77c206"
            size={50}
        />
    </div>
    }
    return <DashboardNavigate />;
};

export default Dashboard;