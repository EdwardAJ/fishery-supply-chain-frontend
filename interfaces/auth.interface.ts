interface OrgNameInterface {
  orgName: string;
}

interface UsernameInterface {
  username: string;
}

export interface RegisterInterface extends OrgNameInterface, UsernameInterface {}
export interface EnrollAdminInterface extends OrgNameInterface {}
export interface LoginInterface extends UsernameInterface {
  password: string;
}
