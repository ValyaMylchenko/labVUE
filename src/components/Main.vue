<template>
  <div class="hello">
    <div>
      <audio src="../main_music.mp3" autoplay loop>
        Ваш браузер не поддерживает элемент audio.
      </audio>
      <div class="textmiddle">
        <p>
          Впродовж доби Великого терору 1937-38 років в Україні засуджено
          <span class="numbers">198 918</span> осіб
        </p>
        <p>
          Смертної кари через розстріл зазнало
          <span class="numbers">123 421</span> ув’язнених
        </p>

        <div class="anim button-parent">
          <router-link to="/main" class="connect btn-2"> Дізнатися більше</router-link>
        </div>
      </div>

      <div class="bottom">
        <img
          id="imgOnOff"
          src="./images/on.png"
          alt="Включити/вимкнути звук"
          onClick="Mute()"
        />

        <p class="textbottom">
          {{ msg }}
        </p>

        <a href="https://www.facebook.com/Repressedukrainians/"
          ><img src="./images/fb.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Для найкращої взаємодії з сайтом використовуйте навушники",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font: Roboto;
}
.hello {
  background: url(./images/bg.png);
  /* background-position: center; */
  background-repeat: no-repeat;
  -moz-background-size: cover; /* Firefox 3.6+ */
  -webkit-background-size: cover; /* Safari 3.1+ и Chrome 4.0+ */
  -o-background-size: cover; /* Opera 9.6+ */
  background-size: cover;
  width: 100%;
  height: 630px;
  position: absolute;
}
.textmiddle {
  text-align: center;
  font-size: 20px;
  color: #f5bdc1;
  margin: 18% 0px 0px 0px;
}
.numbers {
  font-size: 24px;
  color: #ff1818;
}
.anim {
  width: 100%;
  height: 50px;
  align-items: center;
  margin: 4% 0px 0px;
}
/*button{
  width: 172px;
  height: 45px;
  position:absolute;
  z-index: 1;
  border: solid 1px #ff1818;
  background: rgba(0,0,0,0.00);
  font-size: 16px;
  color:#ff1818;
  margin: 4% 0px 0px 0px;
}
 */
.connect {
  width: 30%;
  height: 15%;
  text-decoration: none;
  font-size: 16px;
  color: #ff1818;
  border: 1px solid #ff1818;

  transition: all 2s ease;
}

#imgOnOff {
  cursor: pointer;
  width: 20px;
  height: 20px;
}
.textbottom {
  font-size: 13px;
  color: #f5bdc1;
}
.bottom {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 10% 0 0 0;
}
.volume {
  border: rgba(0, 0, 0, 0);
  height: 24px;
  width: 24px;
}
.white {
  width: 172px;
  height: 45px;
  background: rgba(255, 255, 255, 1);
}
/*.animbutton{
overflow: hidden;
display: flex;
align-items: center;

} */

connect:hover {
  animation: bgrnd 2s;
}
@keyframes bgrnd {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: rgba(255, 255, 255, 1);
  }
}

a {
  text-decoration: none;
  font-weight: 500;
  position: relative;
  color: #4a4a4a;
  display: inline-block;
}
.button-parent {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
.button-parent--inner {
  padding: 1em 1em;
}
.btn-2 {
  padding: 1em 1em 1.5em;
  border: 3px solid red;
  transition: all 300ms ease;
}
.btn-2:before {
  position: absolute;
  content: "";
  width: 0%;
  height: 100%;
  background: red;
  top: 0;
  left: auto;
  right: 0;
  z-index: -1;
  transition: all 300ms ease;
}
.btn-2:hover {
  color: white;
  box-shadow: none;
}
.btn-2:hover:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: red;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
