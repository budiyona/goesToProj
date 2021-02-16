const init = {
    user: "user"
}
//reducer
const rootReducer = (state = init, action) => {
    let tmpformula =[]
    switch (action.type) {
        case "SET_FORMULA":
            console.log("MASUK REDUX SET FORMULA");
            tmpformula = state.formula
            tmpformula.push(action.formula)
            console.log("formula awal",state.formula);
            return {
                ...state,
                formula: tmpformula
            }
        default:
            return state
    }
}

export default rootReducer