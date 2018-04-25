const path = require('path');
const config={
    mode: 'development',
    entry:{
        //app:"./js/app.js",
        //AppTodo:"./js/component/AppTodo.jsx",
        index:"./js/index.js"
    },
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/i,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["es2015","react"]
                    }
                }
            },
            {
                test:/\.s?css$/i,
                use:[{
                    loader:"style-loader"
                },
                {
                    loader:"css-loader"
                }
                ]
            }
        ]
    },
    resolve:{
        extensions: [".js", ".json",".jsx",".css"]
    }
};
//特别注意此处，处理css时候，一定要将style-loader写在前边，css-loader写在后边处理，否则会报错
module.exports=config;