export const initalstate2 = {
    firstname: '',
    lastname: '',
    email: '',
    Gender: '',
    phone: '',
    address: '',
    country: '',

}

export const reducer2 = (state, action) => {
    switch (action.type) {
        case 'firstname':
            return { ...state, firstname: action.value }
        case 'lastname':
            return { ...state, lastname: action.value }
        case 'email':
            return { ...state, email: action.value }
        case 'Gender':
            return { ...state, Gender: action.value }
        case 'phone':
            return { ...state, phone: action.value }
        case 'address':
            return { ...state, address: action.value }
        case 'country':
            return { ...state, country: action.value }
        default:
            return initalstate2
    }
}