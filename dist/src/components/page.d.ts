import { LoadingComponent } from './loadingComponent';
export declare abstract class Page<P, S> extends LoadingComponent<P, S & {
    loading: boolean;
}> {
}
export declare abstract class LoadingPage<P, S> extends LoadingComponent<P & {
    path: string;
    hideSidebars?: boolean;
}, S & {
    loading: boolean;
}> {
}
