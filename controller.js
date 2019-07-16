var buttonUp = document.querySelectorAll('.class-button-up')[0] ;
var buttonDown = document.querySelectorAll('.class-button-down')[0] ;
var divDotContainer = document.querySelectorAll('.class-dot-container')[0] ;
var divButtonContainer = document.querySelectorAll('.button-container')[0] ;

function autoPlay() {
    var intervalId = setInterval(function() {
        // 获取图片元素
        var imgElement = document.querySelectorAll('.img-show')[0] ;
        var imgId = parseInt(imgElement.dataset.imgId) ;
        console.log(imgId) ;
        if (imgId === 4) {
            changeDotColor(imgId, 1) ;
            imgElement.dataset.imgId = 1 ;
            imgElement.src = `img/0001.jpg` ;
        } else {
            var newImgId = imgId + 1 ;
            changeDotColor(imgId, newImgId) ;
            imgElement.dataset.imgId = newImgId ;
            imgElement.src = `img/000${newImgId}.jpg` ;
        }
    }, 2000) ;

    return intervalId ;
}

// 获取定时器函数返回的id
var intervalId = autoPlay() ;

divDotContainer.addEventListener('click', function(e) {
    // 获取点击的目标元素
    var target = e.target ;
    var id = parseInt(target.dataset.id) ;
    // 获取图片元素
    var imgElement = document.querySelectorAll('.img-show')[0] ;
    var imgId = parseInt(imgElement.dataset.imgId) ;



    if (!id) {
        return ;
    }
    // 点击到的是圆点的元素
    if (imgId === id) {
        // 点击到的是当前图片对应的圆点，则结束
        return ;
    } else {

        // 首先清除定时器，使用clearInterval()，要求传入一个定时器返回的id，就是intervalId
        clearInterval(intervalId) ;

        console.log("圆点id是: ", id) ;
        console.log("图片id是: ", imgId) ;
        changeDotColor(imgId, id) ;
        imgElement.dataset.imgId = id ;
        // console.log(imgId) ;
        imgElement.src = `img/000${id}.jpg` ;


    }
    // 完成时间以后，继续调用定时器
    intervalId = autoPlay() ;
})


divButtonContainer.addEventListener('click', function(e) {
    var target = e.target ;
    // 获取图片元素
    var imgElement = document.querySelectorAll('.img-show')[0] ;
    // html5新增加了自定义数据属性，也就是 data-* 自定义属性
    // 在html5中，我们可以以data-为前缀设置自定义属性，如：data-id="5"
    // 获取方式是通过元素的dataset属性来获取，如data-id，则获取方式是dataset.id，不用加前缀data-
    // 注意：data-属性名如果包含了连字符，例如：data-img-id ，连字符将被去掉，并转换为驼峰式的命名，即dataset.imgId
    var imgId = parseInt(imgElement.dataset.imgId) ;

    // 获取定时器函数返回的id
    // var intervalId = autoPlay() ;
    clearInterval(intervalId) ;

    if (target.classList.contains('class-button-up')) {
        // 清除定时器
        // clearInterval(intervalId) ;
        if (imgId === 1) {
            imgElement.dataset.imgId = 4;
            changeDotColor(imgId, 4) ;
            imgElement.src="img/0004.jpg" ;
        } else {
            var prevId = imgId - 1 ;
            imgElement.dataset.imgId = prevId ;
            changeDotColor(imgId, prevId) ;
            imgElement.src = `img/000${prevId}.jpg` ;
        }
        // 事件结束以后，继续启用定时器
        // autoPlay() ;
    } else if (target.classList.contains('class-button-down')) {
        clearInterval(intervalId) ;
        if (imgId === 4) {
            imgElement.dataset.imgId = 1;
            changeDotColor(imgId, 1) ;
            imgElement.src="img/0001.jpg" ;
        } else {
            var nextId = imgId + 1 ;
            imgElement.dataset.imgId = nextId ;
            changeDotColor(imgId, nextId) ;
            imgElement.src = `img/000${nextId}.jpg` ;
        }
        // 事件结束以后，继续启用定时器
        // autoPlay() ;
    }
    intervalId = autoPlay() ;

})



// 点击上一张，图片上翻
// buttonUp.addEventListener('click', function(e) {
    // console.log(e)
    // 获取图片元素
//     var imgElement = document.querySelectorAll('.img-show')[0] ;
//     var imgId = parseInt(imgElement.dataset.imgId) ;
//
//     //
//
//
//     // console.log(typeof(imgId))
//     if (imgId === 1) {
//         imgElement.dataset.imgId = 4;
//         changeDotColor(imgId, 4) ;
//         imgElement.src="img/0004.jpg" ;
//     } else {
//         var prevId = imgId - 1 ;
//         imgElement.dataset.imgId = prevId ;
//         changeDotColor(imgId, prevId) ;
//         imgElement.src = `img/000${prevId}.jpg` ;
//     }
//
// })


// buttonDown.addEventListener('click', function(e) {
    // console.log(e)
    // var imgElement = document.querySelectorAll('.img-show')[0] ;
    // html5新增加了自定义数据属性，也就是 data-* 自定义属性
    // 在html5中，我们可以以data-为前缀设置自定义属性，如：data-id="5"
    // 获取方式是通过元素的dataset属性来获取，如data-id，则获取方式是dataset.id，不用加前缀data-
    // 注意：data-属性名如果包含了连字符，例如：data-img-id ，连字符将被去掉，并转换为驼峰式的命名，即dataset.imgId
    //
    // var imgId = parseInt(imgElement.dataset.imgId) ;
    // console.log(typeof(imgId))
    // 第一种：判断边界
//     if (imgId === 4) {
//         imgElement.dataset.imgId = 1;
//         changeDotColor(imgId, 1) ;
//         imgElement.src="img/0001.jpg" ;
//     } else {
//         var nextId = imgId + 1 ;
//         imgElement.dataset.imgId = nextId ;
//         changeDotColor(imgId, nextId) ;
//         imgElement.src = `img/000${nextId}.jpg` ;
//     }
//
// })


function changeDotColor(currentImgId, prevOrNextId) {
    var dotElementList = document.querySelectorAll('.class-dot') ;
    // console.log(dotElementList) ;
    for (var i = 0; i < dotElementList.length; i++) {
        var dotElement = dotElementList[i] ;
        var dotId = parseInt(dotElement.dataset.id) ;
        // 使用节点的classList属性，以列表的形式获取所有class
        var classList = dotElement.classList ;
        if (dotId === currentImgId) {
            // 调用classList属性的remove()方法，可以移除指定class
            classList.remove('class-current-red') ;
        }
        if (dotId == prevOrNextId) {
            classList.add('class-current-red') ;
        }
    }
}
