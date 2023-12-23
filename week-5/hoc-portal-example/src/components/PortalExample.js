import React from 'react';
import { createPortal } from "react-dom";

const rootPortalElement = document.getElementById('portal-here');

const ModalExample = () => {
  return (
    <div>
      Modal portal
    </div>
  )
}

const PortalExample = () => {
  return createPortal(
    <ModalExample />,
    rootPortalElement
  )

  return <ModalExample />
};

export default PortalExample;
