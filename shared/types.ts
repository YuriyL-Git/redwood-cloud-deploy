export enum Roles {
  User = 'USER',
  Admin = 'ADMIN',
}

export type AllowedRoles = Roles | Array<Roles>;

export enum AuthTypes {
  DbAuth = 'DbAuth',
  Auth0 = 'Auth0',
}
