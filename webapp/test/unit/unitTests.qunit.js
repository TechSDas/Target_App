/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"receiver/Receiver_Application/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});