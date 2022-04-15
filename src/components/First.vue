<template>
  <div>
    <nav>
      <a class="logo" href="#">"ЖИВІ"</a>
      <div class="top">
        <a class="menu" href="1.html">Контакти</a> |
        <a class="menu" href="2.html">Про нас</a> |
        <a class="menu" href="3.html">Знайти родича</a> |
        <a class="menu searchup" href="#">Пошук</a>
      </div>
    </nav>
    <!-- <div class="searchinsite">
		<div class="searchinsite_f">
			<form>
				<p><input type="search" name="q" placeholder="Пошук по сайту">
					<input type="submit" value="Найти"></p>
			</form>
		</div>
	</div> -->
    <div class="bg1page">
      <div class="bod">
        <div class="bg"></div>
      </div>
      <pre class="tit">
Iнформація з секретних архівів КДБ 
про репресованих українців</pre
      >
      <pre class="inform">
 Інформація про 86 репресованих
жителів села Велика Павлівка 
Зіньківського р-ну Полтавської обл.</pre
      >

      <div class="anim">
        <a href="#" class="connect"> Дізнатися більше</a>
      </div>

      <div class="bottom">
        <audio
          id="melody"
          autoplay
          loop
          src="music/Two Steps From Hell-Heart of Courage Choir.mp3"
        >
          Ваш браузер не поддерживает элемент audio.
        </audio>
        <img
          id="imgOnOff"
          src="./images/on.png"
          alt="Включити/вимкнути звук"
          onClick="Mute()"
        />

        <a href="https://www.facebook.com/Repressedukrainians/"
          ><img src="./images/fb.png"
        /></a>
      </div>
    </div>
    <div>
      <p class="titlepage titlepagealign" data-aos="fade-left">ПЕРЕДУМОВИ</p>
      <img
        src="./images/page2stalin.jpg"
        class="page2stalin"
        data-aos="slide-up"
      />
      <pre class="textvd textstalin1" data-aos="fade-down">
Термін «репресії» використовувався в СРСР для визначення
методу покарання людей, які вважалися 
антиреволюційними елементами і ворогами народу.

Чистки мотивувалися бажанням частини партійного 
керівництва позбавитися інакодумаючих елементів з Партії
і з метою утвердження влади Сталіна. </pre
      >
      <pre class="textvd textstalin2" data-aos="fade-down">
Масові репресії в цей час супроводжувалися разом з 
порушеннями радянськими державними органами 
радянської законності.</pre
      >
    </div>
    <div>
      <p class="titlepage titlepagealign" data-aos="fade-left">ФАЛЬСИФІКАЦІЯ</p>
      <img src="./images/page3sud.jpg" class="page3sud" data-aos="slide-up" />
      <pre class="textvd textsud1" data-aos="fade-down">
Більшість звинувачень були базовані на примусових 
зізнаннях, часто здобуті за допомогою тортур і під впливом 
вільної інтерпретації статті 58 Кримінального Кодексу. На 
основі цієї статті звинуваченим приписували
контрреволюційні злочини.</pre
      >
      <pre class="textvd textsud2" data-aos="fade-down">
Замість судових процесів часто діяли так звані 
трійки НКВС. Сотні тисяч людей були звинувачені за 
сфабрикованими доказами у різноманітних 
політичних злочинах (шпигунство, шкідництво, 
саботаж, антирадянська агітація і пропаганда, 
таємна підготовка до державного перевороту, 
тероризм), а потім розстріляні або відправлені у 
табори ГУЛАГу. </pre
      >
    </div>
    <div>
      <p class="titlepage titlepagealign" data-aos="fade-left">КУРКУЛІ</p>
      <img
        src="./images/page4people.jpg"
        class="page4people"
        data-aos="slide-up"
      />
      <pre class="textvd textpeople1" data-aos="fade-down">
Сталіну і партійному керівництву для проведення колективізації на 
селі потрібна була опора. Сталін розумів, що найбільшим ворогом
його планам є клас заможного селянства і тому партія взяла курс на
ліквідацію куркульства. Сталін закликав до «ліквідації куркульства як класу». 
Ця класична тактика за принципом «поділяй та
володарюй» була розрахована на те, щоб ізолювати найзаможніших
хазяїв від маси бідних селян. </pre
      >
      <pre class="textvd textpeople2" data-aos="fade-down">
