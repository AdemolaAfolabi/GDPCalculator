import { CURRENCY_DROPDOWN_CHANGED_ITEM, CURRENCY_DROPDOWN_SELECTED_ITEM } from "./action";


export default (action, state) => {
    switch (action.type) {
        case CURRENCY_DROPDOWN_CHANGED_ITEM:
            return state

        case CURRENCY_DROPDOWN_SELECTED_ITEM:
            const { item } = action.payload
            return { ...state, selectedItem: item}

        default:
            return state
    }
}