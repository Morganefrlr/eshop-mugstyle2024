

export const deepCloneArray = (arrayToClone : []) =>{
    return JSON.parse(JSON.stringify(arrayToClone))
}

export const findInArray = ({id, array} : {id : string, array: []}) => {
    return array.find(el => el.id === id)
}



export const findIndexInArray = ({id, array} : {id : string, array: []}) => {
    return array.findIndex(el => el.id === id)
}