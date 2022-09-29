$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $(".move-1").each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 200) {
          $(this).addClass("move-after");
        }
      });
      $(".move-2").each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 200) {
          $(this).addClass("move-after");
        }
      });

      if (window.matchMedia('(max-width: 600px)').matches) {
        $(".move-1").each(function () {
          const targetPosition = $(this).offset().top;
          if (scroll > targetPosition - windowHeight +100) {
            $(this).addClass("move-after");
          }
        });
        $(".move-2").each(function () {
          const targetPosition = $(this).offset().top;
          if (scroll > targetPosition - windowHeight +100) {
            $(this).addClass("move-after");
          }
        });
      }

      
    });
          
  
        
  

    $("a[href^='#']").click(function(){
      let speed = 1000;
      let type = "swing";
      let href = $(this).attr("href");
      let target = $(href == "#index" ? "html" : href);
      let position = target.offset().top;
      $("body,html").animate({scrollTop:position},speed, type);
      return false;

    });

    var bar = new ProgressBar.Line(splash_text, {//id名を指定
      easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
      duration: 2000,//時間指定(1000＝1秒)
      strokeWidth: 0.2,//進捗ゲージの太さ
      color: '#555',//進捗ゲージのカラー
      trailWidth: 0.2,//ゲージベースの線の太さ
      trailColor: '#bbb',//ゲージベースの線のカラー
      text: {//テキストの形状を直接指定				
        style: {//天地中央に配置
          position: 'absolute',
          left: '50%',
          top: '50%',
          padding: '0',
          margin: '-30px 0 0 0',//バーより上に配置
          transform:'translate(-50%,-50%)',
          'font-size':'25px',
          color: '#000',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
      },
      step: function(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
      }
    });
    
    //アニメーションスタート
    bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
      $("#splash").delay(1000).fadeOut(1000);//アニメーションが終わったら#splashエリアをフェードアウト
    });  
    
    $('.img-wrap img:nth-child(n+2)').hide();
      setInterval(function() {
        $(".img-wrap img:first-child").fadeOut(3000);
        $(".img-wrap img:nth-child(2)").fadeIn(3000);
        $(".img-wrap img:first-child").appendTo(".img-wrap");
      }, 6000);
   

}); 

 
