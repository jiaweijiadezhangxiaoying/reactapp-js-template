import { createStore } from "redux";

let initState = {
    name: "jiawe",
    num: 1
}

export const actions = {
    addNum(text) {
        return {
            type: "addNum",
            text: text
        }
    }
}

const reducer = (state = initState, action) => {
    let { type, text } = action
    switch (type) {
        case "addNum": {
            let num = state.num + 1;
            console.log(num)
            console.log({ ...state, num })
            return { ...state, num }
        }
        default: {
            return state;
        }
    }
}
export default new createStore(reducer)