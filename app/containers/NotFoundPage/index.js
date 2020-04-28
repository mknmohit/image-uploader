/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import messages from './messages';

export default function NotFound() {
  return (
    <div>
      <h1>
      <FormattedMessage {...messages.header} />
      <div>
        <NavLink to="/">Back to Home</NavLink>
      </div>
    </h1>
    </div>
  );
}
