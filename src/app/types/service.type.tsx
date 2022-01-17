import React from 'react';

export interface serviceType {
  id: number;
  name: string;
  email: string;
  open: string;
  spec: string;
  icon: React.FunctionComponent;
}
