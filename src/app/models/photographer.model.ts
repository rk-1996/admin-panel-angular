export interface IPhotographer {
    id?: number;
    firstName: string;
    lastName: string;
    username: string;
    phone: string;
    email: string;
    status: boolean;
    fullName?: string;
    uniqueUrl: string;
    colorCode: string;
    loginAsPhotographer: boolean;
}