module.exports = {
    entry: 'mocha!./tests/test.js',
    output: {
        filename: 'test.build.js',
        path: 'tests/',
        publicPath: 'http://localhost:8080/tests'
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
          { test: /(\.css|\.less|\.scss)$/, loader: 'null-loader', exclude: [/build/]},
          { test: /(\.jpg|\.jpeg|\.png|\.gif)$/, loader: 'null-loader'}
        ]
    }
};
