export const initalstate = {
    email: '',
    password: '',
    error: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'email':
            return { ...state, email: action.value }
        case 'password':
            return { ...state, password: action.value }
        case 'error':
            return { ...state, error: action.value }
        default:
            return initalstate
    }
}