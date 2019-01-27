import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  list: [
    { id: 0, type: 'folder', name: 'フォルダ1', children: [
      { id: 1, type: 'bookmark', name: 'なぜ、組織のつくりとソフトウェアアーキテクチャは似てしまうのか', url:'https://qiita.com/hirokidaichi/items/d12fcce80ee593bcf34d' },
      { id: 2, type: 'bookmark', name: 'WebブラウザでUnityで作ったシーンを歩き廻ろう！', url:'https://qiita.com/ChinatsuMatsumoto/items/c99457cc85318da892cb' },
      { id: 8, type: 'folder', name: 'フォルダ2', children: [
        { id: 3, type: 'bookmark', name: 'AWSサービス一覧（2019/01版）', url:'https://qiita.com/moritalous/items/31a56acbf2ce367b712d' },
      ]},
    ]},
    { id: 4, type: 'bookmark', name: 'WebRTC利用でありがちな不満点とベストプラクティスの模索', url:'https://qiita.com/nakakura/items/50974e6622807a6dbc09' },
    { id: 5, type: 'bookmark', name: 'Vue + Vue Router + Vuex + Laravel チュートリアル（全16回）を書きました。', url:'https://qiita.com/MasahiroHarada/items/2597bd6973a45f92e1e8' },
    { id: 9, type: 'folder', name: 'フォルダ3', children: [
      { id: 6, type: 'bookmark', name: '仕事で使えるかも知れないWindows コマンド＆ワンライナー集 + バッチファイル', url:'https://qiita.com/ryuichi1208/items/4bf20f702176101a3ecf' },
    ]},
    { id: 7, type: 'bookmark', name: 'Haskellをかける少女', url:'https://qiita.com/jzmstrjp/items/11dcd3ec26027ff30214' },
  ]
};

const bookmarks = (state = initialAppState, action) => {
  //if (action.type === actionTypes.INPUT_NUMBER) {
  //  return {
  //    inputValue: state.inputValue * 10 + action.number,
  //    resultValue: state.resultValue,
  //    showingResult: false,
  //  };
  //} else if (action.type === actionTypes.PLUS) {
  //  return {
  //    inputValue: 0,
  //    resultValue: state.resultValue + state.inputValue,
  //    showingResult: true,
  //  };
  //} else {
  //  return state;
  //}
  return state;
};

export default bookmarks;
