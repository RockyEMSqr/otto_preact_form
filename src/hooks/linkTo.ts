import type { Dispatch, StateUpdater } from 'preact/hooks';
export function useLinkTo<S>(state: S, setState: Dispatch<StateUpdater<S>>) {
    return {
        state: state,
        setState: (s: any) => setState((ss: any) => ({ ...ss, ...s }))
    }
}