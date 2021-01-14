const initialState = {
    isLoading: false,
    data: []
}

const connection = (state = initialState, action) => {
    switch(action.type) {
        case 'CONNECT' :{
            return {
                ...state,
                isLoading: true
            }}
        case 'CONNECT_SUCCESS' :{
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }}
        case 'CONNECT_FAILED' :{
            return {
                ...state,
                isLoading: false,
            }}
            default: return state
        }}
export default connection