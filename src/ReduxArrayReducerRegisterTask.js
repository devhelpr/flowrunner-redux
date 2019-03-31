let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReduxArrayTask extends FlowTask {
	execute(node, services) {
		console.log("RUNNING ReduxArrayTask: "+node.id+" - "+node.title);
		
		return true;	
	}

	getName() {
		return "ReduxArrayTask"
	}

	getFullName() {
		return "ReduxArray"
	}

	getReducer(node) {
		
		const pushActionId = node.title.replace(" ","")+"PushArrayAction";
		const clearActionId = node.title.replace(" ","")+"ClearArrayAction";
		const assignActionId = node.title.replace(" ","")+"AssignArrayAction";

		return (state = [], action) => {
			switch (action.type) {

				case clearActionId:
					{
						return [];
					}
				case assignActionId:
					{
						return action.list;
					}	
				case pushActionId:
					{
						let newState = state.slice();
						newState.push(action.value);
						return newState
					}
				default:
					return state
			}
		}
	}

	getIcon() {
		return "reduxarray"
	}

	getShape() {
		return "rect"
	}

	getTaskType() {
		return "frontend"
	}

	getPackageType() {
		return FlowTaskPackageType.DEFAULT_NODE
	}

	getCategory() {
		return "FlowCanvas"
	}

	getController() {
		return "FlowCanvasController"
	}

	getConfigMetaData() {
		return []
	}
}

module.exports = ReduxArrayTask