let FlowTask = require("cdmas/flowcontrol/FlowTask.js")
let FlowTaskPackageType = require("cdmas/flowcontrol/FlowTaskPackageType.js");
let Promise = require('promise');

class ReactGetKeyTask extends FlowTask {
	execute(node, services, dispatch) {
		
		return new Promise((resolve,reject) => {
			if (node.assignTo != undefined && node.readKey != undefined &&
			 	node.assignTo != "" && node.readKey != "") {
				
				let reducerName = node.title.replaceAll(" ","");

				const store =  services.getStore().getState();

				let payload = Object.assign({}, node.payload, {
					[node.assignTo]:store[reducerName][node.readKey]
				})
				resolve(payload);
			} else {
				reject();
			}
		});
	}

	getName() {
		return "ReactGetKeyTask"
	}

	getFullName() {
		return "ReactGetKey"
	}

	getDescription() {
		return "Reducer name: {{{title}}} - get property: {{{readKey}}} set property {{{assignTo}}} in payload";
	}

	getIcon() {
		return "reactgetkey"
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
			{name:"readKey", defaultValue:"", valueType:"string", required: true},
			{name:"assignTo", defaultValue:"", valueType:"string", required: true}
		]
	}
}

module.exports = ReactGetKeyTask