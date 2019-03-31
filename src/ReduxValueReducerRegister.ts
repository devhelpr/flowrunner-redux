let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

const REDUX_ASSIGN_SET_VALUE_ACTION = "REDUX_ASSIGN_SET_VALUE_ACTION";

class ReduxAssignTask extends FlowTask {
	execute(node, services, dispatch) {
		console.log("RUNNING ReduxAssignTask: "+node.id+" - "+node.title);
		
		return true;		
	}

	getName() {
		return "ReduxAssignTask"
	}

	getFullName() {
		return "ReduxAssign"
	}

	getReducer(node) {
		
		const actionId = node.title.replace(" ","")+"SetAction";
		return (state = "", action) => {
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
	
	getIcon() {
		return "reduxassign"
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
		return [
			{name:"value", defaultValue:"", valueType:"string", required: false}
		]
	}
}

module.exports = ReduxAssignTask