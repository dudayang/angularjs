// ��ӿ�����

app.controller("fans",function($scope){
 $scope.fan = [
	        { name: "周硕", introduce:"设计师，博客",head:"images/a5.jpg"},
	        { name: "刘旭伟", introduce:"作家，杂志编辑",head:"images/a6.jpg" },
	        { name: "土豪", introduce:"艺术总监，电影剪辑",head:"images/a3.jpg" },
	        { name: "学霸", introduce:"音乐家，运动员",head:"images/a4.jpg"}
	         ];	
})
app.controller('m_nav',function($scope){
            $scope.mynav=[
                {title:"最新动态",link:"/"},
                {title:"简介",link:"/introduction"},
                {title:"消息",link:"/message"}
            ];
       })
