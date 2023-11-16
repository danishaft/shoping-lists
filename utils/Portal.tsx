import { useRef, useEffect, useState, ReactNode, Children, CSSProperties } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode
}

export const Portal = (props: PortalProps) => {
  const {children} = props;

  //create a container element using useRef
  const portContainerRef = useRef(document.createElement("div"));

  //useEffect to mount and unmount the portal
  useEffect(() => {
    const portalContainer = portContainerRef.current;
    document.body.appendChild(portalContainer);

    //cleanup function to remove the portal container when the component is unmounted
    return () => {
      document.body.removeChild(portalContainer);
    };
  }, []);

  const portalStyles: CSSProperties = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      zIndex: '9999',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
  }

  //use createPortal to render children into the portal container
  return createPortal(
    <div style={portalStyles}>{children}</div>,
    portContainerRef.current
  );
};
