let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReactSetKeyActionTask extends FlowTask {
	execute(node, services, dispatch) {
		
		dispatch({
			type:node.title.replace(" ","")+"SetKeyAction",
			key:node.assignToKey,
			value:node.payload.value
		})

		return true;
	}

	getDescription() {
		return "Reducer name: {{{title}}} - set property: {{{assignToKey}}} using property 'value' from payload";
	}

	getName() {
		return "ReactSetKeyActionTask"
	}

	getFullName() {
		return "ReactSetKeyAction"
	}

	getIcon() {
		return "reactsetkeyaction"
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

	getConfigMetaData() {
		return [
			{name:"assignToKey", defaultValue:"", valueType:"string", required: true}
		]
	}
}

module.exports = ReactSetKeyActionTask