Проте визначити, хто саме є куркуль, було не просто. 
Вважалося, що куркулі мають більше засобів 
виробництва, ніж середняки, й використовують найману 
працю. Підрахували, що вони становили 
близько 5 % селян. Але зображення урядом куркулів як 
«кровопивців-лихварів» та «експлуататорів» своїх 
односельців рідко відповідало дійсності.</pre
      >
      <pre class="textvd textpeople3" data-aos="fade-down">
Репресивна система СРСР в структурі НКВС мала «чорну 
касу», куди вносили захоплені під час арешту особисті 
кошти та коштовності репресованих осіб, їх нерухомість 
(квартири) й подібне майно; що врешті створило 
матеріально-економічну зацікавленість державних 
службовців фальсифікувати справи з метою пограбування 
народу та самозбагачення кримінальним шляхом.</pre
      >
    </div>
    <div
      class="repressed"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      Репресовані в 1930х роках жителі Великої Павлівки
    </div>

    <div class="flexboxblock">
      <div class="sort">
        <h4>Сортувати</h4>
        <button>За алфавітом</button>
        <button>За віком</button>
        <button>За місцем народження</button>
        <button>За датою арешту</button>
        <button>За датою розстрілу</button>
      </div>

      <div class="flexboxlist">
        <div class="listpeople"></div>
      </div>
    </div>

    <div class="container">
      <div class="formlist">
        <h1 class="searchform">Знайти свого родича</h1>
        <pre class="textform">
Ви можете подати запит на пошук інформації про Вашого репресованого родича.
Ми зробимо запит до архіву та в разі наявності справи надішлемо Вам її фотознімки
будь-яким зручним способом</pre
        >
        <form
          name="f1"
          class="formlisttext"
          action="./form_processing.php"
          method="POST"
        >
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="yourname"
            type="text"
            size="70"
            placeholder="Ваше ім'я"
          />
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="mailortel"
            type="email"
            size="70"
            placeholder="Електронна пошта або номер телефону"
          />
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="namesurnamerep"
            type="text"
            size="70"
            placeholder="Прізвище, ім'я, по-батькові репресованого"
          />
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="bdatarep"
            type="text"
            size="70"
            placeholder="Рік народження"
          />
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="placeofbdrep"
            type="text"
            size="70"
            placeholder="Місце народження"
          />
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="datearrestrep"
            type="text"
            size="70"
            placeholder="Місце арешту"
          />
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="placearrest"
            type="text"
            size="70"
            placeholder="Дата арешту"
          />
          <input
            class="lenthbetwtextarea textarealow"
            name="anthrinfrep"
            type="textarea"
            size="70"
            placeholder="Будь-яка інформація про репресованого"
          />
          <input
            class="lenthbetwtextarea lenthbetwtextareaheight"
            name="addressforinf"
            type="text"
            size="70"
            placeholder="Адреса длдя отримання інформації"
          />
          <p>
            <input
              class="btnsubmit"
              name="submit"
              type="submit"
              value="Надіслати"
            />
          </p>
        </form>
        >
      </div>
    </div>
    <footer>
      <div>
        <p>©2022, ГО «Живі»</p>
      </div>
      <div>
        <a href="https://www.facebook.com/Repressedukrainians/"
          ><img src="./images/fb.png"
        /></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      msg: "Hello World. Its router",
    };
  },
};
</script>
<script src="./js/js.js"></script>

<style scoped>
@charset "utf-8";
@import url("./avbaranim.css");
/* CSS Document */
* {
  font-family: Roboto;
}

body {
  background-color: #0a0a0a;
  overflow-x: hidden;
}

.logo {
  text-decoration: none;
  color: aliceblue;
}

.bg1page {
  background: url(./images/b-main.png);
  margin: 0 0 0 5%;
  width: 120%;
  height: 768px;
}

.bod {
  width: 1280px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;

  z-index: -1;
}

.searchup {
  color: white;
}

