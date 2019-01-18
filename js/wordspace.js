$(function(){
    var contents=$(".other_nets ol a")
    for(i=0;i<contents.length;i++){
        var content=contents.eq(i);
        if(len(content.text())==4) content.css("margin-right","88px")
        if(len(content.text())==5) content.css("margin-right","80px")
        if(len(content.text())==6) content.css("margin-right","72px")
        if(len(content.text())==7) content.css("margin-right","64px")
        if(len(content.text())==8) content.css("margin-right","56px")
        if(len(content.text())==9) content.css("margin-right","48px")
        if(len(content.text())==10) content.css("margin-right","40px")
        if(len(content.text())==11) content.css("margin-right","32px")
        if(len(content.text())==12) content.css("margin-right","24px")
        if(len(content.text())==13) content.css("margin-right","16px")
        if(len(content.text())==14) content.css("margin-right","8px")
    }
});

// 判断长度
function len(s) {
    var l= 0;
    var a = s.split("");
    for (var i=0;i<a.length;i++) {
        if ((a[i].charCodeAt(0)<126&&a[i].charCodeAt(0)>0)||(a[i].charCodeAt(0)<65440&&a[i].charCodeAt(0)>65375)) {
            l++;
        } else {
            l+=2;
        }
    }
    return l;
}

