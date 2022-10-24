const initialState = {
    lsLoggedIn: false,
    user: null,
    user_id:null,
};

const authReducer=(state = initialState,{type,payload}) =>{
    switch (type){
        default:
            return state;
    }
}

export default authReducer;