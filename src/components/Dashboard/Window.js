import React from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { TabView, TabPanel } from 'primereact/tabview';
import Vnc from "./VNC";
import Ssh from "./SSH";
import Context from './Context';


export default function Window() {

  return (
    <>
    <Context />
      <Splitter stateKey={"horizontal"} stateStorage={"local"} style={{ height: '92vh', marginTop: '5px' }}>
        <SplitterPanel className="flex align-items-center justify-content-center" size={30} minSize={10}>
          Panel 1
        </SplitterPanel>

        <SplitterPanel size={20}>
          <Splitter stateKey={"vertical"} stateStorage={"local"} layout="vertical">

            <SplitterPanel className="flex align-items-center justify-content-center" size={50}>
              <TabView style={{ width: "100%", height: "100%" }}>
                <TabPanel header="SHELL" leftIcon="pi pi-key mr-2">
                  <Ssh />
                </TabPanel>
                <TabPanel header="VNC" leftIcon="pi pi-desktop mr-2">
                  <Vnc />
                </TabPanel>
              </TabView>
            </SplitterPanel>

            <SplitterPanel className="flex align-items-center justify-content-center">
              Panel 3
            </SplitterPanel>

          </Splitter>
        </SplitterPanel>
      </Splitter>
    </>
  )
}
