import React, { useContext, useEffect } from 'react';
import { LocationGlobalContext } from '../../context/Location/LocationsContext';

export default function PinButton() {
  const { pinned } = useContext(LocationGlobalContext);

  useEffect(() => {
    if (pinned !== false) {
      return <button>Un-Pin Location</button>;
    }
    if (pinned === false) {
      return <button>Pin Location</button>;
    }
  }, []);

  if (pinned !== false) {
    return <button>Un-Pin Location</button>;
  }
  if (pinned === false) {
    return <button>Pin Location</button>;
  }
}
