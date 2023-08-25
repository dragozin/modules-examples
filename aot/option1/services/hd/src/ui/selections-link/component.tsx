import React from 'react';
import Link from 'next/link';

import {SelectionsRouteParams} from '@kinopoisk-int/kp-selections';
import {LinkComponent} from '@kinopoisk-int/kp-routing';


export const SelectionsLink: LinkComponent<SelectionsRouteParams> = ({ children, routeParams: {selectionId}, ...props}) => (
    <Link href={`/selections/${selectionId}`} {...props}>
      {children}
    </Link>
  );
