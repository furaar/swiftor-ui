import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Menubar } from 'primereact/menubar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from 'primereact/inputtext';
import Sidebar from './Sidebar';

const DashboardHeader = () => {
  const op = useRef(null);
  const resources = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);

  // Get project name from URL params using useParams
  const { projectName } = useParams();

  const headerItems = [
    {
      label: <i className="pi pi-bars" />,
      command: () => setShowSidebar(!showSidebar)
    },
    {
      label: (
        <>
          {projectName}<span> </span>
          <i className="pi pi-angle-down" />
        </>
      ),
      icon: () => <img src='/Swiftor.png' alt="Logo" width={25}></img>,
      command: (e) => op.current.toggle(e)
    },
    {
      label: <i className="pi pi-server" />,
      command: (e) => resources.current.toggle(e)
    }
  ];

  const dialogContent = (
    <div>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="projectName">Project Name</label>
          <InputText id="projectName" value={projectName} />
        </div>
        <div className="p-field">
          <label htmlFor="organizationName">Organization Name</label>
          <InputText id="organizationName" />
        </div>
        <div className="p-field">
          <label htmlFor="author">Author</label>
          <InputText id="author" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Menubar model={headerItems} />
      <Sidebar visible={showSidebar} onHide={() => setShowSidebar(false)} />
      
      <OverlayPanel ref={op}>
        {dialogContent}
      </OverlayPanel>

      <OverlayPanel ref={resources} showCloseIcon closeOnEscape>
        Stats
      </OverlayPanel>
    </div>
  );
};

export default DashboardHeader;