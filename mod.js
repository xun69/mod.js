/***********************************************************
*����JQ+JS����ʵ�ֵĸ���web������
*����ʱ�䣺2016��10��12��23:28:38
*����޸�ʱ�䣺2016��10��12��23:28:47
***********************************************************/





/*
*�������������б����
*/
var Mlist={
	cNew:function(id,mkTitle){
		var m_id=id;//�洢��ȡ������id
		var m_mkTitle=mkTitle//�洢ģ�����
		//alert(m_mkTitle);
		var mlist={};
		//����������ʼ����1.���ṹ����;2.������className
		var intHTMLStr;
		//���������ģ�����
		if(typeof(m_mkTitle)!="undefined"){
			intHTMLStr="<h3>" + m_mkTitle + "</h3><ul></ul>";
		}else{
			intHTMLStr="<ul></ul>";
		}
		$("#" + m_id ).html(intHTMLStr).addClass("Mlist");
		//alert($("#" + m_id).html());
		//��ͨ�б���HTMLģ���ִ�
		var itemStr="<li><a href='a_link'><h3>i_title</h3></a><span>i_dsc</span></li>"
		//ͼ���б���HTMLģ���ִ�
		var imgTextItemStr="<li class='imgText'><a href='a_link'><div class='imgC'><img src='i_imgUrl'></div><h3>i_title</h3></a><span>i_dsc</span></li>"
		//*************����**************
		//�����
		mlist.add=function(title,dsc,url){
			var nItem=itemStr.replace(/i_title/,title);
				nItem=nItem.replace(/i_dsc/,dsc);
				nItem=nItem.replace(/a_link/,url);
			$("#" + m_id + ">ul").append(nItem);
		}
		//���ͼ����
		mlist.addImgText=function(title,dsc,url,imgUrl){
			var nItem=imgTextItemStr.replace(/i_title/,title);
				nItem=nItem.replace(/i_dsc/,dsc);
				nItem=nItem.replace(/a_link/,url);
				nItem=nItem.replace(/i_imgUrl/,imgUrl);
			$("#" + m_id + ">ul").append(nItem);
		}
		//�Ƴ���
		mlist.remove=function(index){
			$("#" + m_id + ">ul>li:eq(" + index + ")").remove();
		}
		
		return mlist;
	}
}
//������ȫ�ֶ���mod
//�����ṩͳһ�Ĵ������µ���������
var mod={
	cMlist:function(id,mkTitle){var mlist=Mlist.cNew(id,mkTitle);return mlist;}
}