const add_to_cart = (state={},action) =>{
    switch(action.type){
      case "ADDTOCART":
        return{
            ...state,
            product:action.payload,
        }
      case "REMOVE":
        return{
            ...state,
            product:action.payload,
        }
      default:
        return state
    }
}

export default add_to_cart