const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  
  // Ponto de entrada: o arquivo JS principal que vamos criar em breve
  entry: path.resolve(__dirname, "src", "main.js"),
  
  // Ponto de saída: onde o Webpack vai jogar o código final (pasta dist)
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  
  // Configuração do nosso servidor local
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true, // Abre o navegador automaticamente
    liveReload: true, // Atualiza a página quando salvarmos algo
  },
  
  // Plugins (Neste caso, ensinando a ler o nosso index.html)
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
  
  // Regras para os tradutores (Loaders)
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};