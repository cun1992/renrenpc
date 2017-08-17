//define("p2p:page/uplan/index/index.js",function(require,exports,module){
//    "use strict";function _classCallCheck(instance,Constructor){
//        if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}
//    var $=require("common:widget/lib/jquery/jquery"),
//        service=require("common:widget/ui/service/service-factory"),
//        p2pService=service.getService("p2p"),
//        React=require("common:node_modules/react/react"),
//        ReactDOM=require("common:node_modules/react-dom/index"),
//        ReactHistoryUPlan=require("p2p:widget/uplan/wdg-index-list/history/history.jsx"),
//        ReactSlick=require("common:widget/react-ui/RSlick/RSlick.jsx"),
//        UplanIndex=function(){function UplanIndex(){_classCallCheck(this,UplanIndex),
//            this.uplanPeriods="",
//            this.uplanPeriodArr=[],
//            this.$uplanAmount=null,
//            this.$uplanAmountErrorlabel=null,
//            this.$calcbt=null
//        }return UplanIndex.prototype.init=function(historyData,bannerData,uplanPeriods){
//            this.uplanPeriods=uplanPeriods,
//            this.uplanPeriodArr=uplanPeriods?uplanPeriods.split(","):[],
//                this.initBanner(document.getElementById("banner-box"),bannerData),
//                this.initCalJQIDData(),this.cal(),this.bindCalEvent(),
//                this.initProductList(document.getElementById("uplanIndexList"),
//                    historyData)},UplanIndex.prototype.initBanner=function(dom,banner){
            //banner&&ReactDOM.render(React.createElement(ReactSlick,{bannerData:banner}),dom)},
            //UplanIndex.prototype.initCalJQIDData=function(){this.$uplanAmount=$("#uplanAmount"),
            //    this.$uplanAmountErrorlabel=$("#uplanAmount-error-label"),
            //    this.$calcbt=$("#calcbt")},
            //UplanIndex.prototype.initProductList=function(dom,historyData){ReactDOM.render(React.createElement(ReactHistoryUPlan,{historyData:historyData,limit:"10",
            //    serviceName:"p2p.getFinancePlanList"}),dom)},
            //UplanIndex.prototype.cal=function(){var _this2=this,
            //    lockPeriods=this.uplanPeriods,
            //    amount=$("#uplanAmount").val();
            //    if(this.updateAnimate(),
            //            this.validate(this.$uplanAmount,this.$uplanAmountErrorlabel)){
            //        var params={
            //            amount:amount,lockPeriods:lockPeriods,cashType:"INVEST"};
            //        p2pService.getUplanCalByLockedPeriod(params).then(function(res){
            //            if(res.requestStatus===p2pService.STATUS.ERROR)return void _this2.calAnimateAndSetV(null);
            //            var data=res.data.data;_this2.calAnimateAndSetV(data)})}},
            //UplanIndex.prototype.calAnimateAndSetV=function(data){for(var _this=this,
            //     uplanPeriodArr=this.uplanPeriodArr,length=this.uplanPeriodArr.length,i=0;length>i;i++){
            //    var period=uplanPeriodArr[i],width=_this.getWidth(i);$("#income"+period).animate({width:width},800);var rv="v"+period,v=data?data[rv]?data[rv]:"0.00":0;_this.setIncomeV(period,v)}},UplanIndex.prototype.setIncomeV=function(period,v){v+="元",$("#incomeV"+period).text(v)},UplanIndex.prototype.getWidth=function(index){var width="35px";switch(index){case 1:width="51px";break;case 2:width="90px";break;case 3:width="109px";break;case 4:width="138px";break;case 5:width="185px";break;default:width="35px"}return width},UplanIndex.prototype.updateAnimate=function(){$(".cal-income").animate({width:"0px"})},UplanIndex.prototype.bindCalEvent=function(){var _this3=this;this.$uplanAmount.on("keyup",function(){_this3.validate(_this3.$uplanAmount,_this3.$uplanAmountErrorlabel)}),this.$calcbt.on("click",function(){_this3.cal()})},UplanIndex.prototype.validate=function($amountObj,$errorMsg){var value=$amountObj.val();return $amountObj.val(value.replace(/\D/g,"")),/^\d{1,}$/.test(value)&&value%1e3==0&&0!=value?($errorMsg.css("visibility","hidden"),$amountObj.removeClass("error-input").addClass("success-input"),!0):($errorMsg.css("visibility","visible"),$amountObj.removeClass("success-input").addClass("error-input"),!1)},UplanIndex}(),uplanIndex=new UplanIndex;module.exports=uplanIndex});
$(function(){
    $.ajax({
        type:"get",
        url:"getuplan",
        data:"",
        dataType:"json",
        success:function(msg)
        {
            var str ='<ul>'
            $.each(msg.missign,function(i,v){
                str+='<li>'
                if(v.productResid <=0){
                    str+='<a class="cover" href="http://www.shixun.com/tp5/public/viewdetails?id='+ v.id+'" target="_blank">'
                }else{
                    str+='<a class="cover" href="http://www.shixun.com/tp5/public/viewdetails?id='+ v.id+'" target="_blank">'
                }
                str+='<p class="time">'
                str+='<span class="month"><img src="picture/time_53c7a37_1.png"/><em>'+ v.deadline+'个月</em></span>'
                str+='<img src="picture/uplan_xian_f5e9d9a_1.png" class="xian">'
                str+='</p>'
                str+='<p class="rate mtop">'
                str+='<span class="num"><i class="fu">'+ v.rate+'</i><em>%</em></span>'
                str+='<span class="nian">预期年化利率</span>'
                str+='<span class="highest"></span>'
                str+='</p>'
                str+='<p class="name">'
                if(v.productResid >0){
                    str+='<em ><i></i>立即加入</em>'
                }else{
                    str+='<em ><i></i>查看详情</em>'
                }
                str+='</p>'
                str+='</a>'
                str+='</li>'
            })
            str+='</ul>'
            $('.uplan-list-less').html(str);
        }
    })
})


