import { ajax } from 'rxjs/ajax'
import { mergeMap } from 'rxjs/operators'

export const createRequest = url => ajax(url).pipe(
    mergeMap(response => response)
)

export const consumeRequest = observable => new Promise((resolve, reject) => {
    if (typeof observable === 'undefined') return {}
    observable.subscribe(r => resolve(r), e => reject(e))
})
