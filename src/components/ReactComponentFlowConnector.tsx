import * as React from "react";
import { getFlowEventRunner } from "../FrontendFlowEventRunner";

export interface ReactComponentFlowConnectorProps {
	nodeName: string;
}


export interface ReactComponentFlowConnectorState {
	showWrappedComponent: boolean;
}

export const ReactComponentFlowConnector= <P extends object>(Component: React.ComponentType<P>) => {
	return class extends React.Component<ReactComponentFlowConnectorProps, ReactComponentFlowConnectorState> {
		constructor(props: any) {
			super(props);
		}

		state = {
			showWrappedComponent: false
		}

		componentDidMount() {
			const observable = getFlowEventRunner().getObservableNode(this.props.nodeName);
			if (observable) {
				observable.subscrive({
					next: (payload: any) => {
						this.setState({
							showWrappedComponent : true
						})
					}
				})
			}
		}

		render() {			
			if (this.state.showWrappedComponent) {
				return <Component {...this.props as P} />;
			}
			return <></>;
		}
	};
}