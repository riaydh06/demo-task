import { ReactNode } from 'react';
import { PermissionType } from './types';

const tokenAuthNeeded = (authPermission: string[]): boolean =>
  authPermission.includes('token');

const AllowedComponent = (
  element?: ReactNode,
  redirection?: ReactNode,
  permissions?: PermissionType,
  isToken?: string,
): ReactNode => {
  if (permissions && tokenAuthNeeded(permissions.auth)) {
    if (isToken) {
      return element;
    } else {
      return redirection;
    }
  } else {
    return element;
  }

  //   return element;
};

export { AllowedComponent };
