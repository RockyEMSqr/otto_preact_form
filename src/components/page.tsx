import { h, Component } from 'preact';
import { LoadingComponent } from './loadingComponent';
export abstract class Page<P, S> extends LoadingComponent<P, S & { loading: boolean }>{ }
export abstract class LoadingPage<P, S> extends LoadingComponent<P & { path: string, hideSidebars?: boolean }, S & { loading: boolean }>{ }