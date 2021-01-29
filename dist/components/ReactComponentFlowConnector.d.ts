import * as React from 'react';
export interface ReactComponentFlowConnectorProp {
    payload: any;
}
export interface ReactComponentFlowConnectorProps extends ReactComponentFlowConnectorProp {
    nodeName: string;
}
export interface ReactComponentFlowConnectorState {
    showWrappedComponent: boolean;
    payload: any;
    renderCounter: number;
}
export declare const ReactComponentFlowConnector: <P extends ReactComponentFlowConnectorProps>(Component: React.ComponentType<P>) => {
    new (props: Pick<P, import("utility-types").SetDifference<keyof P, "payload">> | Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>): {
        state: {
            showWrappedComponent: boolean;
            payload: {};
            renderCounter: number;
        };
        renderCounter: number;
        componentDidMount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "payload" | "showWrappedComponent" | "renderCounter">(state: ReactComponentFlowConnectorState | ((prevState: Readonly<ReactComponentFlowConnectorState>, props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>) => ReactComponentFlowConnectorState | Pick<ReactComponentFlowConnectorState, K> | null) | Pick<ReactComponentFlowConnectorState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextState: Readonly<ReactComponentFlowConnectorState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, prevState: Readonly<ReactComponentFlowConnectorState>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, prevState: Readonly<ReactComponentFlowConnectorState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextState: Readonly<ReactComponentFlowConnectorState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextState: Readonly<ReactComponentFlowConnectorState>, nextContext: any): void;
    };
    new (props: Pick<P, import("utility-types").SetDifference<keyof P, "payload">>, context: any): {
        state: {
            showWrappedComponent: boolean;
            payload: {};
            renderCounter: number;
        };
        renderCounter: number;
        componentDidMount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "payload" | "showWrappedComponent" | "renderCounter">(state: ReactComponentFlowConnectorState | ((prevState: Readonly<ReactComponentFlowConnectorState>, props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>) => ReactComponentFlowConnectorState | Pick<ReactComponentFlowConnectorState, K> | null) | Pick<ReactComponentFlowConnectorState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextState: Readonly<ReactComponentFlowConnectorState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, prevState: Readonly<ReactComponentFlowConnectorState>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, prevState: Readonly<ReactComponentFlowConnectorState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextState: Readonly<ReactComponentFlowConnectorState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "payload">>>, nextState: Readonly<ReactComponentFlowConnectorState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
