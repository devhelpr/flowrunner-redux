let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReduxKeyValueTask extends FlowTask {
	execute(node, services) {
		console.log("RUNNING KeyValueTask: "+node.id+" - "+node.title);
		
		return true;	
	}

	getName() {
		return "ReduxKeyValueTask"
	}

	getFullName() {
		return "ReduxKeyValue"
	}

	getReducer(node) {
		const setKeyActionId = node.title.replace(" ","")+"SetKeyAction";
		return (state = {}, action) => {
			switch (action.type) {
				case setKeyActionId:
					return Object.assign({},state,{[action.key]:action.value});
				default:
					return state
			}
		}
	}

	getIcon() {
		return "reduxkeyvalue"
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

module.exports = ReduxKeyValueTask