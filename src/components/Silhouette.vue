<template>
  <div>
    <div style="text-align: right">
      <span id="okCount">連続正解数: {{ questionIdx }}</span>
    </div>
    <hr>
    <span>Q 次の画像の都道府県名は何でしょうか？</span>
    <div class="canvasArea">
      <canvas id="prefectureImage" width="200" height="200" ref="canvas"></canvas>
    </div>
    <table align="center" class="answerTable">
      <tr>
        <td>
          <input type="button" id="choice1" class="buttonnGradientRadius"
                 :value="prefectures[choice1]['name']" v-on:click="judge(choice1)">
        </td>
        <td>
          <input type="button" id="choice2" class="buttonnGradientRadius"
                 :value="prefectures[choice2]['name']" v-on:click="judge(choice2)">
        </td>
      </tr>
      <tr>
        <td>
          <input type="button" id="choice3" class="buttonnGradientRadius"
                 :value="prefectures[choice3]['name']" v-on:click="judge(choice3)">
        </td>
        <td>
          <input type="button" id="choice4" class="buttonnGradientRadius"
                 :value="prefectures[choice4]['name']" v-on:click="judge(choice4)">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// 都道府県リスト
const prefectures = [
  { no: 1, name: "北海道", url: "td01_hokkaido_black.jpg" },
  { no: 2, name: "青森県", url: "td02_aomori_black.jpg" },
  { no: 3, name: "岩手県", url: "td03_iwate_black.jpg" },
  { no: 4, name: "宮城県", url: "td04_miyagi_black.jpg" },
  { no: 5, name: "秋田県", url: "td05_akita_black.jpg" },
  { no: 6, name: "山形県", url: "td06_yamagata_black.jpg" },
  { no: 7, name: "福島県", url: "td07_hukushima_black.jpg" },
  { no: 8, name: "茨城県", url: "td08_ibaraki_black.jpg" },
  { no: 9, name: "栃木県", url: "td09_tochigi_black.jpg" },
  { no: 10, name: "群馬県", url: "td10_gunma_black.jpg" },
  { no: 11, name: "埼玉県", url: "td11_saitama_black.jpg" },
  { no: 12, name: "千葉県", url: "td12_chiba_black.jpg" },
  { no: 13, name: "東京都", url: "td13_tokyo_black.jpg" },
  { no: 14, name: "神奈川県", url: "td14_kanagawa_black.jpg" },
  { no: 15, name: "新潟県", url: "td15_niigata_black.jpg" },
  { no: 16, name: "富山県", url: "td16_toyama_black.jpg" },
  { no: 17, name: "石川県", url: "td17_ishikawa_black.jpg" },
  { no: 18, name: "福井県", url: "td18_hukui_black.jpg" },
  { no: 19, name: "山梨県", url: "td19_yamanashi_black.jpg" },
  { no: 20, name: "長野県", url: "td20_nagano_black.jpg" },
  { no: 21, name: "岐阜県", url: "td21_gihu_black.jpg" },
  { no: 22, name: "静岡県", url: "td22_shizuoka_black.jpg" },
  { no: 23, name: "愛知県", url: "td23_aichi_black.jpg" },
  { no: 24, name: "三重県", url: "td24_mie_black.jpg" },
  { no: 25, name: "滋賀県", url: "td25_shiga_black.jpg" },
  { no: 26, name: "京都府", url: "td26_kyoto_black.jpg" },
  { no: 27, name: "大阪府", url: "td27_oosaka_black.jpg" },
  { no: 28, name: "兵庫県", url: "td28_hyogo_black.jpg" },
  { no: 29, name: "奈良県", url: "td29_nara_black.jpg" },
  { no: 30, name: "和歌山県", url: "td30_wakayama_black.jpg" },
  { no: 31, name: "鳥取県", url: "td31_tottori_black.jpg" },
  { no: 32, name: "島根県", url: "td32_shimane_black.jpg" },
  { no: 33, name: "岡山県", url: "td33_okayama_black.jpg" },
  { no: 34, name: "広島県", url: "td34_hiroshima_black.jpg" },
  { no: 35, name: "山口県", url: "td35_yamaguchi_black.jpg" },
  { no: 36, name: "徳島県", url: "td36_tokushima_black.jpg" },
  { no: 37, name: "香川県", url: "td37_kagawa_black.jpg" },
  { no: 38, name: "愛媛県", url: "td38_ehime_black.jpg" },
  { no: 39, name: "高知県", url: "td39_kouchi_black.jpg" },
  { no: 40, name: "福岡県", url: "td40_hukuoka_black.jpg" },
  { no: 41, name: "佐賀県", url: "td41_saga_black.jpg" },
  { no: 42, name: "長崎県", url: "td42_nagasaki_black.jpg" },
  { no: 43, name: "熊本県", url: "td43_kumamoto_black.jpg" },
  { no: 44, name: "大分県", url: "td44_ooita_black.jpg" },
  { no: 45, name: "宮崎県", url: "td45_miyazaki_black.jpg" },
  { no: 46, name: "鹿児島県", url: "td46_kagoshima_black.jpg" },
  { no: 47, name: "沖縄県", url: "td47_okinawa_black.jpg" }
];
export default {
  name: 'Silhouette',
  methods: {
    setupQuestion: function() {
      this.answer = this.answers[this.questionIdx];
      this.setChoiceList();
      let url = require("../assets/img/" + this.prefectures[this.answer]["url"]);
      this.drawCanvas(url);
    },
    setChoiceList: function() {
      let choiceList = this.arrayShuffle([...Array(46).keys()])
        .filter((e) => e !== this.answer)
        .slice(0, 3);
      choiceList.push(this.answer);
      this.arrayShuffle(choiceList);
      this.choice1 = choiceList[0];
      this.choice2 = choiceList[1];
      this.choice3 = choiceList[2];
      this.choice4 = choiceList[3];
    },
    arrayShuffle: function(array) {
      let length = array.length;
      while(length > 0) {
        var random = Math.floor(Math.random() * length);
        var tmp = array[length - 1];
        array[length - 1] = array[random];
        array[random] = tmp;
        length -= 1;
      }
      return array;
    },
    drawCanvas: function(url) {
      var canvas = document.getElementById('prefectureImage');
      var ctx = canvas.getContext('2d');
      var img = new Image();
      img.src = url;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 192, 192);
      }
    },
    judge: function(choice) {
      if (this.answer == choice) {
        if (this.questionIdx < 46) {
          this.questionIdx++;
          this.setupQuestion();
        } else {
          alert("全問正解 おめでとう！");
          this.$router.push({ name: 'top' });
        }
      } else {
        alert("不正解");
        this.$router.push({ name: 'top' });
      }
    }
  },
  data() {
    return {
      prefectures: prefectures,
      answers: [...Array(46).keys()],
      questionIdx: 0,
      answer: 0,
      choice1: 0,
      choice2: 1,
      choice3: 2,
      choice4: 3,
    }
  },
  mounted() {
    this.arrayShuffle(this.answers);
    this.questionIdx = 0;
    this.setupQuestion();
  }
}
</script>

<style scoped>
.canvasArea {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.answerTable td {
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
}
.buttonnGradientRadius {
  display: inline-block;
  padding: 7px 20px;
  border-radius: 25px;
  text-decoration: none;
  color: #000000;
  background-image: linear-gradient(45deg, #FFC1F7 0%, #FFFFFF 100%);
  transition: .4s;
  width: 150px;
}
</style>
