let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReactActionTask extends FlowTask {
	execute(node, services, dispatch) {
		
		dispatch({
			type:node.title.replace(" ","")+"SetAction",
			value:node.payload.value
		})

		return true;
	}

	getName() {
		return "ReactActionTask"
	}

	getFullName() {
		return "ReactAction"
	}

	getDescription() {
		return "Node that performs a simple redux action";
	}

	getIcon() {
		return "reactaction"
	}

	getShape() {
		return "circle"
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

	/*getAction(actionName,nodeInstance) {
		return function (value) {
			return {
				type: actionName,
				value:value
			}
		} 
	}
	*/
}

module.exports = ReactActionTask