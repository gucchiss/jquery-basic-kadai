// HTMLドキュメント読み込み官僚
$(window).on('load',function(){
  console.log('loadイベントが発生しました');
 });
$(function() {
  // 画面をスクロールしたとき
   $(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
   });
});