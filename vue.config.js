module.exports = {
    publicPath: "./",
    devServer: {
        host: "0.0.0.0",
        port: "9527",
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000/api",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}