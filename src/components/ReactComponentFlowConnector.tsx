import * as React from 'react';
import { getFlowEventRunner } from '../FrontendFlowEventRunner';
import { Subtract } from 'utility-types';

export interface ReactComponentFlowConnectorProp {
  payload: any;
}

export interface ReactComponentFlowConnectorProps
  extends ReactComponentFlowConnectorProp {
  nodeName: string;
}

export interface ReactComponentFlowConnectorState {
  showWrappedComponent: boolean;
  payload: any;
  renderCounter: number;
}

export const ReactComponentFlowConnector = <
  P extends ReactComponentFlowConnectorProps
>(
  Component: React.ComponentType<P>
) => {
  return class extends React.Component<
    Subtract<P, ReactComponentFlowConnectorProp>,
    ReactComponentFlowConnectorState
  > {
    //constructor(props: any) {
    //  super(props);
    //}

    state = {
      showWrappedComponent: false,
      payload: {},
      renderCounter: 1,
    };

    renderCounter = 1;

    componentDidMount() {
      const observable = getFlowEventRunner().getObservableNode(
        this.props.nodeName
      );
      if (observable) {
        observable.subscribe({
          next: (payload: any) => {
            this.setState({
              showWrappedComponent:
                payload.showComponent !== undefined
                  ? payload.showComponent
                  : true,
              payload: payload,
              renderCounter: this.state.renderCounter + 1,
            });
          },
        });
      }
    }

    render() {
      // TODO : hoe hier zorgen dat Component echt een nieuwe instantie is
      //   bij wisselen van layout/form ? (payload veranderd dan)
      //  ... is render prop hier een oplossing voor ? wellicht alleen intern
      //   {getComponent()}
      //   getComponent => () => {
      //		return ...
      //   };
      const getComponent = () => {
        return (
          <Component {...(this.props as P)} payload={this.state.payload} />
        );
      };
      if (
        this.state.showWrappedComponent &&
        this.renderCounter < this.state.renderCounter
      ) {
        this.renderCounter = this.state.renderCounter;
        return <>{getComponent()}</>;
      }
      return <></>;
    }
  };
};
