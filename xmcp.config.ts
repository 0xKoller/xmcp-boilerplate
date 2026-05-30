import { type XmcpConfig } from "xmcp";

const config: XmcpConfig = {
    http: {
        port: parseInt(process.env.PORT || "3000"),
    },
};

export default config;
