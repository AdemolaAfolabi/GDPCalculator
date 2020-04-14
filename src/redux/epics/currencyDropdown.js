import { mapTo } from 'rxjs/operators'
import { ofType } from 'redux-observable';
import { CURRENCY_DROPDOWN_SELECTED_ITEM, CURRENCY_DROPDOWN_CHANGED_ITEM } from "src/redux/action";


export const selectedItemDropdown = (action$, state$) => action$.pipe(
    ofType(CURRENCY_DROPDOWN_SELECTED_ITEM),
    mapTo({ type: CURRENCY_DROPDOWN_CHANGED_ITEM })
)