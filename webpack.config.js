const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), //diz qual é o arquivo principal
  output: {
    //onde eu quero que o arquivo transpilado seja mandado
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js" //o nome do arquivo gerado
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/, //qual arquivos eu quero compilar utilizando o babel loader
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
