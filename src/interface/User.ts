import UserProfile from './UserProfile';
import Order from './Order';

export default interface User {

    id: string;
    profile: UserProfile;
    orders: Order[];

};