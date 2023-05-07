export enum Roles {
  User = 'USER',
  Admin = 'ADMIN',
}

export type AllowedRoles = Roles | Array<Roles>;
