import { type XmcpConfig } from "xmcp";

const config: XmcpConfig = {
    http: {
        port: parseInt(process.env.PORT || "3000"),
        host: "0.0.0.0",
    },
};

export default config;