.menu {
  padding: 15px 25px;
  text-decoration: none;
  color: aliceblue;
}

/* .searchinsite{
	display: none;
    position: fixed ;
    top: 0;
    width: 100%;
    height: 100%;
	background-color: rgba(0,0,0, .3);
	
	

}
.saerchinsite_f {
		position: absolute;
        top: 50%;
        left: 50%;
        width: 1024px;
        min-height: 200px;
        max-height: 640px;
        background-color: #fff;
        transform: translateX(-50%) translateY(-50%);
        padding: 25px;
        overflow: auto;
} */
.top {
  width: 1280px;
}

.tit {
  color: aliceblue;
  margin: -33% 0px 0px 10%;
  font-weight: bold;
  font-size: 25px;
}

.inform {
  color: aliceblue;
  margin: 2% 0px 0px 10%;
  font-size: 17px;
}
.anim {
  width: 100%;
  height: 105px;
  margin: 3% 0 0 10%;
}
.connect {
  width: 30%;
  height: 100%;
  text-decoration: none;
  font-size: 16px;
  color: aliceblue;
  border: 1px solid aliceblue;
  padding: 1em 3em;
  transition: all 2s ease;
}
.bottom {
  display: flex;
  width: 100%;
  justify-content: space-around;

  margin: 5% 0 0 -12%;
}
.titlepage {
  color: black;
  font-size: 138px;
  font-weight: bold;

  letter-spacing: 5px;
}
.titlepagealign {
  text-align: center;
}
.textvd {
  color: white;
}

.page2stalin {
  width: 612px;
  height: 301px;
  margin: -14% 0% 0% 14%;
}
.textstalin1 {
  margin: -12% 0% 0% 45%;
}
.textstalin2 {
  margin: 9% 0% 0% 30%;
}
.page3sud {
  width: 612px;
  height: 401px;
  margin: -14% 0% 0% 42%;
}
.textsud1 {
  margin: -25% 0% 0% 7%;
}
.textsud2 {
  margin: 10% 0% 0% 20%;
}
.curculi {
  margin: 7% 0% 0% 5%;
}
.page4people {
  width: 43%; /*612 350*/
  height: 38%;
  margin: -14% 0% 0% 6%;
}
.textpeople1 {
  margin: -20% 0% 0% 45%;
}
.textpeople2 {
  margin: 5% 0% 0% 45%;
}
.textpeople3 {
  margin: 5.5% 0% 0% 16%;
  padding: 0% 0% 3% 0%;
}
nav {
  display: flex;
  justify-content: space-between;
  width: 150%;

  position: fixed;
  background-color: #0a0a0a;
  padding: 25px 0px 20px 48px;
  z-index: 1;
}
.repressed {
  color: white;
  text-align: center;
  font-size: 2em;
}
.flexboxblock {
  display: flex;
  justify-content: space-evenly;
  color: white;
}
.sort {
  display: block;
  height: 250px;
  width: 100px;
}

.nodots {
  list-style-type: none;
  padding: 0px 0px 25px 0px;
}

.listpeople {
  width: 700px;

  color: white;
  column-count: 2;

  list-style-position: outside;
  -moz-column-count: 2; /* Firefox */
  -webkit-column-count: 2; /* Safari and Chrome */
  margin: 2px 0 0 0;
}
.flexboxlist {
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.formlist {
  background: #000;
  margin: 30%;
  width: 60%;
  height: 70%;
  margin: 10% 0 0 25%;
}
.searchform {
  color: white;
  text-align: center;
}
.container {
  width: 1280px;
}
.textform {
  color: white;
  text-align: center;
}
.formlisttext {
  display: block;
}
.lenthbetwtextarea {
  margin: 0 0 5% 17%;
  background: rgba(0, 0, 0, 0);
  color: white;
}
.lenthbetwtextareaheight {
  height: 50px;
}
.textarealow {
  height: 100px;
}
.btnsubmit {
  text-align: center;
  margin: 0 0 0 35%;
  width: 245px;
  height: 50px;
  background: #000;
  color: white;
}
footer {
  background: #000;
  color: white;
  display: flexbox;
}
</style>
