import React, { useRef } from 'react';
import { VncScreen } from 'react-vnc';

function Vnc() {
  const ref = useRef();

  return (
    <VncScreen
      url='ws://192.168.1.10'
      scaleViewport
      autoconnect
      background="#000000"
      style={{
        width: '55vh',
        height: '30vh',
      }}
      ref={ref}
    />
  );
}

export default Vnc;