export interface UserDetails {
    _id: string;
    email: string;
    altEmail: String;
    firstName: string;
    middleInitial: string;
    lastName: string;
    primePhone: string;
    altPhone: String;
    lastUseDate: Date;
    userType: String;
    userRoles: [String];
    locked: Boolean;
    affiliations: {};
    exp: number;
    iat: number;
}
