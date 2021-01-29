import * as React from 'react';
export interface ReactComponentTriggerFlowProp {
    onTriggerFlow: (payload: any) => void;
}
export interface ReactComponentTriggerFlowProps extends ReactComponentTriggerFlowProp {
    nodeName: string;
    triggerProperty: string;
}
export interface ReactComponentTriggerFlowState {
}
export declare const ReactComponentTriggerFlow: <P extends ReactComponentTriggerFlowProps>(Component: React.ComponentType<P>) => {
    new (props: Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">> | Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>): {
        state: {};
        onTriggerFlow: (payload: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: ReactComponentTriggerFlowState | ((prevState: Readonly<ReactComponentTriggerFlowState>, props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>) => ReactComponentTriggerFlowState | Pick<ReactComponentTriggerFlowState, K> | null) | Pick<ReactComponentTriggerFlowState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextState: Readonly<ReactComponentTriggerFlowState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, prevState: Readonly<ReactComponentTriggerFlowState>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, prevState: Readonly<ReactComponentTriggerFlowState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextState: Readonly<ReactComponentTriggerFlowState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextState: Readonly<ReactComponentTriggerFlowState>, nextContext: any): void;
    };
    new (props: Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>, context: any): {
        state: {};
        onTriggerFlow: (payload: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: ReactComponentTriggerFlowState | ((prevState: Readonly<ReactComponentTriggerFlowState>, props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>) => ReactComponentTriggerFlowState | Pick<ReactComponentTriggerFlowState, K> | null) | Pick<ReactComponentTriggerFlowState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextState: Readonly<ReactComponentTriggerFlowState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, prevState: Readonly<ReactComponentTriggerFlowState>): any;
        componentDidUpdate?(prevProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, prevState: Readonly<ReactComponentTriggerFlowState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextState: Readonly<ReactComponentTriggerFlowState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Pick<P, import("utility-types").SetDifference<keyof P, "onTriggerFlow">>>, nextState: Readonly<ReactComponentTriggerFlowState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
