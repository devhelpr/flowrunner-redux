import * as React from 'react';
import { getFlowEventRunner } from '../FrontendFlowEventRunner';
import { Subtract } from 'utility-types';

export interface ReactComponentTriggerFlowProp {
  onTriggerFlow: (payload: any) => void;
}

export interface ReactComponentTriggerFlowProps
  extends ReactComponentTriggerFlowProp {
  nodeName: string;
  triggerProperty: string;
}

export interface ReactComponentTriggerFlowState {}

export const ReactComponentTriggerFlow = <
  P extends ReactComponentTriggerFlowProps
>(
  Component: React.ComponentType<P>
) => {
  return class extends React.Component<
    Subtract<P, ReactComponentTriggerFlowProp>,
    ReactComponentTriggerFlowState
  > {
    //constructor(props: any) {
    //  super(props);
    //}

    state = {};

    onTriggerFlow = (payload: any) => {
      getFlowEventRunner().executeNode(this.props.nodeName, {
        ...payload,
        [this.props.triggerProperty]: true,
      });
    };

    render() {
      return (
        <Component
          {...(this.props as P)}
          triggerProperty={this.props.triggerProperty}
          nodeName={this.props.nodeName}
          onTriggerFlow={this.onTriggerFlow}
        />
      );
    }
  };
};
