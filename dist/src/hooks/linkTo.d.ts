import type { StateUpdater } from 'preact/hooks';
export declare function useLinkTo<S>(state: S, setState: StateUpdater<S>): {
    state: S;
    setState: (s: any) => void;
};
