export const ADD = (iteam) => {
    return {
        type:"ADD_CART",
        payload: iteam
    }
}

//remove iteams
export const DLT = (id) => {
    return {
        type:"RMV_CART",
        payload: id
    }
}

//remove individual Iteam

export const REMOVE = (iteam) => {
    return {
        type:"RMV_ONE",
        payload: iteam
    }
}   
