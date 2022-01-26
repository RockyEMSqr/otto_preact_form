import type { StateUpdater } from 'preact/hooks';
export function useLinkTo<S>(state: S, setState: StateUpdater<S>) {
    return {
        state: state,
        setState: (s: any) => setState((ss: any) => ({ ...ss, ...s }))
    }
}