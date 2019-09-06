import * as React from "react";
import { getFlowEventRunner } from "../FrontendFlowEventRunner";

export interface ReactComponentFlowConnectorProps {
	nodeName: string;
}


export interface ReactComponentFlowConnectorState {
	showWrappedComponent: boolean;
}

export function ReactComponentFlowConnector(WrappedComponent: new() => React.Component<any, any>) {
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
				return <WrappedComponent {...this.props} />;
			}
			return <></>;
		}
	};
}