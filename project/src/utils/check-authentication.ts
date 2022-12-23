import { AuthorizationStatus } from './constants';

export const isAuthenticated = (authorizationStatus: string): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
