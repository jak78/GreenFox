/**
 * GreenFox preferences dialog box management.
 */
var greenfoxPrefsMgr = {
	getPrefs: function() {
		return Components.classes["@mozilla.org/preferences-service;1"]
				.getService(Components.interfaces.nsIPrefService).getBranch("extensions.greenfox.");
	},
	getDefaultPrefs: function() {
		return Components.classes["@mozilla.org/preferences-service;1"]
				.getService(Components.interfaces.nsIPrefService).getDefaultBranch("extensions.greenfox.");
	},
	/**
	 * Init dialog box with GreenFox preferences.
	 */
	dialogInit: function() {
		try {
			var prefs = this.getPrefs();
			document.getElementById("greenfox-collection-enabled").checked = prefs.getBoolPref('collection.enabled');
		} catch (e) {
			alert("Failed to load settings.\n" + e);
		}
	},
	/**
	 * Check submitted values & set preferences.
	 * @return true if values are OK
	 */
	dialogSave: function() {
		try {
			var oPrefs = this.getPrefs();
			
			var collectionEnabled = this.readCheckboxFromDialog("greenfox-collection-enabled");

			oPrefs.setBoolPref('collection.enabled', collectionEnabled)
			return true;
		} catch (e) {
			alert("Failed to load settings.\n" + e);
			return false;
		}
	},
	readValueFromDialog: function(domId) {
		// Get submitted value:
		var value = document.getElementById(domId).value;
		// Trim spaces:
		value = value.replace(/^\s+/g,'').replace(/\s+$/g,'');
		return value;
	},
	readCheckboxFromDialog: function(domId) {
		var value = document.getElementById(domId).checked;
		return value;
	},
	/**
	 * Revert to factory settings.
	 */
	dialogReset: function() {
		var defaults = this.getDefaultPrefs()
		document.getElementById("greenfox-collection-enabled").checked = defaults.getBoolPref("collection.enabled");
	},
}

