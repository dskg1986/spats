export interface SRPApplication {
    _id: String;
    status: String;
    applicationName: String;
    permitNumber: String;
    applicationType: String;
    organization: String;
    applicantFirstName: String;
    applicantMiddleInitial: String;
    applicantLastName: String;
    phoneNumber: String;
    ext: String;
    faxNumber: String;
    address1: String;
    address2: String;
    city: String;
    country: String;
    state: String;
    zipCode: String;
    email: String;
    webURL: String;
    applicantType: String;
    applicationUse: [String];
}
