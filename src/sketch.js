var HEADER_RATIO = 8;
var PIANO_RATIO = 8;
var PIANO_HEAD_RATIO = 32;
var KEYBOARD_NUMBER = 60;
var BAR_NUMBER = 2;
var im = KEYBOARD_NUMBER-(5*KEYBOARD_NUMBER/12);
var w_ = (windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16);
var h_ = (windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER;
//var note = new Array();
//var note_flag=new Array();
var input = 0;
var erase = 0;
var playing = 0;
var convert = 0;
var texts = "2";
var img;




function preload(){
  note_sound = new Array();
  note_sound[0] = loadSound('assets/036.wav');
  note_sound[1] = loadSound('assets/037.wav');
  note_sound[2] = loadSound('assets/038.wav');
  note_sound[3] = loadSound('assets/039.wav');
  note_sound[4] = loadSound('assets/040.wav');
  note_sound[5] = loadSound('assets/041.wav');
  note_sound[6] = loadSound('assets/042.wav');
  note_sound[7] = loadSound('assets/043.wav');
  note_sound[8] = loadSound('assets/044.wav');
  note_sound[9] = loadSound('assets/045.wav');
  note_sound[10] = loadSound('assets/046.wav');
  note_sound[11] = loadSound('assets/047.wav');
  note_sound[12] = loadSound('assets/048.wav');
  note_sound[13] = loadSound('assets/049.wav');
  note_sound[14] = loadSound('assets/050.wav');
  note_sound[15] = loadSound('assets/051.wav');
  note_sound[16] = loadSound('assets/052.wav');
  note_sound[17] = loadSound('assets/053.wav');
  note_sound[18] = loadSound('assets/054.wav');
  note_sound[19] = loadSound('assets/055.wav');
  note_sound[20] = loadSound('assets/056.wav');
  note_sound[21] = loadSound('assets/057.wav');
  note_sound[22] = loadSound('assets/058.wav');
  note_sound[23] = loadSound('assets/059.wav');
  note_sound[24] = loadSound('assets/060.wav');
  note_sound[25] = loadSound('assets/061.wav');
  note_sound[26] = loadSound('assets/062.wav');
  note_sound[27] = loadSound('assets/063.wav');
  note_sound[28] = loadSound('assets/064.wav');
  note_sound[29] = loadSound('assets/065.wav');
  note_sound[30] = loadSound('assets/066.wav');
  note_sound[31] = loadSound('assets/067.wav');
  note_sound[32] = loadSound('assets/068.wav');
  note_sound[33] = loadSound('assets/069.wav');
  note_sound[34] = loadSound('assets/070.wav');
  note_sound[35] = loadSound('assets/071.wav');
  note_sound[36] = loadSound('assets/072.wav');
  note_sound[37] = loadSound('assets/073.wav');
  note_sound[38] = loadSound('assets/074.wav');
  note_sound[39] = loadSound('assets/075.wav');
  note_sound[40] = loadSound('assets/076.wav');
  note_sound[41] = loadSound('assets/077.wav');
  note_sound[42] = loadSound('assets/078.wav');
  note_sound[43] = loadSound('assets/079.wav');
  note_sound[44] = loadSound('assets/080.wav');
  note_sound[45] = loadSound('assets/081.wav');
  note_sound[46] = loadSound('assets/082.wav');
  note_sound[47] = loadSound('assets/083.wav');
  note_sound[48] = loadSound('assets/084.wav');
  note_sound[49] = loadSound('assets/085.wav');
  note_sound[50] = loadSound('assets/086.wav');
  note_sound[51] = loadSound('assets/087.wav');
  note_sound[52] = loadSound('assets/088.wav');
  note_sound[53] = loadSound('assets/089.wav');
  note_sound[54] = loadSound('assets/090.wav');
  note_sound[55] = loadSound('assets/091.wav');
  note_sound[56] = loadSound('assets/092.wav');
  note_sound[57] = loadSound('assets/093.wav');
  note_sound[58] = loadSound('assets/094.wav');
  note_sound[59] = loadSound('assets/095.wav');
  note_sound[60] = loadSound('assets/096.wav');

　img = loadImage("nugget.png");




}

//setupで配列の実行はローカルで定義してやらんといかんらしい。
function setup() {
  
  image(img,100,100);
  //varを外すとグローバルになる。これだいじ。
  note = new Array();
  note_flag = new Array();
  text_flag = new Array();

  for(var i=0; i<KEYBOARD_NUMBER;i++){
    //1次元配列の各番地に配列を作成する。
    note[i] = new Array();
    note_flag[i] = new Array();
    text_flag[i] = new Array();

    for(var j=0; j<(BAR_NUMBER*4*4)*(2*10+1); j++){
      //0で埋める。
      note[i][j] =i*100+j;
      String(note[i][j]);
      note_flag[i][j] = 0;
      text_flag[i][j] = 0;
    }
  }

 for(i=0; i<10; i++){
   for(j=0; j<BAR_NUMBER*4*4; j++){
     note[i][j]='0'+note[i][j];
   }
  }

 for(j=0; j<BAR_NUMBER*4*4; j++){
  note[0][j]='0'+note[0][j];
 }

 for(j=0; j<10; j++){
  note[0][j]='0'+note[0][j];
 }





  //Canvas関連はなぜか1/2の大きさでしかだしてくれないのでここでは2倍の値になっている。
  createCanvas(windowWidth*2, windowHeight*2);
  startLoad();

  /*var hoge=1;
  alert(hoge);
  alert(BAR_NUMBER);*/

  //hoge[0]=1;
  //hoge[1]=2;
  //hoge[2]=3;

  //音をロードする。まだ試験的なので４つくらいしか入れてない。
  
  

}

function draw() {






  background(0);

  
  
  //ディスプレイの枠
  stroke(255,0,0);
  line(0, windowHeight/HEADER_RATIO, windowWidth, windowHeight/HEADER_RATIO);
  line(windowWidth/PIANO_RATIO, windowHeight/PIANO_RATIO, windowWidth/PIANO_RATIO, windowHeight);
  line(windowWidth/PIANO_HEAD_RATIO, windowHeight/HEADER_RATIO, windowWidth/PIANO_HEAD_RATIO,windowHeight);

  //ピアノの白鍵

  fill(255);
  stroke(0);
  rect(windowWidth/PIANO_HEAD_RATIO, windowHeight/HEADER_RATIO, (windowWidth/PIANO_RATIO)-(windowWidth/PIANO_HEAD_RATIO), windowHeight-windowHeight/HEADER_RATIO);
  for(i = 0; i < im-1; i++){
    line(windowWidth/PIANO_HEAD_RATIO, (windowHeight/HEADER_RATIO)+(windowHeight-windowHeight/HEADER_RATIO)/im*(i+1),
    windowWidth/PIANO_RATIO,(windowHeight/HEADER_RATIO)+(windowHeight-windowHeight/HEADER_RATIO)/im*(i+1));
  }

  //ピアノの黒鍵
  stroke(0);
  fill(0);
  for(i = 0; i<= KEYBOARD_NUMBER/12-1 ; i++){
    rect(windowWidth/PIANO_HEAD_RATIO, (windowHeight/HEADER_RATIO)+(windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER*(1+12*i),
          (windowWidth/PIANO_RATIO-windowWidth/PIANO_HEAD_RATIO)/5*3, (windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER);

    rect(windowWidth/PIANO_HEAD_RATIO, (windowHeight/HEADER_RATIO)+(windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER*(3+12*i),
          (windowWidth/PIANO_RATIO-windowWidth/PIANO_HEAD_RATIO)/5*3, (windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER);

    rect(windowWidth/PIANO_HEAD_RATIO, (windowHeight/HEADER_RATIO)+(windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER*(5+12*i),
          (windowWidth/PIANO_RATIO-windowWidth/PIANO_HEAD_RATIO)/5*3, (windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER);

    rect(windowWidth/PIANO_HEAD_RATIO, (windowHeight/HEADER_RATIO)+(windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER*(8+12*i),
          (windowWidth/PIANO_RATIO-windowWidth/PIANO_HEAD_RATIO)/5*3, (windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER);

    rect(windowWidth/PIANO_HEAD_RATIO, (windowHeight/HEADER_RATIO)+(windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER*(10+12*i),
          (windowWidth/PIANO_RATIO-windowWidth/PIANO_HEAD_RATIO)/5*3, (windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER);
    }

  //縦線
  //小節線
  stroke(256);
  for(i = 0 ; i< BAR_NUMBER-1 ;i++){
    line(windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/BAR_NUMBER*(i+1), windowHeight/HEADER_RATIO,
         windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/BAR_NUMBER*(i+1), windowHeight);
  }

  //拍ごとの線
  stroke(256,0,256);
  for(i = 0 ; i<BAR_NUMBER ;i++){
    line(windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*4)*(1+4*i),windowHeight/HEADER_RATIO,
         windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*4)*(1+4*i),windowHeight);
    line(windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*4)*(2+4*i),windowHeight/HEADER_RATIO,
         windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*4)*(2+4*i),windowHeight);
    line(windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*4)*(3+4*i),windowHeight/HEADER_RATIO,
         windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*4)*(3+4*i),windowHeight);
  }

  //16分の線
  stroke(256,256,0);
  for(i = 0 ; i<BAR_NUMBER*4 ;i++){
    line(windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16)*(1+4*i),windowHeight/HEADER_RATIO,
         windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16)*(1+4*i),windowHeight);
    line(windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16)*(2+4*i),windowHeight/HEADER_RATIO,
         windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16)*(2+4*i),windowHeight);
    line(windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16)*(3+4*i),windowHeight/HEADER_RATIO,
         windowWidth/PIANO_RATIO+(windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16)*(3+4*i),windowHeight);
  }

  //横線
  //半音ごとの境界線(暫定的)
  stroke(0,256,256);
  for(i =0 ; i<KEYBOARD_NUMBER ; i++){
    line(windowWidth/PIANO_RATIO,windowHeight/HEADER_RATIO+(windowHeight-windowHeight/HEADER_RATIO)/(KEYBOARD_NUMBER)*(i+1),
         windowWidth,windowHeight/HEADER_RATIO+(windowHeight-windowHeight/HEADER_RATIO)/(KEYBOARD_NUMBER)*(i+1));
    }

    //オクターブの境界線
  stroke(256,256,256);
  for(i =0 ; i<KEYBOARD_NUMBER/12-1 ; i++){
    line(windowWidth/PIANO_RATIO,windowHeight/HEADER_RATIO+(windowHeight-windowHeight/HEADER_RATIO)/(KEYBOARD_NUMBER/12)*(i+1),
         windowWidth,windowHeight/HEADER_RATIO+(windowHeight-windowHeight/HEADER_RATIO)/(KEYBOARD_NUMBER/12)*(i+1));
    }


   //四分音符ボタン(暫定的)
  stroke(256,256,256);
  ellipse(windowWidth/2,windowHeight/(HEADER_RATIO*2),40,40);
  image(img,windowWidth/2-20,windowHeight/(HEADER_RATIO*2)-20);

   //削除ボタン(暫定的)
  stroke(256,256,256);
  ellipse(windowWidth/2+100,windowHeight/(HEADER_RATIO*2),40,40);

  //再生ボタン(暫定的)
  stroke(256,256,256);
  ellipse(windowWidth/2+200,windowHeight/(HEADER_RATIO*2),40,40);

  //投稿ボタン(暫定的)
  stroke(256,256,256);
  ellipse(windowWidth/2+300,windowHeight/(HEADER_RATIO*2),40,40);
    
  //textSize(12);
  //textAlign(CENTER);
  //fill(256,256,256);
  //noFill();
  //text("text",windowWidth/2-400,windowHeight/(HEADER_RATIO*2));
    
  
  
  

  //入力モードのマウスポインター
  if(input == 1){
   fill(256,256,0);
   ellipse(mouseX,mouseY,20,20);
  }

  //削除モードのマウスポインター
  if(erase == 1){
   fill(0,256,0);
   ellipse(mouseX,mouseY,20,20);
  }




 //音符マークの長さ、windowWidthが入ってるとローカル変数にしないとだめらしい。
  w_ = (windowWidth-windowWidth/PIANO_RATIO)/(BAR_NUMBER*16);
  h_ = (windowHeight-windowHeight/HEADER_RATIO)/KEYBOARD_NUMBER;

  for(i=0; i<KEYBOARD_NUMBER ;i++){
     for(j=0;j<BAR_NUMBER*4*4 ;j++){

       if(note_flag[i][j]==1){
        fill(256,0,0);
        rect( (windowWidth/PIANO_RATIO+(w_)*j), (windowHeight-(h_)*(i+1)), w_, h_ );
       }

     }
  }





}


