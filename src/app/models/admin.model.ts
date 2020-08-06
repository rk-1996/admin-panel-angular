import { Status } from '../enums/status.enum';
export interface IAdmin {
    id?: number;
    firstName: string;
    lastName: string;
    username: string;
    phone: string;
    email: string;
    profitSharePercentage: number;
    status: boolean;
    illinoisEmail: string;
    fullName?: string;
    loginAsAdmin: boolean;
}