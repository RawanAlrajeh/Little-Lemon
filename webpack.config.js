module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            'babel-loader',
            'react-svg-loader'
          ]
        },
      ],
    },
  };