const merge = require("webpack-merge");

module.exports = (options = {}) => merge(
	require("./webpack.general.config")(options), {
	devtool: "none",
	mode: "production",
	target: "node",
	externals: {
		spdlog: "commonjs spdlog",
		"node-pty": "commonjs node-pty",
	}
});
