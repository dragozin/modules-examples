import * as React from 'react';

const Link:React.FC<{href: string, children: React.ReactNode}> = ({ href, children }) => {

    const navigate = (href: string) => {
        history.pushState({}, '', href);
    }

    return (
      <a
        onClick={(event) => {
          event.preventDefault();  
          navigate(href);
        }}
        href={href}
      >
        {children}
      </a>
    );
  };

  export default Link;