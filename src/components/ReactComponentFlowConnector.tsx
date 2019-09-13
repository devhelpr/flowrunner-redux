import * as React from "react";
import { getFlowEventRunner } from "../FrontendFlowEventRunner";
import { Subtract } from 'utility-types';


export interface ReactComponentFlowConnectorProp {
	payload: any;
}


export interface ReactComponentFlowConnectorProps extends ReactComponentFlowConnectorProp {
	nodeName: string;
}


export interface ReactComponentFlowConnectorState {
	showWrappedComponent: boolean;
	payload: any;
}

export const ReactComponentFlowConnector= <P extends ReactComponentFlowConnectorProps>(Component: React.ComponentType<P>) => {
	return class extends React.Component<
		Subtract<P, ReactComponentFlowConnectorProp>, 
		ReactComponentFlowConnectorState> {
		constructor(props: any) {
			super(props);
		}

		state = {
			showWrappedComponent: false,
			payload : {}
		}

		componentDidMount() {
			const observable = getFlowEventRunner().getObservableNode(this.props.nodeName);
			if (observable) {
				observable.subscribe({
					next: (payload: any) => {
						this.setState({
							showWrappedComponent : payload.showComponent !== undefined ? !!payload.showComponent : true,
							payload: payload
						})
					}
				})
			}
		}

		render() {			
			if (this.state.showWrappedComponent) {
				return <Component {...this.props as P} payload={this.state.payload} />;
			}
			return <></>;
		}
	};
}