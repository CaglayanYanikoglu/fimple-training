import React from 'react';
import { createPortal } from "react-dom";

const rootPortalElement = document.getElementById('portal-modal');

const ModalExample = () => {
  return (
    <div>
      Modal portal
    </div>
  )
}

// export default ModalExample;

const PortalExample = () => {
  return createPortal(
    <ModalExample />,
    rootPortalElement
  )
}

export default PortalExample;

/* const PortalExample = () => {
  return createPortal(
    <ModalExample />,
    rootPortalElement
  )
}; */

// export default PortalExample;
