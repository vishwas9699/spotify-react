export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null,
    token:"BQArVrZdZ8A2zzHuR38TboVdNqpJxsdQHZ7_nxU1bZ8pX5W4eZ5tpqTU-IIe2KT6blS_gxZv-0A29awhIwTymtYtZFCsMRvS71nInqucqfFrYzrgqf1ZrHpGwKuZ5T0poLIn0G8l0NiYsVwDXIkIMYWMje08b3C0IWS52NULzVWGlnNglC14LcDljqtPtsMh2FkAVcwshjdu9Ax4",
};

const reducer =(state,action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
        default:
            return state;
    }
}

export default reducer;