function mouseReleased(){
  var editorStatus = document.getElementById('editorStatus');

  //入力モードのボタン内でクリックしたとき
  if(dist(windowWidth/2,windowHeight/(HEADER_RATIO*2),mouseX,mouseY)<40){
    input = 1;
    erase = 0;
    playing = 0;
    convert =0;
    editorStatus.value = "input";
  }

  //削除モードのボタン内でクリックしたとき
  if(dist(windowWidth/2+100,windowHeight/(HEADER_RATIO*2),mouseX,mouseY)<40){
    input = 0;
    erase = 1;
    playing = 0;
    convert =0;
    editorStatus.value = "erase";
  }

  //再生モードのボタン内でクリックしたとき
  if(dist(windowWidth/2+200,windowHeight/(HEADER_RATIO*2),mouseX,mouseY)<40){
    input = 0;
    erase = 0;
    playing = 1;
    convert =0;
    editorStatus.value = "playing";
  }

  //投稿モードのボタン内でクリックしたとき
  if(dist(windowWidth/2+300,windowHeight/(HEADER_RATIO*2),mouseX,mouseY)<40){
    input = 0;
    erase = 0;
    playing = 0;
    convert =1;
    editorStatus.value = "convert";

  }

  //入力ボタンを押したときの動作
  if(input == 1){

    for(i=0; i<KEYBOARD_NUMBER ;i++){
     for(j=0;j<BAR_NUMBER*4*4 ;j++){
       if( ((windowWidth/PIANO_RATIO+w_*j)<mouseX)&&(mouseX<(windowWidth/PIANO_RATIO+w_*(j+1)))&&((windowHeight-h_*(i+1))<mouseY)&&(mouseY<(windowHeight-h_*i)) ){
        note_flag[i][j] = 1;
        note_sound[i].play();
       }
     }
    }

  }

  //削除ボタンを押したときの動作
  if(erase == 1){

    for(i=0; i<KEYBOARD_NUMBER ;i++){
     for(j=0;j<BAR_NUMBER*4*4 ;j++){
       if( ((windowWidth/PIANO_RATIO+w_*j)<mouseX)&&(mouseX<(windowWidth/PIANO_RATIO+w_*(j+1)))&&((windowHeight-h_*(i+1))<mouseY)&&(mouseY<(windowHeight-h_*i)) ){
        note_flag[i][j] = 0;
       }
     }
    }

  }

  /*function search(){
   for(j=0;j<BAR_NUMBER*4*4 ;j++){
    for(i=0; i<KEYBOARD_NUMBER ;i++){
      if(note_flag[i][j] == 1){
        note_sound[i].play();
      }
    }
   }

  }*/

  b = 0;
  tempo = 120;
　var playtimer;

  //再生ボタンを押したときの動作
  if(playing == 1){
  b=0;


  playtimer = setInterval(function(){

    for(i=0; i<KEYBOARD_NUMBER ;i++){
      if(note_flag[i][b] == 1){
        note_sound[i].play();
      }
    }
    b=b+1;
    if(b>35){clearInterval(playtimer);}
   },60000/(tempo*4));




   playing = 0;

  }

  text = '';

  //投稿ボタンを押したときの動作
  if(convert == 1){
    convert = 0;
    for(i=0; i<KEYBOARD_NUMBER ;i++){
     for(j=0;j<BAR_NUMBER*4*4 ;j++){
       if(note_flag[i][j] == 1){
         text = text+note[i][j];
       }

     }
    }

    text = "[" + text + "] ";


    window.open("https://twitter.com/intent/tweet?hashtags=NotesNuggetter,"+ $("#tracklist").val() +" &text="+text, "Notes-nugetter", "width=700, height=500, status=no");

    !function(d,s,id){
          var js,
          fjs=d.getElementsByTagName(s)[0],
          p=/^http:/.test(d.location)?'http':'https';
          if(!d.getElementById(id)){
            js=d.createElement(s);
            js.id=id;
            js.src=p+'://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js,fjs);
          }
        }(document, 'script', 'twitter-wjs');

    }

    //alert(text);
    //document.hoge.textbox1.value=text;
    //document.yaa.data-text =7;

    start = text.indexOf( "[" );
                end = text.indexOf( "]" );
                if(start == -1 || end == -1 ){
                    //alert(i+"番目のツイートは再生できません");
                }



                else{
                note_sound[31].play();
                text_split = new Array();
                contents = text.substring( start+1, end );

                for(var i = 0; i<contents.length/4; i++){
                    var j = i * 4;
                    var p = contents.slice(j, j + 4);
                    text_split.push(p);
                    //alert(text_split[i]);//ここまでOK
                }



                //どの音を鳴らすか照合
                for(var k = 0; k<contents.length/4; k++){

                    for(i=0; i<KEYBOARD_NUMBER ;i++){
                        for(j=0;j<BAR_NUMBER*4*4 ;j++){
                            if(text_split[k]==note[i][j]){
                                text_flag[i][j] = 1;
                                //alert(text_flag[i][j]);//ここまでOKOK

                            }
                        }
                    }
                }


                //音再生。
                var texttimer;
                var tempo = 120;
                b=0;
                 texttimer = setInterval(function(){
                    for(i=0; i<KEYBOARD_NUMBER ;i++){
                        if(text_flag[i][b] == 1){
                            note_sound[i].play();
                        }
                    }
                    b=b+1;
                    if(b>35){
                        clearInterval(texttimer);
                        convert = 0;
                        for(i=0; i<KEYBOARD_NUMBER ;i++){
                        for(j=0;j<BAR_NUMBER*4*4 ;j++){
                            text_flag[i][j] = 0;
                        }
                            }

                        //alert(convert);
                            }
                },60000/(tempo*4));


            //texts=2;
            //poo = document.getElementById('foo');
            //poo.href = "https://twitter.com/intent/tweet?button_hashtag=NotesNagetter&text="+texts;








  }





  //OK
  /*if(playing == 1){
  setInterval(function(){for(j=0;j<BAR_NUMBER*4*4 ;j++){
    for(i=0; i<KEYBOARD_NUMBER ;i++){
      if(note_flag[i][j] == 1){
        note_sound[i].play();
      }
    }
   }},1000);

  }*/

  //これもうまくいった。
  /*if(playing == 1){
  setInterval(function(){note_sound[2].play()},1000);

  }*/

  /*var loop = function(a){
    setTimeout(function(){note_sound[a].play()}, 15000/tempo);

  }

  if(playing == 1){

    for(j=0;j<BAR_NUMBER*4*4 ;j++){
      for(i=0; i<KEYBOARD_NUMBER ;i++){
        if(note_flag[i][j] == 1){
          //1000/(tempo/60*4)*jミリ秒後に再生
          loop(i);

        }

      }


    }

  }*/

  //jによる一定時間ごとにi探索して、あれば音を出すほうがいいかも。


  //どうやらループ文の中にsetTimeoutをつかっちゃいかんらしい。
  /*if(playing == 1){

    for(j=0;j<BAR_NUMBER*4*4 ;j++){
      for(i=0; i<KEYBOARD_NUMBER ;i++){
        if(note_flag[i][j] == 1){
          //1000/(tempo/60*4)*jミリ秒後に再生
          setTimeout('note_sound[i].play();', 15000/tempo*j);

        }

      }


    }

  }*/



  //これは動くのか。
  /*if(playing == 1){
    setTimeout(function(){note_sound[2].play()},3000);
  }*/

}


function windowResized() {
  resizeCanvas(windowWidth*2, windowHeight*2);
}
