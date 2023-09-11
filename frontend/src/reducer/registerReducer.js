export const initalstate1 = {
    email: '',
    username: '',
    password: '',
    error: null
}

export const reducer1 = (state, action) => {
    switch (action.type) {
        case 'username':
            return { ...state, username: action.value }
        case 'email':
            return { ...state, email: action.value }
        case 'password':
            return { ...state, password: action.value }
        case 'error':
            return { ...state, error: action.value }
        default:
            return initalstate1
    }
}