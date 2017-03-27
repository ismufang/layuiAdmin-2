
/**
 * 控制iframe窗口的刷新操作
 */

var iframeObjName;

//父级弹出页面
function page(title,url,obj,w,h) {
    if (title == null || title == '') {
        title=false;
    };
    if (url == null || url == '') {
        url="404.html";
    };
    if (w == null || w == '') {
        w='700px';
    };
    if (h == null || h == '') {
        h='350px';
    };
    iframeObjName=obj;
    var index=layer.open({
        type: 2,
        title:title,
        area: [w, h],
        fixed: false, //不固定
        maxmin: true,
        content: url
    });
}

/**
 * 刷新子页,关闭弹窗
 */
function refresh() {
    //根据传递的name值，获取子iframe窗口，执行刷新
    if(window.frames[iframeObjName]){
        window.frames[iframeObjName].location.reload();

    }else{
        window.location.reload();
    }

    layer.closeAll();
}