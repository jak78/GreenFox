/**
 * Void collector : does not collect any sample.
 */
var mockCollect = {

	init: function() {},
	destroy: function() {},
	willSendSamples: function() {
		return false
	},

	/**
	 * Send sample.
	 * @param sample sample (number)
	 */
	postSample: function(sample) {
		return true // This is a mock
	},
}

/**
 * TODO implement log samples.
 */
var greenfoxCollect = mockCollect;

