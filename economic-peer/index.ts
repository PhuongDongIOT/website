import { PeerServer } from "peer";

import { customGenerationFunction } from '~utils/strings';

const peerServer = PeerServer({
	port: 9001,
	path: "/",
	generateClientId: customGenerationFunction,
});