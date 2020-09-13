// const INCREMENT = 'INCREMENT';
// const   DECREMENT = 'DECREMENT';
// or
export const counterTypes =  {
     INCREMENT : 'INCREMENT',
       DECREMENT : 'DECREMENT',
       INCREMENTN: 'INCREMENTN',
       DECREMENTN: 'DECREMENTN',
}
export const increment = () => {
    return {
        type: counterTypes.INCREMENT,
    }
}

export const incrementn = (payload) => {
    return {
        type: counterTypes.INCREMENTN,
        payload: payload,
    }
}


export const decrement = () => {
    return {
        type: counterTypes.DECREMENT,
    }
}


export const decrementn = (payload) => {
    return {
        type: counterTypes.DECREMENTN,
        payload: payload,
    }
}