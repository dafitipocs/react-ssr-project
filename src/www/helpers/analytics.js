/* eslint import/prefer-default-export: "off" */

import Analytics from 'react-ga';

const enabled = process.env.NODE_ENV === 'production';

if (enabled) {
  Analytics.initialize('UA-119560283-1');
}

export function trackingView(page) {

  if (enabled) {
    Analytics.pageview(page);
  }
}

export function sendEvent(category, action, label = null, value = null) {

  const event = {
    category, action
  };

  if (label) {
    event.label = label;
  }

  if (value) {
    event.value = value;
  }

  if (enabled) {
    Analytics.event(event);
  }
}
