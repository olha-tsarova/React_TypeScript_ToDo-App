import path from "path"
import webpack from "webpack"
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript"
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}"
      }
    })
  ]
}

export default config