$("#uplanAmount").bind("input ", function() {
    var invenum = $(this).val();
    if(invenum/1000){
        var str = invenum/1000;
        var ex = /^\d+$/;
        if (ex.test(str)) {
            $("#uplanAmount-error-label").css({"visibility":"hidden"})
        }else{
            $("#uplanAmount-error-label").css({"visibility":"visible"})
        }
    }
});
$("#calcbt").on("click",function(){
    var invenum = $("#uplanAmount").val();
    if(invenum/1000){
        var str = invenum/1000;
        var ex = /^\d+$/;
        if (ex.test(str)) {
            var profit1 = invenum*0.06/12;
            var profit3 = invenum*0.066/12*3
            var profit6 = invenum*0.072/12*6
            var profit12 = invenum*0.088/12*12
            var profit24 = invenum*0.1/12*24
            var num1 =profit1.toFixed(2)
            var num3 = profit3.toFixed(2)
            var num6 = profit6.toFixed(2)
            var num12 = profit12.toFixed(2)
            var num24 = profit24.toFixed(2)
            $("#incomeV1").text(num1);
            $("#incomeV3").text(num3);
            $("#incomeV6").text(num6);
            $("#incomeV12").text(num12);
            $("#incomeV24").text(num24);
        }else{

        }
    }
});
$(function(){
    $.ajax({
        url:"uplanlist",
        type:"get",
        data:"",
        dataType:'json',
        success:function(msg)
        {
            if(msg.code ==200)
            {
                var str = '<table width="1100px">';
                str+='<tr>'
                str+='<th>计划名称</th>'
                str+='<th>加入人次</th>'
                str+='<th>计划金额</th>'
                str+='<th><span color="red">预期年利率</span></th>'
                str+='<th>累计利息收益</th>'
                str+='<th>状态</th>'
                str+='</tr>'
                $.each(msg.missign,function(i,v){
                    str+='<tr style="height: 40px">'
                    str+='<td>'+ v.productName+'</td>'
                    str+='<td>360</td>'
                    str+='<td>'+v.productAmount+'</td>'
                    str+='<td><div class="result-num fn-left">'+v.rate+'</div></td>'
                    str+='<td>13123</td>'
                    str+='<td>'+ v.id+'</td>'
                    str+='</tr>'
                })
                str+='</table>'
                $('#uplanIndexList').html(str);
                var page = msg.page;

                var pages =''
                for(var i=1;i<=msg.pagecount;i++)
                {
                    if(i==page){
                    pages+='<li class="active " data-reactid=".1.2.0.1:$key1/=10"><a class="pagedata" data-reactid=".1.2.0.1:$key1/=10.0" >'+i+'</a>';
                    }else{
                    pages+='<li data-reactid=".1.2.0.1:$key1/=10"><a class="pagedata" data-reactid=".1.2.0.1:$key1/=10.0">'+i+'</a>';
                    }
                }
                    $('#listpage').html(pages);
               // alert(msg.pagecount);
                    $('.pagedata').on('click',function(){

                        var pagethis = $(this).text();
                        $.ajax({
                            type:"get",
                            data:{page:pagethis},
                            url:"uplanlist",
                            dataType:"json",
                            success:function(msg){
                                var str = '<table width="1100px">';
                                str+='<tr>'
                                str+='<th>计划名称</th>'
                                str+='<th>加入人次</th>'
                                str+='<th>计划金额</th>'
                                str+='<th><span color="red">预期年利率</span></th>'
                                str+='<th>累计利息收益</th>'
                                str+='<th>状态</th>'
                                str+='</tr>'
                                $.each(msg.missign,function(i,v){
                                    str+='<tr style="height: 40px">'
                                    str+='<td>'+ v.productName+'</td>'
                                    str+='<td>360</td>'
                                    str+='<td>'+v.productAmount+'</td>'
                                    str+='<td><div class="result-num fn-left">'+v.rate+'</div></td>'
                                    str+='<td>13123</td>'
                                    str+='<td>'+ v.id+'</td>'
                                    str+='</tr>'
                                })
                                str+='</table>'
                                $('#uplanIndexList').html(str);
                                $('.pagethiss').text(msg.page);
                                //var page = msg.page;
                                //
                                //var pages =''
                                //for(var i=1;i<=msg.pagecount;i++)
                                //{
                                //    if(i==page){
                                //        pages+='<li class="active " data-reactid=".1.2.0.1:$key1/=10"><a class="pagedata" data-reactid=".1.2.0.1:$key1/=10.0" >'+i+'</a>';
                                //    }else{
                                //        pages+='<li data-reactid=".1.2.0.1:$key1/=10"><a class="pagedata" data-reactid=".1.2.0.1:$key1/=10.0">'+i+'</a>';
                                //    }
                                //}
                                //$('#listpage').html(pages)
                            }
                        })
                    })
            }
        }
    })
})


