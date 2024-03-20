import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';

const DashboardSidebar = ({ visible, onHide }) => {

  const itemRenderer = (item, options) => (
    <div className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
      <span className={`${item.icon} text-primary`} />
      <span className={`mx-2 ${item.items && 'font-semibold'}`}>{item.label}</span>
      {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
    </div>
  );

  const sidebarItems = [
    {
      label: "Home",
      items: [
        { label: 'New', icon: 'pi pi-fw pi-plus', template: itemRenderer, shortcut: '⌘+N' },
      ]
    },
    {
      label: "Reports",
      items: [
        { label: 'My Report', icon: 'pi pi-fw pi-file-edit', template: itemRenderer },
        { label: 'Data', icon: 'pi pi-fw pi-images', template: itemRenderer },
        { label: 'Templates', icon: 'pi pi-fw pi-book', template: itemRenderer },
      ]
    },
    {
      separator: true
    },
    {
      label: "HackerX",
      items: [
        { label: 'Configure VM', icon: 'pi pi-fw pi-code', template: itemRenderer, shortcut: '⌘+V' },
        { label: 'Resources', icon: 'pi pi-fw pi-server', template: itemRenderer },
      ]
    },
    {
      label: "Account",
      items: [
        { label: 'Settings', icon: 'pi pi-fw pi-cog', template: itemRenderer, shortcut: '⌘+O' }
      ]
    },
    {
      separator: true
    },
    { label: 'Logout', icon: 'pi pi-fw pi-sign-out', template: itemRenderer } // You need to provide an icon for the Logout item
  ];

  return (
    <Sidebar visible={visible} onHide={onHide}>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <img src='/Swiftor.png' width={50} alt="Logo"></img>
        <h1 style={{ marginLeft: '0.5rem' }}>Swiftor v1</h1>
      </div>
      <Menu model={sidebarItems} className="w-full md:w-15rem" />
    </Sidebar>
  );
}

export default DashboardSidebar;
