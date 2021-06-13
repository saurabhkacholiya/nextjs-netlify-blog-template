const withImages = require("next-images");

module.exports = withImages({
  pageExtensions: ["tsx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push([
      {
        test: /\.yml$/,
        type: "json",
        use: "yaml-loader",
      },
      {
        test: /\.svg$/,
        use: "@svgr/webpack",
      },
    ]);
    return config;
  },
  loaders: [
    {
      test: /.jsx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader",
    },
    {
      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      loader: "url-loader?limit=100000",
    },
  ],
});
