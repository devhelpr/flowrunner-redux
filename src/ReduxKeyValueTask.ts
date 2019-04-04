import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from "@devhelpr/flowrunner";

export class ReduxKeyValueTask extends FlowTask {
	public execute(node : any, services : any) {
		console.log("RUNNING KeyValueTask: " + node.id + " - " + node.title);
		
		return true;	
	}

	public getName() {
		return "ReduxKeyValueTask"
	}

	public getFullName() {
		return "ReduxKeyValue"
	}

	public getReducer(node : any) {
		const setKeyActionId = node.title.replace(" ","") + "SetKeyAction";
		return (state = {}, action : any) => {
			switch (action.type) {
				case setKeyActionId:
					return Object.assign({}, state, {[action.key] : action.value});
				default:
					return state
			}
		}
	}

	public getIcon() {
		return "reduxkeyvalue"
	}

	public getShape() {
		return "rect"
	}

	public getTaskType() {
		return "frontend"
	}

	public getPackageType() {
		return FlowTaskPackageType.DEFAULT_NODE
	}

	public getCategory() {
		return "FlowCanvas"
	}

	public getController() {
		return "FlowCanvasController"
	}

	public getConfigMetaData() {
		return []
	}
}