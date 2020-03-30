import * as axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            'API-KEY': '27a91fcb-ca8c-492b-8f73-7b6737a6069f'
        }
    }
)

//const baseUrl = `https://social-network.samuraijs.com/api/1.0/`

// export const getUsers = ( currentPage=1, pageSize=10) => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
//          {
//             withCredentials: true,
//             headers: {
//                 'API-KEY': '27a91fcb-ca8c-492b-8f73-7b6737a6069f'
//             }
//         })
//         .then(resp onse => response.data)
// }

// export const getUsers = ( currentPage=1, pageSize=10) => {
//     axios.get(baseUrl`users?page=${currentPage}&count=${pageSize}`,
//         {
//             withCredentials: true,
//             headers: {
//                 'API-KEY': '27a91fcb-ca8c-492b-8f73-7b6737a6069f'
//             }
//         })
//         .then(response => response.data)
// }
// export const getUsers = ( currentPage=1, pageSize=10) => {
//    return  instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`,
//         )
//         .then( response => response.data)
// }
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)

    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}
    // setUnfollow(u) {
    //     return instance.post(`/follow/${u}`)
    //         .then( response => response.data)
    // },
    // setFollow(u) {
    //     return instance.delete(`/follow/${u}`)
    //         .then(response => response.data)
    // }

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },

}
