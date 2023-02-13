import webpack, { Configuration as WebpackConfig } from "webpack";
import { Configuration as WebpackDevServerConfig } from "webpack-dev-server";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

interface Configuration extends WebpackConfig {
  devServer?: WebpackDevServerConfig;
}

const isDevelopment = process.env.NODE_ENV !== "production";

const webpackConfig: Configuration = {
  name: "portfolio",
  mode: isDevelopment ? "development" : "production",
  devtool: !isDevelopment ? "hidden-source-map" : "eval",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "json"],
    alias: {
      "@components": path.resolve(__dirname, "components"),
    },
  },
  entry: {
    app: "./index.tsx",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          exclude: path.join(__dirname, "node_modules"),
        },
      },
      {
        test: /\.scss/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 20 * 1024, // 기준을 20KB 로 변경
        //   },
        // },
      },
    ],
  },
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? "development" : "production" })],
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/build/",
  },
  devServer: {
    historyApiFallback: true,
    port: 5000,
    devMiddleware: { publicPath: "/build/" },
    open: true,
    static: { directory: path.resolve(__dirname) },
  },
};

if (isDevelopment && webpackConfig.plugins) {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (!isDevelopment && webpackConfig.plugins) {
  new HtmlWebpackPlugin({
    template: `${path.resolve(__dirname)}/index.html`,
  });
  webpackConfig.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
}

export default webpackConfig;
