const path = require('path')

const config = {
    mode:'development',
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}

module.exports = config