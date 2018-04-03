var formidable = require('formidable');
var fs = require('fs');  //node.js核心的文件处理模块
// var progressStream = require('progress-stream');

exports.upload = function (req, res, next) {
    var message = '';
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';                    //设置编辑
    form.uploadDir = 'public/upload/';          //设置上传目录
    form.keepExtensions = true;                 //保留后缀
    form.maxFieldsSize = 20 * 1024 * 1024;       //文件大小
    
    form.parse(req, function(err, fields, files) {
        if(err) {
            res.send({
                retcode: -999,
                msg: JSON.stringify(err)
            });
        }
        fs.renameSync(files.data.path, form.uploadDir+files.data.name);
    });
    // received -> 接收到的表单数据, expected -> 预计接受的表单数据
    form.on('progress', function(received, expected) {
        console.log(((received/expected)*100).toFixed(2),'% uploaded');
    });
    form.on('end', function() {
        res.send({
            retcode: 0,
            msg: '上传完毕！'
        })
    })
};