import React, { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRef = useRef<HTMLDivElement | null>(null);
  if (!portalRef.current) {
    portalRef.current = document.createElement('div');
  }

  useEffect(() => {
    const portalElement = portalRef.current!;
    document.body.appendChild(portalElement);

    return () => {
      document.body.removeChild(portalElement);
    };
  }, []);

  return createPortal(children, portalRef.current);
};

export default Portal;
