module.exports = {
  entry: {
    app: '/home/Adat/Code/WebDev/React/Itracker/src/Main.jsx',
  },
  output: {
    path: '/home/Adat/Code/WebDev/React/Itracker/static/',
    filename: 'Itracker.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: [
              @babel/preset-env,
              @babel/preset-react
            ]
          }
        
        },
      },
    ],
  },
  devServer: {
    port: 8000,
    contentBase: 'static',
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
      },
    },
  },
  devtool: 'source-map',
};

