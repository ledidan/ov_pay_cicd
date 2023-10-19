interface User {
    id: number | string,
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    country: string,
    avatar: string,
}

export type Users = Pick<User, 'id' | 'first_name' | 'last_name' | 'email' | 'gender' | 'country' | 'avatar'>[]

export default Users