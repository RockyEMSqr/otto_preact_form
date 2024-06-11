import type { Dispatch, StateUpdater } from 'preact/hooks';
export declare function useLinkTo<S>(state: S, setState: Dispatch<StateUpdater<S>>): {
    state: S;
    setState: (s: any) => void;
};
