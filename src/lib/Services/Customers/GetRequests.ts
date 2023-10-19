import http from "../../../utils/https"
import Users from "../../Types/User"

const getUsers = (page: number | string, limit: number | string) => http.get<Users[]>('users', {
    params: {
        _page: page,
        _limit: limit
    }
})


export default {
    getUsers
}