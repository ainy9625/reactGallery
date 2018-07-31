require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
//获取图片相关的数据
var imageDatas=require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转换为图片URL路径信息
imageDatas=(function getImageURL(imageDatasArr){
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData=imageDatasArr[i];
    singleImageData.ImageUrl=require('../images/'+singleImageData.fileName);
    imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
}) (imageDatas);



class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="img-sev"></section>
          <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
