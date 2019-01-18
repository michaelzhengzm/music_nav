// 音乐列表
$(function ()
{
    $(".background_music_type li").hover(function ()
    {
        //获取点击的元素给其添加样式，将其兄弟元素的样式移除
        $(this).addClass("choose").siblings().removeClass("choose");
        //获取选中元素的下标
        var index = $(this).index();
        $(".background_music_list ul").eq(index).addClass("active").siblings().removeClass("active");
    });
});



// 随机播放背景音乐
$(function ()
{
    var bgmusic_list=["music/Dream It Possible.mp3","music/Five Hundred Miles.mp3","music/Whistle.mp3","music/豆浆油条.mp3","music/光棍.mp3","music/君が好きだと叫びたい.mp3","music/右手边.mp3"];
    var i=Math.round(Math.random()*(bgmusic_list.length-1));
    var current_src=bgmusic_list[i];
    $("#bgmusic").attr("src",current_src);//随机第一首
    $(".next").click(function (){//点击下一首
        var j=Math.round(Math.random()*(bgmusic_list.length-1));
        var next_src=bgmusic_list[j]
        $("#bgmusic").attr("src",next_src);
    });
     $("#bgmusic").ended(function () {
         var k=Math.round(Math.random()*(bgmusic_list.length-1));
         var new_src=bgmusic_list[k]
         $("#bgmusic").attr("src",new_src);
         $("#bgmusic")[0].play();
     })

});


// 背景音乐播放暂停
$(function ()
{
    var bgmusic=$("#bgmusic")[0];
    $(".pause").click(function ()
    {
        bgmusic.pause();
    });
    $(".play").click(function ()
    {
        bgmusic.play();
    });
});


// 点击音乐弹出窗口
$(function ()
{
    $(".background_music_list li a").click(function ()
    {
        $("#bgmusic")[0].pause();
        $(this).attr("target","_blank");
        var current_url= $(this).attr("href");
        window.open(current_url, "", "height=400, width=400, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no left=500 top=300")
    });

    //点击弹出新网址
    $(".other_nets_content ol a").attr("target","_blank");
});




