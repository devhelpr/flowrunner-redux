import * as Promise from 'promise';
import { FlowTask, FlowTaskPackageType } from "@devhelpr/flowrunner";

const REDUX_ASSIGN_SET_VALUE_ACTION = "REDUX_ASSIGN_SET_VALUE_ACTION";

export class ReduxAssignTask extends FlowTask {
	public execute(node : any, services : any, callStack : any) {
		console.log("RUNNING ReduxAssignTask: "+node.id+" - "+node.title);
		
		return true;		
	}

	public getName() {
		return "ReduxAssignTask"
	}

	public getFullName() {
		return "ReduxAssign"
	}

	public getReducer(node : any) {
		
		const actionId = node.title.replace(" ","")+"SetAction";
		return (state = "", action : any) => {
			try {
				switch (action.type) {
					case actionId:
						if (action.value !== undefined) {						
							return action.value;		
						} else {
							return state;
						}	
					default:
						return state
				}
			} catch(err) {
				return state;
			}
		}
	}
	
	public getIcon() {
		return "reduxassign"
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
		return [
			{name:"value", defaultValue:"", valueType:"string", required: false}
		]
	}
}