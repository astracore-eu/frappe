const { get_conf } = require("../node_utils");
const conf = get_conf();

function get_url(socket, path) {
	if (!path) {
		path = "";
	}
	let url = socket.request.headers.origin;
	if (!url || !conf.developer_mode) {
		let port = conf.webserver_port || 8000;
		url = `http://localhost:${port}`;
	} else if (conf.developer_mode) {
		let [protocol, host] = url.split(":");
		url = `${protocol}:${host}:${conf.webserver_port}`;
	}
	return url + path;
}

module.exports = {
	get_url,
};
