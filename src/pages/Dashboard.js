import React, { useState } from 'react';
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import Window from "../components/Dashboard/Window";

function Dashboard() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <Sidebar visible={sidebarVisible} />
            <Window />
        </>
    );
}

export default Dashboard;
