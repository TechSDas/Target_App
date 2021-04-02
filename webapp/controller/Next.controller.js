sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MBox) {
	"use strict";

	return Controller.extend("receiver.Receiver_Application.controller.Next", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf receiver.Receiver_Application.view.Next
		 */
		onInit: function () {

		},

		//Fetch Data
		onFetch: function () {

				var myStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
				var data = myStorage.get("local");

				if (data) {
					this.byId("input1").setValue(data.name);
					this.byId("input2").setValue(data.city);
				} else {
					MBox.error("Data could not be retrieved");
				}
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf receiver.Receiver_Application.view.Next
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf receiver.Receiver_Application.view.Next
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf receiver.Receiver_Application.view.Next
		 */
		//	onExit: function() {
		//
		//	}

	});

});