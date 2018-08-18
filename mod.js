/***********************************************************
*基于JQ+JS对象实现的个人web组件框架
*创建时间：2016年10月12日23:28:38
*最后修改时间：2016年10月12日23:28:47
***********************************************************/





/*
*带描述的无序列表组件
*/
var Mlist={
	cNew:function(id,mkTitle){
		var m_id=id;//存储获取的容器id
		var m_mkTitle=mkTitle//存储模块标题
		//alert(m_mkTitle);
		var mlist={};
		//设置容器初始化：1.填充结构代码;2.添加组件className
		var intHTMLStr;
		//如果设置了模块标题
		if(typeof(m_mkTitle)!="undefined"){
			intHTMLStr="<h3>" + m_mkTitle + "</h3><ul></ul>";
		}else{
			intHTMLStr="<ul></ul>";
		}
		$("#" + m_id ).html(intHTMLStr).addClass("Mlist");
		//alert($("#" + m_id).html());
		//普通列表项HTML模板字串
		var itemStr="<li><a href='a_link'><h3>i_title</h3></a><span>i_dsc</span></li>"
		//图文列表项HTML模板字串
		var imgTextItemStr="<li class='imgText'><a href='a_link'><div class='imgC'><img src='i_imgUrl'></div><h3>i_title</h3></a><span>i_dsc</span></li>"
		//*************方法**************
		//添加项
		mlist.add=function(title,dsc,url){
			var nItem=itemStr.replace(/i_title/,title);
				nItem=nItem.replace(/i_dsc/,dsc);
				nItem=nItem.replace(/a_link/,url);
			$("#" + m_id + ">ul").append(nItem);
		}
		//添加图文项
		mlist.addImgText=function(title,dsc,url,imgUrl){
			var nItem=imgTextItemStr.replace(/i_title/,title);
				nItem=nItem.replace(/i_dsc/,dsc);
				nItem=nItem.replace(/a_link/,url);
				nItem=nItem.replace(/i_imgUrl/,imgUrl);
			$("#" + m_id + ">ul").append(nItem);
		}
		//移除项
		mlist.remove=function(index){
			$("#" + m_id + ">ul>li:eq(" + index + ")").remove();
		}
		
		return mlist;
	}
}
//组件框架全局对象mod
//用于提供统一的创建旗下的组件的入口
var mod={
	cMlist:function(id,mkTitle){var mlist=Mlist.cNew(id,mkTitle);return mlist;}
}