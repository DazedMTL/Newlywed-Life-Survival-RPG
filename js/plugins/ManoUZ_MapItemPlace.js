//ver 4.0.0 2022/03/14
//ツクールMVに対応・アイテムの一時非表示に対応

/*:
 * @plugindesc マップ上にアイテムを置くことができます ver1.0(2021/02/13)
 * @author しぐれん(https://github.com/Sigureya/RPGmakerMV)
 * @url https://booth.pm/ja/items/2741004
 *
 * @target MZ
 *
 * @command PlaceSimpleItem
 * @text アイテムを置く(簡単)
 * @desc 地面にアイテムを置きます。座標は発生源のイベントで固定です。
 * 繰り返し実行し続けると置ける場所へ配置します。
 * @arg item
 * @type item
 * @default 0
 * @arg amount
 * @text アイテムの個数
 * @type number
 * @default 1
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 * @command PlaceSimpleWeapon
 * @text 武器を置く(簡単)
 * @desc 地面に武器を置きます。座標は発生源のイベントで固定です。
 * 繰り返し実行し続けると置ける場所へ配置します。
 * @arg item
 * @text 武器ID
 * @type weapon
 * @default 0
 * @arg amount
 * @text 武器の個数
 * @type number
 * @min 1
 * @default 1
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 *
 * @command PlaceSimpleArmor
 * @text 防具を置く(簡単)
 * @desc 地面に防具を置きます。座標は発生源のイベントで固定です。
 * 繰り返し実行し続けると置ける場所へ配置します。
 * @arg item
 * @text 防具ID
 * @type armor
 * @default 0
 * @arg amount
 * @text 防具の個数
 * @type number
 * @default 1
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 *
 * @command PlaceGoldSimple
 * @text お金を置く(簡単)
 * @desc 地面にゴールドを置きます。
 * 座標は発生源のイベントで固定です。
 * @arg min
 * @type number
 * @desc マップに配置するお金の金額。
 * @min 1
 * @default 100
 * @arg max
 * @type number
 * @default 500
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 *
 * @command PlaceItem
 * @text アイテムを置く(変数指定)
 * @desc 変数で指定されたアイテムを、指定した座標に置きます。
 * @arg type
 * @type select
 * @text アイテム種別
 * @option アイテム
 * @value item
 * @option 武器
 * @value weapon
 * @option 防具
 * @value armor
 * @default item
 * @arg itemId
 * @text アイテムID
 * @desc アイテム指定 変数に指定された番号のアイテムを生成します
 * @type variable
 * @default 0
 * @arg amount
 * @text 個数
 * @desc 指定された変数に応じて個数を設定します。
 * 省略時は1個生成されます。
 * @type variable
 * @default 0
 * @arg x
 * @text X座標
 * @desc X座標
 * @type variable
 * @default 0
 * @arg y
 * @desc Y座標
 * @text Y座標
 * @type variable
 * @default 0
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 * @command PlaceGold
 * @text お金を置く(変数指定)
 * @desc 変数で指定された金額を、指定した座標に置きます。
 * @arg variableId
 * @text 金額
 * @type variable
 * @default 0
 * @arg x
 * @text X座標
 * @desc X座標
 * @type variable
 * @default 0
 * @arg y
 * @desc Y座標
 * @text Y座標
 * @type variable
 * @default 0
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 * @command NumItems
 * @text 配置総数を調べる
 * @desc マップ上に配置されたアイテムの総数を指定した変数に代入します。
 * @arg target
 * @text 結果保存用変数
 * @type variable
 * @default 0
 *
 * @command ClearOtherMap
 * @text 他のマップのアイテムを全て消去
 * @desc 他のマップに置かれているアイテムを消します
 * @arg groopKeep
 * @text 親子関係にあるマップで保持
 * @desc 現在のマップから見て親子関係にあるマップではアイテムを保持します
 * @type boolean
 * @default true
 *
 * @command ClearCurrentMap
 * @text 現在のマップのアイテムをすべて消去
 * @desc アイテムをすべて削除します
 * パッと消えるので、画面を暗転させるなどして対応してください
 *
 *
 * @command placeSimpleItem
 * @text (非推奨)アイテムを置く
 * @desc 地面にアイテムを置きます。
 * プラグインコマンドの修正のため、今後削除します。
 * @arg item
 * @type item
 * @default 0
 * @arg amount
 * @text アイテムの個数
 * @type number
 * @default 1
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 * @command placeSimpleWeapon
 * @text (非推奨)武器を置く
 * @desc 地面に武器を置きます。
 * プラグインコマンドの修正のため、今後削除します。
 * @arg item
 * @text 武器ID
 * @type weapon
 * @default 0
 * @arg amount
 * @text 武器の個数
 * @type number
 * @min 1
 * @default 1
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 * @command placeSimpleArmor
 * @text (非推奨)防具を置く
 * @desc 地面に防具を置きます。座標は発生源のイベントで固定です。
 * 繰り返し実行し続けると置ける場所へ配置します。
 * @arg item
 * @text 防具ID
 * @type armor
 * @default 0
 * @arg amount
 * @text 防具の個数
 * @type number
 * @default 1
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 *
 * @command placeSimpleGold
 * @text (非推奨)お金を置く
 * @desc 地面にゴールドを置きます。座標は発生源のイベントで固定です。
 * @arg min
 * @type number
 * @desc マップに配置するお金の金額。
 * @min 1
 * @default 100
 * @arg max
 * @type number
 * @default 500
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 *
 * @command placeItem
 * @text (非推奨)アイテムを置く
 * @desc 変数で指定されたアイテムを、指定した座標に置きます。
 * @arg type
 * @type select
 * @text アイテム種別
 * @option アイテム
 * @value item
 * @option 武器
 * @value weapon
 * @option 防具
 * @value armor
 * @default item
 * @arg itemId
 * @text アイテムID
 * @desc アイテム指定 変数に指定された番号のアイテムを生成します
 * @type variable
 * @default 0
 * @arg amount
 * @text 個数
 * @desc 指定された変数に応じて個数を設定します。
 * 省略時は1個生成されます。
 * @type variable
 * @default 0
 *
 * @arg x
 * @text X座標
 * @desc X座標
 * @type variable
 * @default 0
 * @arg y
 * @desc Y座標
 * @text Y座標
 * @type variable
 * @default 0
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 * @command placeGold
 * @text (非推奨)お金を置く(変数指定)
 * @desc 変数で指定された金額を、指定した座標に置きます。
 * @arg variableId
 * @text 金額
 * @type variable
 * @default 0
 * @arg x
 * @text X座標
 * @desc X座標
 * @type variable
 * @default 0
 * @arg y
 * @desc Y座標
 * @text Y座標
 * @type variable
 * @default 0
 * @arg asimoto
 * @text 配置方法(足元に置く)
 * @type boolean
 * @on 足元に置く
 * @off 周囲に置く
 * @default true
 *
 * @command numItems
 * @text (非推奨)配置総数を調べる
 * @desc マップ上に配置されたアイテムの総数を指定した変数に代入します。
 * @arg target
 * @text 結果保存用変数
 * @type variable
 * @default 0
 *
 * @command clearOtherMap
 * @text (非推奨)他のマップのアイテムを全て消去
 * @desc 他のマップに置かれているアイテムを消します
 * @arg groopKeep
 * @text 親子関係にあるマップで保持
 * @desc 現在のマップから見て親子関係にあるマップではアイテムを保持します
 * @type boolean
 * @default true
 *
 * @command (非推奨)clearCurrentMap
 * @text 現在のマップのアイテムをすべて消去
 * @desc アイテムをすべて削除します
 * パッと消えるので、画面を暗転させるなどして対応してください
 *
 * @noteParam SpawnSound
 * @noteDir audio/se/
 * @noteType file
 * @noteData items weapons armors
 *
 * @param itemStop
 * @text アイテムの一時停止
 * @desc 指定したスイッチがONの間、アイテムの更新・表示を無効化します
 * @type switch
 * @default 0
 *
 * @param timeLimit
 * @text 消滅までの秒数
 * @desc アイテムの出現から消滅までの秒数
 * @type Number
 * @default 120
 *
 * @param mapItemMax
 * @text 同時出現数
 * @desc 1つのマップ上に置くことができるアイテムスプライトの上限。
 * 内部的には、ここで指定した個数より8多く予備枠を取ります。
 * @type number
 * @default 50
 *
 * @param maxMemory
 * @text 他のマップの情報保持上限
 * @desc 現在のマップ以外のアイテム配置を保持限界を指定します
 * @type number
 * @default 8
 *
 * @param itemSpwanSound
 * @text アイテム出現音
 * @desc 個別設定
 * アイテムのメモ欄に<SpawnSound:ファイル名>と書く
 * @type file
 * @dir audio/se/
 * @default Saint5
 *
 * @param itemGetSound
 * @text アイテム入手音
 * @desc 個別設定
 * アイテムのメモ欄に<GetSound:ファイル名>と書く
 * @type file
 * @dir audio/se/
 * @default item1
 *
 * @param itemGainDisable
 * @text アイテム入手無効スイッチ
 * @desc 指定したスイッチがONの場合、
 * アイテムを拾わずに残します。
 * @type switch
 * @default 0
 *
 * @param itemCallback
 * @text アイテム回収時の処理
 * @type struct<callback>
 * @default {"callBackEvent":"0","itemNameVariable":"0","itemIdVariable":"0","amountVariable":"0"}
 *
 * @param weaponCallback
 * @text 武器回収時の処理
 * @type struct<callback>
 * @default {"callBackEvent":"0","itemNameVariable":"0","itemIdVariable":"0","amountVariable":"0"}
 *
 * @param armorCallback
 * @text 防具回収時の処理
 * @type struct<callback>
 * @default {"callBackEvent":"0","itemNameVariable":"0","itemIdVariable":"0","amountVariable":"0"}
 *
 * @param goldIcon
 * @text お金アイコン
 * @type number
 * @default 314
 *
 * @param goldSpwanSound
 * @text お金出現音
 * @type file
 * @dir audio/se/
 * @default Coin
 *
 * @param goldGetSound
 * @text お金入手音
 * @type file
 * @dir audio/se/
 * @default Coin
 *
 * @param goldCallback
 * @text お金回収時の処理
 * @type struct<callback>
 * @default {"callBackEvent":"0","itemNameVariable":"0","itemIdVariable":"0","amountVariable":"0"}
 *
 * @param PluginCommandMV
 * @text MV用のプラグインコマンドを有効化する
 * @desc MVからMZにコンバートしたプロジェクト用です。
 * @type boolean
 * @default false
 *
 * @param positionX_MV
 * @text MV用・X座標指定変数
 * @type variable
 * @default 0
 * @parent PluginCommandMV
 *
 * @param positionY_MV
 * @text MV用・Y座標指定変数
 * @type variable
 * @default 0
 * @parent PluginCommandMV
 *
 * @param itemId_MV
 * @text MV用・アイテム番号指定
 * @type variable
 * @default 0
 * @parent PluginCommandMV
 *
 * @param amount_MV
 * @text MV用・アイテム個数/金額
 * @desc アイテムの個数・生成するお金の金額を指定する変数です
 * @type variable
 * @default 0
 * @parent PluginCommandMV
 *
 *
 *
 * @help
 * アイテムをマップ上に置くことができます。
 * マップに置いたアイテムは上に乗ることで取得できます。
 * アイテムが重なる場合は、重ならないように移動されます。(とびちり機能)
 *
 * アイテムの配置はプラグインコマンドで行います。
 * 以下のような状況ではアイテムの配置に失敗します。
 * ・プレイヤーが通行不能な座標
 * ・既にアイテムが置いてある場合
 * ・マップ上の生成数の制限を超える場合
 *
 * 配置したアイテムは別のマップへ移動しても保持されます。
 * その際、経過時間は移動前の状態のままです。
 *
 * ■アイテムとびちり機能
 * 指定した座標にアイテムを置けない場合、指定座標の周囲にアイテムを置きます。
 * とびちり先もアイテムの配置チェックが行われます。
 *
 * ■アイテム入手時コールバック
 * アイテム・武器・防具を拾う際に、コモンイベントを呼び出せます。
 * イベントはプラグインパラメータで設定します。
 * このイベントの中で「アイテム入手無効スイッチ」をONにすると、
 * アイテムの回収を中止し、そのままにします。
 *
 *  ■アイテムのメモ欄
 * <SpawnSound:ファイル名>
 * アイテムが生成された際に音を鳴らします
 * <GetSound:ファイル名>
 * アイテムを拾った際に音を鳴らします
 *
 * ■上限ギリギリの状態でアイテムを生成した場合の挙動
 * マップ上に配置できるアイテムの上限を超えてアイテムを生成すると、
 * 古いアイテムが時間切れと同じ方法で消滅します。
 * 消滅完了後に改めてアイテムの出現を行います。
 * 生成に遅れが出ますが、仕様です。
 *
 * ■MV用プラグインコマンド
 * ・PlaceItem item/weapon/armor true/false
 * アイテムを生成します。
 * 第一引数でアイテム種別、第二引数で足元に置くかを指定します。
 * 座標はプラグインコマンドを呼び出したイベントを基準。
 * 個数・アイテム番号は、プラグインパラメータで指定した変数が使われます。
 * 例:PlaceItem item true
 *
 * ・PlaceGoldSimple min max true/false
 * 足元にお金を置きます。
 * 最小値・最大値と足元・周りのどちらに置くかを記載します
 * 例:PlaceGoldSimple 100 200 false
 *
 * ・PlaceGoldEX true/false
 * 変数で指定した情報を基にお金を置きます。
 * 変数はプラグインパラメータで指定します。
 * 例:placeGoldEX true
 *
 * 更新履歴
 * 2022/03/14 ver4.0
 * 非推奨のプラグインコマンドを無効化。
 * 次回更新まではエディタで見えるように残しますが、早めに置き換えてください。
 *
 * アイテム入手処理を改造。
 * コモンイベントによる割り込みを可能にしました。
 * アイテムの所持数に制限のあるゲームを作る時にどうぞ。
 *
 * 2021/09/15 ver3.0
 * プラグインコマンドをMV/MZで共通にする内部実装に変更。
 * これにより、MZ版でのプラグインコマンドの名称が変更。
 * ver2.0までのコマンドは非推奨とし、新型に置き換え。(MVは変更なし)
 * 旧バージョンのコマンドは互換性のために残しますが、将来的に廃止します。
 *
 * 2021/05/27 ver 2.0
 * アイテム取得時のコールバック用コモンイベントを設定可能に
 * 入手通知等にどうぞ
 *
 * ■利用規約
 * 1.利用可能なプロジェクト
 * ・ゲームの内容(配布および販売方法・年齢制限の有無など)を問わず、どのようなゲームにでもご利用いただけます。
 *
 * 2.利用条件
 * ・ゲームの配布(販売を含む)の際に、同梱のテキストなどに本プラグインを利用したことを記載してください。
 * ・複数人のチームによるゲーム作成の場合、参加者の内１名以上が本プラグインを購入している必要があります。
 * ・本プラグインを利用するに際し、利用者は自己の責任に基づいて使用するものとします。
 * ・本プラグインを改変しての利用は可能ですが、その場合は(5)で示すサポートの範囲外とします。
 *
 * 3.禁止事項
 * ・改変の有無に関わらず本プラグインをゲームの配布(販売を含む)以外の方法で、公開・配布・販売する行為。
 * ・配布(販売含む)されたゲームの中から本プラグイン抜き出して使用する行為。
 * ・このプラグインに記載された利用規約を削除・改変する行為。
 *
 * 4.免責事項
 * 当方は以下の内容についてその責任を負わないものとします。
 * ・本プラグインの更新によるセーブデータの互換性消失
 * ・セーブデータの破損
 * ・ゲームデータの破損
 * ・他のプラグインとの併用による誤作動・不具合
 * ・その他プラグインの使用によって生じた損害
 *
 * 5.不具合対応(サポート)
 * ・本プラグインの不具合について可能な限り対応しますが、修正を行うことを保証するものではありません。
 *
 * 9.利用規約の変更について
 * ・この利用規約は予告なく変更されることがあります。
 */

/*~struct~callback:
 *
 * @param callBackEvent
 * @desc アイテム入手時に呼び出すコモンイベント
 * @type common_event
 * @default 0
 *
 * @param itemNameVariable
 * @desc 指定した変数にアイテムの名称を記録します
 * @type variable
 * @default 0
 *
 * @param itemIdVariable
 * @desc 指定した変数にアイテムのIDを記録します
 * @type variable
 * @default 0
 *
 * @param amountVariable
 * @desc 指定した変数にアイテムの個数を記録します
 * @type variable
 * @default 0
 */

const _0x5abb04 = _0x5165;
(function (_0x19ee39, _0x3f5835) {
  const _0x2188e7 = _0x5165,
    _0x197fdf = _0x19ee39();
  while (!![]) {
    try {
      const _0x2d463b =
        -parseInt(_0x2188e7(0x1ed)) / 0x1 +
        -parseInt(_0x2188e7(0x1ee)) / 0x2 +
        -parseInt(_0x2188e7(0x1e5)) / 0x3 +
        -parseInt(_0x2188e7(0x141)) / 0x4 +
        (parseInt(_0x2188e7(0x14c)) / 0x5) *
          (parseInt(_0x2188e7(0x1bd)) / 0x6) +
        -parseInt(_0x2188e7(0x1f1)) / 0x7 +
        (-parseInt(_0x2188e7(0x116)) / 0x8) *
          (-parseInt(_0x2188e7(0x1f7)) / 0x9);
      if (_0x2d463b === _0x3f5835) break;
      else _0x197fdf["push"](_0x197fdf["shift"]());
    } catch (_0xa8bb38) {
      _0x197fdf["push"](_0x197fdf["shift"]());
    }
  }
})(_0x35aa, 0xbed9e);
class I_RenderbleItem_UZMIP {
  [_0x5abb04(0x1f0)]() {
    return ![];
  }
  [_0x5abb04(0x18e)]() {}
  [_0x5abb04(0x12e)]() {
    return !![];
  }
  [_0x5abb04(0x11d)]() {
    return 0xff;
  }
  ["iconIndex"]() {
    return 0x0;
  }
  ["screenX"]() {
    return 0x0;
  }
  [_0x5abb04(0x19e)]() {
    return 0x0;
  }
  [_0x5abb04(0x127)]() {
    return 0x0;
  }
}
class I_ItemEventV2_UZMIP {
  [_0x5abb04(0x1d3)](_0x5c3609) {
    return { code: 0x0, indent: _0x5c3609, parameters: [] };
  }
  [_0x5abb04(0x120)]() {
    return 0x0;
  }
  ["isEmpty"]() {
    return !![];
  }
  ["getBaseSetting"]() {
    return null;
  }
  [_0x5abb04(0x12f)]() {
    const _0x5702ba = _0x5abb04;
    return this[_0x5702ba(0x1a5)]()["itemSpwanSound"];
  }
  [_0x5abb04(0x165)]() {
    const _0x921e87 = _0x5abb04;
    return this[_0x921e87(0x1a5)]()[_0x921e87(0x159)];
  }
  [_0x5abb04(0x128)]() {
    return "";
  }
  ["amount"]() {
    return 0x0;
  }
  [_0x5abb04(0x11c)]() {}
  [_0x5abb04(0x1d4)]() {}
  [_0x5abb04(0x19c)]() {
    return 0x0;
  }
}
class UZMIP_MapItem_LifeTimer {
  constructor() {
    const _0x32795d = _0x5abb04;
    (this[_0x32795d(0x15e)] = 0x960), this[_0x32795d(0x1bf)]();
  }
  [_0x5abb04(0x1bf)]() {
    const _0x167e18 = _0x5abb04;
    this[_0x167e18(0x133)] = Date[_0x167e18(0x13f)]();
  }
  [_0x5abb04(0x15d)]() {
    const _0x270820 = _0x5abb04;
    return this[_0x270820(0x133)];
  }
  [_0x5abb04(0x126)]() {
    const _0x3ad15d = _0x5abb04;
    this[_0x3ad15d(0x15e)] = this["timeLimitInitialValue"]();
  }
  [_0x5abb04(0x1b7)]() {
    return 0x4b0;
  }
  ["update"]() {
    const _0x469fb8 = _0x5abb04;
    this[_0x469fb8(0x15e)] -= 0x1;
  }
  [_0x5abb04(0x1a3)]() {
    const _0x1e0651 = _0x5abb04;
    return this[_0x1e0651(0x15e)] <= 0x14a;
  }
  [_0x5abb04(0x118)]() {
    const _0x28f931 = _0x5abb04;
    this[_0x28f931(0x15e)] = 0x14a;
  }
  [_0x5abb04(0x16f)]() {
    this["_time"] = 0x0;
  }
  [_0x5abb04(0x11d)]() {
    const _0x3af1d8 = _0x5abb04,
      _0x1e02ae = Math["max"](0x0, this[_0x3af1d8(0x1ef)]() / 0xa);
    return Math[_0x3af1d8(0x122)](_0x1e02ae * _0x1e02ae, 0xff);
  }
  [_0x5abb04(0x1ef)]() {
    const _0x177e2a = _0x5abb04;
    return this[_0x177e2a(0x15e)];
  }
  ["isTimeout"]() {
    const _0x435e6e = _0x5abb04;
    return this[_0x435e6e(0x15e)] <= 0x0;
  }
}
class UZMIP_ItemPosition {
  constructor() {
    this["setPosition"](0x0, 0x0);
  }
  [_0x5abb04(0x177)](_0x397d84, _0x38f94c) {
    (this["_x"] = _0x397d84), (this["_y"] = _0x38f94c);
  }
  [_0x5abb04(0x1bc)](_0xae902f, _0x2b7a5a) {
    return this["_x"] === _0xae902f && this["_y"] === _0x2b7a5a;
  }
  get ["x"]() {
    return this["_x"];
  }
  get ["y"]() {
    return this["_y"];
  }
  [_0x5abb04(0x17a)]() {
    const _0x58390a = _0x5abb04,
      _0x160f37 = $gameMap[_0x58390a(0x1eb)]();
    return Math[_0x58390a(0x1a1)](
      this[_0x58390a(0x17e)]() * _0x160f37 + _0x160f37 / 0x2
    );
  }
  [_0x5abb04(0x19e)]() {
    const _0x16d1c5 = _0x5abb04,
      _0x5e1f3b = $gameMap["tileHeight"]();
    return Math[_0x16d1c5(0x1a1)](this["scrolledY"]() * _0x5e1f3b + _0x5e1f3b);
  }
  ["scrolledX"]() {
    const _0x3845a4 = _0x5abb04;
    return $gameMap[_0x3845a4(0x1e3)](this["x"]);
  }
  [_0x5abb04(0x13a)]() {
    const _0x53532e = _0x5abb04;
    return $gameMap[_0x53532e(0x10e)](this["y"]);
  }
  ["screenZ"]() {
    return 0x1;
  }
}
function _0x35aa() {
  const _0x3c1aa9 = [
    "isMVcommandEnabeled",
    "PlaceSimpleArmor",
    "PlaceItem",
    "registerCommandMZ",
    "23472eUZMjX",
    "clearOtherGroop",
    "armorCallback",
    "update",
    "callMV",
    "_amount",
    "itemGainTarget",
    "bindMap",
    "positionY_MV",
    "adjustY",
    "itemIdVariable",
    "_eventCode",
    "setValue",
    "itemGainEventCode",
    "true",
    "clear",
    "PlaceSimpleWeapon",
    "14704vdOQNZ",
    "gold",
    "terminate",
    "_interpreter",
    "playSe",
    "reserveCommonEvent",
    "playerGainItem_V2",
    "opacity",
    "isItemStop",
    "prototype",
    "iconIndex",
    "createGameObjects",
    "min",
    "startMapEvent",
    "mvCommand",
    "goldCallback",
    "resetTimer",
    "screenZ",
    "itemName",
    "positionX_MV",
    "itemId_MV",
    "mapItemMax",
    "gainGold",
    "hasNewItem",
    "needsDelete",
    "itemSpwanSoundName",
    "addItem",
    "updateOpacity",
    "$gameMap.deletePlacedItem(",
    "_timeStamp",
    "anchor",
    "setup",
    "_table",
    "_item",
    "setFrame",
    "find",
    "scrolledY",
    "asimoto",
    "_mvParamNames",
    "callEvent",
    "playItemGetSound",
    "now",
    "_sprites",
    "1897000exGquf",
    "makeNewMemory",
    "clearOtherMap",
    "soundPitch",
    "itemStopSwitch",
    "_mapId",
    "character",
    "goldSpwanSound",
    "isItem",
    "createAudioParam",
    "registerCommandMV",
    "799660pazKdH",
    "_paramNames",
    "soundVolume",
    "createItemGainEventCode",
    "amount",
    "pluginCommand",
    "abs",
    "itemPickupV2",
    "makeItemPlace",
    "itemGainDisable",
    "meta",
    "_itemId",
    "PlaceGoldSimple",
    "itemGetSound",
    "setItem",
    "armor",
    "weaponCallback",
    "timeStamp",
    "_time",
    "itemGainGainDisableSwitch",
    "target",
    "_lifeTimer",
    "callbackEvent",
    "addMawari",
    "goldGetSound",
    "itemGetSoundName",
    "get",
    "_eventId",
    "itemCallback",
    "PluginCommandMV",
    "asimotos",
    "parameters",
    "setGold",
    "registerCommand",
    "createPutItemSprites",
    "kill",
    "max",
    "tileHeight",
    "updatePosition",
    "positionUsed",
    "onPickedUp",
    "playerGainItem",
    "variableArg",
    "setPosition",
    "playSpwanSound",
    "assign",
    "screenX",
    "deleteItem",
    "createItemGetSoundCode",
    "topParentId",
    "scrolledX",
    "length",
    "_pluginName",
    "isNull",
    "makeMZ_arg",
    "createArg",
    "randomInt",
    "numItems",
    "iconHeight",
    "getSetting",
    "_created",
    "updateFrame",
    "altPositions",
    "parse",
    "setPositionFromInterpriter",
    "_itemPlaceMIP",
    "onSpriteCreated",
    "isTriggerIn",
    "item",
    "name",
    "getMawariPosition",
    "isSpriteCreated",
    "_func",
    "bindMapForId",
    "filter",
    "makeItems",
    "checkPassage",
    "Container",
    "visible",
    "amount_MV",
    "commonEventId",
    "isWeapon",
    "screenY",
    "list",
    "itemBase",
    "floor",
    "createCharacters",
    "isTerminated",
    "GetSound",
    "getBaseSetting",
    "value",
    "shift",
    "mapItems",
    "isRunning",
    "mapItem",
    "soundPan",
    "createEventCode",
    "RPGMAKER_NAME",
    "itemId",
    "checkItemPassage",
    "createSelfDeleteCode",
    "addAsimoto",
    "iconWidth",
    "currencyUnit",
    "_commandName",
    "_itemName",
    "getPlasablePosition",
    "timeLimitInitialValue",
    "itemStop",
    "_list",
    "_map",
    "variableId",
    "pos",
    "6qUWCJY",
    "currentList",
    "makeTimeStamp",
    "conceptData",
    "terminateOldItem",
    "setAmount",
    "isArmor",
    "type",
    "isEventRunning",
    "map",
    "maxMemory",
    "setObject",
    "isEmpty",
    "callBackEventId",
    "isTimeout",
    "isItemPlacable",
    "gainItem",
    "amountVariableId",
    "loadSystem",
    "some",
    "commonEventCall",
    "mvCall",
    "createItemGainCode",
    "writeVariable",
    "object",
    "itemPickup",
    "addChild",
    "push",
    "add",
    "isEnabled",
    "_hasNewItem",
    "call",
    "goldIcon",
    "SpawnSound",
    "clearCurrentMap",
    "mapId",
    "parentId",
    "canItemPickeup",
    "adjustX",
    "ClearCurrentMap",
    "4234326LYMaqz",
    "current",
    "_position",
    "renderItem",
    "_gold",
    "isEventIdValid",
    "tileWidth",
    "clearItem",
    "796759BjerdB",
    "148324DqwOjG",
    "timeLimit",
    "isValid",
    "9905679bHLwlG",
    "refresh",
  ];
  _0x35aa = function () {
    return _0x3c1aa9;
  };
  return _0x35aa();
}
class UZMIP_MapItemCasset extends I_RenderbleItem_UZMIP {
  constructor(_0x5785ba) {
    const _0x379415 = _0x5abb04;
    super(),
      (this["_lifeTimer"] = new UZMIP_MapItem_LifeTimer()),
      (this[_0x379415(0x137)] = _0x5785ba),
      (this[_0x379415(0x188)] = ![]),
      (this[_0x379415(0x1e7)] = new UZMIP_ItemPosition());
  }
  ["timeStamp"]() {
    const _0x225afc = _0x5abb04;
    return this[_0x225afc(0x161)][_0x225afc(0x15d)]();
  }
  [_0x5abb04(0x1f0)]() {
    const _0x21323b = _0x5abb04;
    if (!this[_0x21323b(0x137)]) return ![];
    return !this[_0x21323b(0x137)][_0x21323b(0x1c9)]();
  }
  [_0x5abb04(0x1e8)]() {
    return this;
  }
  [_0x5abb04(0x108)]() {
    const _0x4a6451 = _0x5abb04;
    this[_0x4a6451(0x161)][_0x4a6451(0x108)]();
  }
  ["kill"]() {
    const _0x14cc18 = _0x5abb04;
    this[_0x14cc18(0x161)][_0x14cc18(0x16f)]();
  }
  [_0x5abb04(0x118)]() {
    const _0x5da900 = _0x5abb04;
    this[_0x5da900(0x161)][_0x5da900(0x118)]();
  }
  ["isTerminated"]() {
    const _0x2ed18b = _0x5abb04;
    return this["_lifeTimer"][_0x2ed18b(0x1a3)]();
  }
  [_0x5abb04(0x1bc)](_0x70c512, _0x1d5328) {
    const _0x1789ff = _0x5abb04;
    return this[_0x1789ff(0x1e7)][_0x1789ff(0x1bc)](_0x70c512, _0x1d5328);
  }
  ["onSpriteCreated"]() {
    const _0x6cc4c9 = _0x5abb04;
    !this[_0x6cc4c9(0x188)] && this[_0x6cc4c9(0x178)](),
      (this["_created"] = !![]);
  }
  [_0x5abb04(0x193)]() {
    const _0x2b1249 = _0x5abb04;
    return this[_0x2b1249(0x188)];
  }
  [_0x5abb04(0x1da)]() {
    const _0x4d76da = _0x5abb04;
    return this[_0x4d76da(0x188)] && !this["_lifeTimer"][_0x4d76da(0x1cb)]();
  }
  get ["x"]() {
    const _0xffc380 = _0x5abb04;
    return this[_0xffc380(0x1e7)]["x"];
  }
  get ["y"]() {
    const _0x4d707b = _0x5abb04;
    return this[_0x4d707b(0x1e7)]["y"];
  }
  ["setPosition"](_0xef187b, _0x4dad24) {
    const _0x10d673 = _0x5abb04;
    this[_0x10d673(0x1e7)][_0x10d673(0x177)](_0xef187b, _0x4dad24);
  }
  ["screenX"]() {
    const _0x40660b = _0x5abb04;
    return this[_0x40660b(0x1e7)][_0x40660b(0x17a)]();
  }
  ["screenY"]() {
    const _0x2bf995 = _0x5abb04;
    return this[_0x2bf995(0x1e7)][_0x2bf995(0x19e)]();
  }
  [_0x5abb04(0x127)]() {
    return 0x1;
  }
  [_0x5abb04(0x11d)]() {
    const _0x328eff = _0x5abb04;
    return this["_lifeTimer"][_0x328eff(0x11d)]();
  }
  [_0x5abb04(0x12e)]() {
    const _0x66544b = _0x5abb04;
    if (!this["_item"]) return !![];
    return (
      this[_0x66544b(0x161)][_0x66544b(0x1cb)]() ||
      this[_0x66544b(0x137)][_0x66544b(0x1c9)]()
    );
  }
  [_0x5abb04(0x120)]() {
    const _0x488090 = _0x5abb04;
    if (this[_0x488090(0x137)])
      return this[_0x488090(0x137)][_0x488090(0x120)]();
    return 0x0;
  }
  ["itemGainGainDisableSwitch"]() {
    return 0x0;
  }
  [_0x5abb04(0x1ac)]() {
    const _0x2d1694 = _0x5abb04,
      _0x285567 = this[_0x2d1694(0x15f)](),
      _0x57d8c6 = this[_0x2d1694(0x137)]["commonEventId"](),
      _0xfc6cbb = this[_0x2d1694(0x137)][_0x2d1694(0x1d3)](0x0),
      _0x264d75 = [
        { code: 0x79, indent: 0x0, parameters: [_0x285567, 0x0, 0x1] },
        { code: 0x75, indent: 0x0, parameters: [_0x57d8c6] },
        { code: 0x6f, indent: 0x0, parameters: [0x0, _0x285567, 0x0] },
        { code: 0x73, indent: 0x1, parameters: [] },
        { code: 0x19c, indent: 0x0, parameters: [] },
        _0xfc6cbb,
        this[_0x2d1694(0x17c)](),
        this[_0x2d1694(0x1b0)](),
      ];
    return _0x264d75;
  }
  ["onPickedUp"](_0x4f8bb0) {
    const _0x3660a3 = _0x5abb04;
    this["_item"][_0x3660a3(0x1d4)]();
    const _0x5316dd = this[_0x3660a3(0x1ac)]();
    $gameMap[_0x3660a3(0x119)][_0x3660a3(0x1a9)]()
      ? $gameMap[_0x3660a3(0x119)]["setupChild"](_0x5316dd, 0x0)
      : $gameMap[_0x3660a3(0x119)][_0x3660a3(0x135)](_0x5316dd, 0x0);
  }
  ["soundVolume"]() {
    return 0x64;
  }
  [_0x5abb04(0x144)]() {
    return 0x64;
  }
  [_0x5abb04(0x1ab)]() {
    return 0x0;
  }
  ["createAudioParam"](_0x18aeb3) {
    const _0x5afbfe = _0x5abb04;
    return {
      name: _0x18aeb3,
      volume: this[_0x5afbfe(0x14e)](),
      pan: this[_0x5afbfe(0x1ab)](),
      pitch: this[_0x5afbfe(0x144)](),
      pos: 0x0,
    };
  }
  ["playSpwanSound"]() {
    const _0x1e46f0 = _0x5abb04;
    if (this[_0x1e46f0(0x137)]) {
      const _0x1e1a85 = this[_0x1e46f0(0x14a)](
        this["_item"]["itemSpwanSoundName"]()
      );
      AudioManager[_0x1e46f0(0x11a)](_0x1e1a85);
    }
  }
  [_0x5abb04(0x13e)]() {
    const _0x1933c3 = _0x5abb04;
    if (this[_0x1933c3(0x137)]) {
      const _0x53b631 = this["createAudioParam"](
        this[_0x1933c3(0x137)]["itemGetSoundName"]()
      );
      AudioManager[_0x1933c3(0x11a)](_0x53b631);
    }
  }
  ["createItemGetSoundCode"]() {
    const _0x42e342 = _0x5abb04,
      _0x55c545 = this[_0x42e342(0x14a)](
        this[_0x42e342(0x137)]["itemGetSoundName"]()
      );
    return { code: 0xfa, indent: 0x0, parameters: [_0x55c545] };
  }
  [_0x5abb04(0x1b0)]() {
    const _0x290d17 = _0x5abb04,
      _0x5d3fc6 =
        _0x290d17(0x132) + this[_0x290d17(0x161)][_0x290d17(0x15d)]() + ")";
    return { code: 0x163, indent: 0x0, parameters: [_0x5d3fc6] };
  }
}
class UZMIP_EventItem extends I_ItemEventV2_UZMIP {
  constructor(_0x22d854, _0x364af3) {
    const _0x3c5810 = _0x5abb04;
    super(),
      (this[_0x3c5810(0x137)] = _0x22d854),
      (this[_0x3c5810(0x10a)] = _0x364af3);
  }
  [_0x5abb04(0x1d3)](_0x33c364) {
    const _0x37a81a = _0x5abb04,
      _0x5e7d6b = this[_0x37a81a(0x162)]();
    if (_0x5e7d6b) {
      const _0x52cc8e = _0x5e7d6b[_0x37a81a(0x14f)](
        this[_0x37a81a(0x137)][_0x37a81a(0x1ae)](),
        this[_0x37a81a(0x10a)],
        _0x33c364
      );
      return _0x52cc8e;
    }
    return super[_0x37a81a(0x1d3)](_0x33c364);
  }
  ["writeVariable"]() {
    const _0x43a4e5 = _0x5abb04,
      _0x2ebafb = this[_0x43a4e5(0x162)]();
    if (_0x2ebafb) {
      const _0x2e5f82 = this["_item"][_0x43a4e5(0x1d5)]();
      _0x2e5f82 &&
        _0x2ebafb[_0x43a4e5(0x1d4)](
          _0x2e5f82[_0x43a4e5(0x191)],
          _0x2e5f82["id"],
          this[_0x43a4e5(0x10a)]
        );
    }
  }
  [_0x5abb04(0x19c)]() {
    const _0x43b432 = _0x5abb04,
      _0x3dd019 = this[_0x43b432(0x162)]();
    if (_0x3dd019) return _0x3dd019[_0x43b432(0x1ca)]();
    return super[_0x43b432(0x19c)]();
  }
  [_0x5abb04(0x1c9)]() {
    const _0x211649 = _0x5abb04;
    return this["_item"][_0x211649(0x181)]();
  }
  ["amount"]() {
    const _0x54600b = _0x5abb04;
    return this[_0x54600b(0x10a)];
  }
  ["iconIndex"]() {
    const _0x304f43 = _0x5abb04,
      _0x3c9a0b = this[_0x304f43(0x137)][_0x304f43(0x1d5)]();
    if (_0x3c9a0b) return _0x3c9a0b[_0x304f43(0x120)];
    return 0x0;
  }
  [_0x5abb04(0x12f)]() {
    const _0x5e9dfa = _0x5abb04,
      _0x40662e = this[_0x5e9dfa(0x137)][_0x5e9dfa(0x1d5)]();
    if (_0x40662e) {
      const _0x56aa74 = _0x40662e[_0x5e9dfa(0x156)]["SpawnSound"];
      if (_0x56aa74) return _0x56aa74;
    }
    return super[_0x5e9dfa(0x12f)]();
  }
  [_0x5abb04(0x165)]() {
    const _0x23ff51 = _0x5abb04,
      _0x3b3748 = this[_0x23ff51(0x137)][_0x23ff51(0x1d5)]();
    if (_0x3b3748) {
      const _0x4dc66c = _0x3b3748[_0x23ff51(0x156)][_0x23ff51(0x1a4)];
      if (_0x4dc66c) return _0x4dc66c;
    }
    return super["itemGetSoundName"]();
  }
  [_0x5abb04(0x11c)]() {
    const _0x4d8969 = _0x5abb04,
      _0x4a5842 = this[_0x4d8969(0x137)][_0x4d8969(0x1d5)]();
    _0x4a5842 &&
      $gameParty[_0x4d8969(0x1cd)](_0x4a5842, this[_0x4d8969(0x10a)], ![]);
  }
  [_0x5abb04(0x162)]() {
    return null;
  }
}
function _0x5165(_0x32e210, _0x6f2836) {
  const _0x35aa5a = _0x35aa();
  return (
    (_0x5165 = function (_0x51655b, _0x41ba0a) {
      _0x51655b = _0x51655b - 0x108;
      let _0x34c3f8 = _0x35aa5a[_0x51655b];
      return _0x34c3f8;
    }),
    _0x5165(_0x32e210, _0x6f2836)
  );
}
class UZMIP_EventGold extends I_ItemEventV2_UZMIP {
  constructor(_0x487f3f) {
    const _0x3c6d58 = _0x5abb04;
    super(), (this[_0x3c6d58(0x10a)] = _0x487f3f);
  }
  [_0x5abb04(0x1d3)](_0x541e31) {
    const _0x2f0b01 = _0x5abb04;
    return {
      code: 0x7d,
      indent: _0x541e31,
      parameters: [0x0, 0x0, this[_0x2f0b01(0x10a)]],
    };
  }
  ["isEmpty"]() {
    const _0x29ab71 = _0x5abb04;
    return this[_0x29ab71(0x10a)] <= 0x0;
  }
  [_0x5abb04(0x150)]() {
    const _0x20ad97 = _0x5abb04;
    return this[_0x20ad97(0x10a)];
  }
  [_0x5abb04(0x1c0)]() {
    return null;
  }
  [_0x5abb04(0x165)]() {
    const _0x198095 = _0x5abb04;
    return this[_0x198095(0x1c0)]()[_0x198095(0x164)];
  }
  [_0x5abb04(0x12f)]() {
    const _0x6fe59f = _0x5abb04;
    return this[_0x6fe59f(0x1c0)]()[_0x6fe59f(0x148)];
  }
  [_0x5abb04(0x120)]() {
    const _0x36c2b9 = _0x5abb04;
    return this[_0x36c2b9(0x1c0)]()[_0x36c2b9(0x1dd)];
  }
  ["playerGainItem_V2"]() {
    const _0x228e5d = _0x5abb04;
    $gameParty[_0x228e5d(0x12c)](this[_0x228e5d(0x10a)]);
  }
}
class UZMIP_MapItems {
  constructor(_0x3ddc36) {
    (this["_mapId"] = _0x3ddc36),
      (this["_list"] = []),
      (this["_hasNewItem"] = ![]);
  }
  [_0x5abb04(0x187)]() {
    return null;
  }
  ["deleteItem"](_0x3b0b8e) {
    const _0x4fc853 = _0x5abb04;
    for (const _0x2fd46c of this[_0x4fc853(0x1b9)]) {
      _0x2fd46c[_0x4fc853(0x15d)]() === _0x3b0b8e &&
        _0x2fd46c[_0x4fc853(0x16f)]();
    }
  }
  [_0x5abb04(0x1e1)]() {
    const _0x38f513 = _0x5abb04,
      _0x28e47a = $dataMapInfos[this[_0x38f513(0x146)]];
    if (_0x28e47a)
      return $dataMapInfos[this[_0x38f513(0x146)]][_0x38f513(0x1e1)];
    return 0x0;
  }
  [_0x5abb04(0x1e0)]() {
    const _0x58de0b = _0x5abb04;
    return this[_0x58de0b(0x146)];
  }
  ["mapItemMax"]() {
    const _0x4b4536 = _0x5abb04;
    return this[_0x4b4536(0x187)]()[_0x4b4536(0x12b)];
  }
  [_0x5abb04(0x12d)]() {
    const _0x1727ac = _0x5abb04;
    return this[_0x1727ac(0x1db)];
  }
  [_0x5abb04(0x1da)]() {
    const _0x1272ef = _0x5abb04,
      _0x4bc051 = this["getSetting"]();
    if (_0x4bc051[_0x1272ef(0x145)] > 0x0)
      return !$gameSwitches["value"](_0x4bc051[_0x1272ef(0x145)]);
    return !![];
  }
  ["isItemStop"]() {
    const _0x38f7be = _0x5abb04,
      _0x71e0cf = this[_0x38f7be(0x187)]();
    if (_0x71e0cf[_0x38f7be(0x145)] > 0x0)
      return $gameSwitches[_0x38f7be(0x1a6)](_0x71e0cf[_0x38f7be(0x145)]);
    return ![];
  }
  [_0x5abb04(0x108)]() {
    const _0x2bd9f6 = _0x5abb04;
    if (this[_0x2bd9f6(0x11e)]()) return;
    let _0x571f64 = ![];
    for (const _0x42a63b of this[_0x2bd9f6(0x1b9)]) {
      _0x42a63b[_0x2bd9f6(0x108)](),
        _0x42a63b["needsDelete"]() && (_0x571f64 = !![]);
    }
    _0x571f64 && this[_0x2bd9f6(0x1f2)]();
  }
  [_0x5abb04(0x19f)]() {
    const _0xeb7d1 = _0x5abb04;
    return this[_0xeb7d1(0x1b9)];
  }
  [_0x5abb04(0x18e)]() {
    const _0x350c79 = _0x5abb04;
    this[_0x350c79(0x1db)] = ![];
  }
  [_0x5abb04(0x1c1)]() {
    const _0x253956 = _0x5abb04;
    if (this[_0x253956(0x1b9)][_0x253956(0x17f)] > this[_0x253956(0x12b)]())
      for (const _0xf9ded1 of this["_list"]) {
        if (!_0xf9ded1[_0x253956(0x1a3)]()) {
          _0xf9ded1[_0x253956(0x118)]();
          return;
        }
      }
  }
  [_0x5abb04(0x1d9)](_0x1e6370) {
    const _0x157d25 = _0x5abb04;
    this["_list"][_0x157d25(0x1d8)](_0x1e6370),
      this[_0x157d25(0x1c1)](),
      (this[_0x157d25(0x1db)] = !![]);
  }
  ["addAsimoto"](_0x49a95e) {
    const _0x1a32bd = _0x5abb04,
      _0x487055 = this["getPlasablePosition"](_0x49a95e["x"], _0x49a95e["y"]);
    _0x487055 &&
      (_0x49a95e[_0x1a32bd(0x177)](_0x487055["x"], _0x487055["y"]),
      this[_0x1a32bd(0x1d9)](_0x49a95e));
  }
  ["addMawari"](_0x4a2985) {
    const _0x2fbafe = _0x5abb04,
      _0x3420cd = this[_0x2fbafe(0x192)](_0x4a2985["x"], _0x4a2985["y"]);
    _0x3420cd &&
      (_0x4a2985["setPosition"](_0x3420cd["x"], _0x3420cd["y"]),
      this[_0x2fbafe(0x1d9)](_0x4a2985));
  }
  ["positionUsed"](_0x52149d, _0x29767a) {
    const _0x2d42b8 = _0x5abb04;
    return this[_0x2d42b8(0x1b9)][_0x2d42b8(0x1d0)]((_0x3f5945) => {
      const _0x5bb4bb = _0x2d42b8;
      return _0x3f5945[_0x5bb4bb(0x1bc)](_0x52149d, _0x29767a);
    });
  }
  [_0x5abb04(0x1cc)](_0x6784bf, _0x35de46) {
    const _0x22cdeb = _0x5abb04;
    return (
      this[_0x22cdeb(0x1af)](_0x6784bf, _0x35de46) &&
      !this["positionUsed"](_0x6784bf, _0x35de46)
    );
  }
  [_0x5abb04(0x18a)](_0x3f4e4e, _0x598d68) {
    const _0x4829b0 = _0x5abb04,
      _0xbe539a = new Point(_0x3f4e4e - 0x1, _0x598d68 - 0x1),
      _0xca1502 = new Point(_0x3f4e4e + 0x1, _0x598d68 - 0x1),
      _0x325233 = new Point(_0x3f4e4e - 0x1, _0x598d68 + 0x1),
      _0xc67161 = new Point(_0x3f4e4e + 0x1, _0x598d68 + 0x1),
      _0x588903 = new Point(_0x3f4e4e, _0x598d68 - 0x1),
      _0x619d3d = new Point(_0x3f4e4e + 0x1, _0x598d68),
      _0x2005a7 = new Point(_0x3f4e4e - 0x1, _0x598d68),
      _0xed2b62 = new Point(_0x3f4e4e, _0x598d68 + 0x1),
      _0x1c9240 = [
        _0x325233,
        _0xbe539a,
        _0xca1502,
        _0xc67161,
        _0x588903,
        _0x619d3d,
        _0x2005a7,
        _0xed2b62,
      ]["filter"]((_0x20ed46) => {
        const _0x5a89af = _0x5165;
        return (
          !$gamePlayer[_0x5a89af(0x1bc)](_0x20ed46["x"], _0x20ed46["y"]) &&
          this["isItemPlacable"](_0x20ed46["x"], _0x20ed46["y"])
        );
      });
    if (_0x1c9240[_0x4829b0(0x17f)] > 0x0) {
      const _0x2d4b2b = Math[_0x4829b0(0x184)](_0x1c9240[_0x4829b0(0x17f)]);
      return _0x1c9240[_0x2d4b2b];
    }
    const _0x16c02a = new Point($gamePlayer["x"], $gamePlayer["y"]),
      _0x2f68a5 = Math[_0x4829b0(0x152)](_0x16c02a["x"] - _0x3f4e4e),
      _0x488aad = Math[_0x4829b0(0x152)](_0x16c02a["y"] - _0x598d68);
    if (_0x2f68a5 <= 0x1 && _0x488aad <= 0x1) return _0x16c02a;
    return null;
  }
  [_0x5abb04(0x1af)](_0x3df0e3, _0xfa27dc) {
    const _0x3a01b0 = _0x5abb04;
    return $gameMap[_0x3a01b0(0x198)](_0x3df0e3, _0xfa27dc, 0xf);
  }
  [_0x5abb04(0x192)](_0x55a5a7, _0x5991a5) {
    const _0x3ec724 = this["altPositions"](_0x55a5a7, _0x5991a5);
    if (_0x3ec724) return _0x3ec724;
    return null;
  }
  [_0x5abb04(0x1b6)](_0x26d05a, _0x36ad06) {
    const _0x4189ba = _0x5abb04;
    if (this[_0x4189ba(0x1af)](_0x26d05a, _0x36ad06)) {
      if (!this[_0x4189ba(0x173)](_0x26d05a, _0x36ad06))
        return new Point(_0x26d05a, _0x36ad06);
    }
    return this["getMawariPosition"](_0x26d05a, _0x36ad06);
  }
  [_0x5abb04(0x153)]() {
    const _0x255c98 = _0x5abb04;
    for (const _0x3caecb of this["_list"]) {
      if (_0x3caecb[_0x255c98(0x1da)]()) {
      }
    }
  }
  ["itemPickup"](_0x42a626) {
    const _0x3af309 = _0x5abb04;
    let _0x1b5bd0 = ![];
    for (const _0xda27ee of this["_list"]) {
      _0xda27ee["isEnabled"]() &&
        _0x42a626[_0x3af309(0x1bc)](_0xda27ee["x"], _0xda27ee["y"]) &&
        _0xda27ee[_0x3af309(0x174)](_0x42a626),
        _0xda27ee[_0x3af309(0x12e)]() && (_0x1b5bd0 = !![]);
    }
    _0x1b5bd0 && this["refresh"]();
  }
  [_0x5abb04(0x114)]() {
    const _0x47e1d6 = _0x5abb04;
    for (const _0x504746 of this[_0x47e1d6(0x1b9)]) {
      _0x504746["kill"]();
    }
    this[_0x47e1d6(0x1b9)] = [];
  }
  [_0x5abb04(0x1f2)]() {
    const _0x1087fd = _0x5abb04;
    this[_0x1087fd(0x1b9)] = this["_list"]["filter"]((_0x1b1258) => {
      const _0xff8191 = _0x1087fd;
      return (
        !_0x1b1258[_0xff8191(0x193)]() && (this[_0xff8191(0x1db)] = !![]),
        !_0x1b1258[_0xff8191(0x12e)]()
      );
    });
  }
  [_0x5abb04(0x185)]() {
    const _0x2449e4 = _0x5abb04;
    return this[_0x2449e4(0x1b9)][_0x2449e4(0x17f)];
  }
}
class UZMIP_MapitmeContainer {
  constructor() {
    const _0x3f66f2 = _0x5abb04;
    this[_0x3f66f2(0x114)]();
  }
  [_0x5abb04(0x17b)](_0x58a04b) {
    const _0x4548a8 = _0x5abb04,
      _0x13eb84 = this[_0x4548a8(0x1e6)]();
    _0x13eb84 && _0x13eb84[_0x4548a8(0x17b)](_0x58a04b);
  }
  [_0x5abb04(0x1e6)]() {
    return this["_current"];
  }
  [_0x5abb04(0x12d)]() {
    const _0x322bc2 = _0x5abb04,
      _0x4def54 = this[_0x322bc2(0x1e6)]();
    return _0x4def54 && _0x4def54[_0x322bc2(0x12d)]();
  }
  [_0x5abb04(0x1be)]() {
    const _0x230ef6 = _0x5abb04,
      _0x16f3c2 = this[_0x230ef6(0x1e6)]();
    if (_0x16f3c2) return _0x16f3c2[_0x230ef6(0x19f)]();
    return [];
  }
  [_0x5abb04(0x17d)](_0x1d892c) {
    const _0x533fcc = _0x5abb04;
    let _0x198dde = _0x1d892c;
    for (let _0x9cc59a = 0x0; _0x9cc59a < 0x64; _0x9cc59a++) {
      const _0x2671d9 = $dataMapInfos[_0x198dde];
      if (!_0x2671d9) return Number(_0x198dde);
      if (_0x2671d9[_0x533fcc(0x1e1)] === 0x0) return _0x198dde;
      else _0x198dde = _0x2671d9[_0x533fcc(0x1e1)];
    }
    return 0x0;
  }
  [_0x5abb04(0x1f8)](_0x4e901a) {
    const _0x840b72 = _0x5abb04,
      _0xfce13a = this[_0x840b72(0x17d)](_0x4e901a);
    this["_list"] = this["_list"][_0x840b72(0x196)]((_0x43a8a3) => {
      const _0x5a9c54 = _0x840b72,
        _0x15b5eb = this["topParentId"](_0x43a8a3[_0x5a9c54(0x1e0)]());
      if (_0x15b5eb === _0xfce13a) return !![];
      return _0x43a8a3[_0x5a9c54(0x114)](), ![];
    });
  }
  [_0x5abb04(0x143)](_0x2d684a) {
    const _0x3ff3c5 = _0x5abb04;
    this[_0x3ff3c5(0x1b9)] = this[_0x3ff3c5(0x1b9)][_0x3ff3c5(0x196)](
      (_0xfa1528) => {
        const _0x3bb787 = _0x3ff3c5;
        if (_0xfa1528[_0x3bb787(0x1e0)]() === _0x2d684a) return !![];
        return _0xfa1528[_0x3bb787(0x114)](), ![];
      }
    );
  }
  [_0x5abb04(0x114)]() {
    const _0x56c0d2 = _0x5abb04;
    (this[_0x56c0d2(0x1b9)] = []), this["bindMap"](null);
  }
  [_0x5abb04(0x18e)]() {
    const _0x51d335 = _0x5abb04,
      _0x421248 = this["current"]();
    _0x421248 && _0x421248[_0x51d335(0x18e)]();
  }
  [_0x5abb04(0x10c)](_0x2203fb) {
    this["_current"] = _0x2203fb;
  }
  [_0x5abb04(0x195)](_0x53c043) {
    const _0x3bc5bf = _0x5abb04,
      _0x7f1e04 = this["current"]();
    if (_0x7f1e04 && _0x7f1e04["mapId"]() === _0x53c043) return;
    const _0x50b2cb = this[_0x3bc5bf(0x1b9)][_0x3bc5bf(0x139)]((_0x1a53fe) => {
      const _0x55f87f = _0x3bc5bf;
      return _0x1a53fe[_0x55f87f(0x1e0)]() === _0x53c043;
    });
    if (_0x50b2cb) {
      this[_0x3bc5bf(0x10c)](_0x50b2cb);
      return;
    }
    this[_0x3bc5bf(0x142)](_0x53c043);
  }
  [_0x5abb04(0x142)](_0x3e84a0) {
    const _0x4fdf46 = _0x5abb04;
    if (_0x3e84a0 <= 0x0) return;
    const _0xe7b907 = this["_list"][0x0];
    if (_0xe7b907 && _0xe7b907[_0x4fdf46(0x1e0)]() === _0x3e84a0) return;
    this[_0x4fdf46(0x1b9)][_0x4fdf46(0x17f)] >= this[_0x4fdf46(0x1c7)]() &&
      this[_0x4fdf46(0x1b9)][_0x4fdf46(0x1a7)]();
    const _0x6cf93e = new UZMIP_MapItems(_0x3e84a0);
    this[_0x4fdf46(0x1b9)][_0x4fdf46(0x1d8)](_0x6cf93e),
      this[_0x4fdf46(0x10c)](_0x6cf93e);
  }
  [_0x5abb04(0x1c7)]() {
    return 0x8;
  }
  ["addAsimoto"](_0x2b7008) {
    const _0x2de9fa = _0x5abb04;
    _0x2b7008[_0x2de9fa(0x1f0)]() &&
      this[_0x2de9fa(0x1e6)]()["addAsimoto"](_0x2b7008);
  }
  ["addMawari"](_0x588533) {
    const _0x31b28d = _0x5abb04;
    _0x588533[_0x31b28d(0x1f0)]() && this["current"]()["addMawari"](_0x588533);
  }
  ["add"](_0x562eec) {
    const _0x4c6f73 = _0x5abb04;
    if (_0x562eec[_0x4c6f73(0x1f0)]()) {
      const _0x413124 = this["current"]();
      _0x413124[_0x4c6f73(0x1d9)](_0x562eec);
    }
  }
  [_0x5abb04(0x108)]() {
    const _0x2ab286 = _0x5abb04,
      _0x391a69 = this[_0x2ab286(0x1e6)]();
    _0x391a69 && _0x391a69[_0x2ab286(0x108)]();
  }
  ["numItems"]() {
    const _0x152ef2 = _0x5abb04,
      _0x5c11ef = this[_0x152ef2(0x1e6)]();
    if (_0x5c11ef) return this[_0x152ef2(0x1e6)]()[_0x152ef2(0x185)]();
    return 0x0;
  }
  [_0x5abb04(0x1d6)](_0x49c0e0) {
    const _0x48b41c = _0x5abb04,
      _0x16b64a = this[_0x48b41c(0x1e6)]();
    _0x16b64a && _0x16b64a["itemPickup"](_0x49c0e0);
  }
  [_0x5abb04(0x1b6)](_0x14cee9, _0x38fa4a) {
    const _0x5a2c3f = _0x5abb04;
    return this[_0x5a2c3f(0x1e6)]()[_0x5a2c3f(0x1b6)](_0x14cee9, _0x38fa4a);
  }
}
(function () {
  "use strict";
  const _0x1890a5 = _0x5abb04;
  class _0xaa88c9 {
    constructor(_0x15db83, _0x1023fa, _0x2d01c7, _0x32fd84, _0xa12f23) {
      const _0x425810 = _0x5165;
      (this["_eventId"] = _0x15db83),
        (this[_0x425810(0x1b5)] = _0x1023fa),
        (this[_0x425810(0x157)] = _0x2d01c7),
        (this[_0x425810(0x10a)] = _0x32fd84),
        (this[_0x425810(0x110)] = _0xa12f23);
    }
    [_0x1890a5(0x1ca)]() {
      const _0x2bde86 = _0x1890a5;
      return this[_0x2bde86(0x167)];
    }
    [_0x1890a5(0x1ce)]() {
      const _0xa4f5d6 = _0x1890a5;
      return this[_0xa4f5d6(0x10a)];
    }
    [_0x1890a5(0x112)]() {
      const _0x2f07ca = _0x1890a5;
      return this[_0x2f07ca(0x110)];
    }
    [_0x1890a5(0x13d)](_0x3941a3, _0x4bc56f, _0x4cbc72) {
      const _0x389170 = _0x1890a5;
      this[_0x389170(0x1ea)]() &&
        (this[_0x389170(0x1d4)](_0x3941a3, _0x4bc56f, _0x4cbc72),
        $gameTemp[_0x389170(0x11b)](this[_0x389170(0x167)]));
    }
    ["writeVariable"](_0x1335dd, _0x1f54f0, _0xec95c9) {
      const _0x50844b = _0x1890a5;
      this["_itemName"] > 0x0 &&
        $gameVariables["setValue"](this["_itemName"], _0x1335dd),
        this["_itemId"] > 0x0 &&
          $gameVariables[_0x50844b(0x111)](this[_0x50844b(0x157)], _0x1f54f0),
        this[_0x50844b(0x10a)] > 0x0 &&
          $gameVariables[_0x50844b(0x111)](this["_amount"], _0xec95c9);
    }
    [_0x1890a5(0x1ea)]() {
      return this["_eventId"] > 0x0;
    }
    [_0x1890a5(0x14f)](_0x5a6c73, _0x1392c6, _0x5c9f62) {
      const _0x3f6dce = _0x1890a5;
      return {
        code: this[_0x3f6dce(0x110)],
        indent: _0x5c9f62,
        parameters: [_0x5a6c73, 0x0, 0x0, _0x1392c6],
      };
    }
  }
  const _0x410884 = "ManoUZ_MapItemPlace";
  function _0x321029() {
    const _0x50f37f = _0x1890a5;
    return PluginManager[_0x50f37f(0x16b)](_0x410884);
  }
  const _0x2b3934 = (function () {
    const _0x24d2d0 = _0x1890a5;
    function _0x216782(_0xda2f65, _0x410c27) {
      const _0x4dc00d = _0x5165,
        _0x2e0579 = JSON[_0x4dc00d(0x18b)](_0xda2f65),
        _0x46f8fe = Number(_0x2e0579["callBackEvent"]);
      return new _0xaa88c9(
        _0x46f8fe,
        Number(_0x2e0579["itemNameVariable"]),
        Number(_0x2e0579[_0x4dc00d(0x10f)]),
        Number(_0x2e0579["amountVariable"]),
        _0x410c27
      );
    }
    const _0x1f75e8 = _0x321029(),
      _0x4d9bff = {
        goldSpwanSound: String(_0x1f75e8[_0x24d2d0(0x148)]),
        goldGetSound: String(_0x1f75e8[_0x24d2d0(0x164)]),
        goldIcon: Number(_0x1f75e8[_0x24d2d0(0x1dd)]),
      },
      _0x595398 = {
        itemStopSwitch: Number(_0x1f75e8["itemStop"]),
        mapItemMax: Number(_0x1f75e8[_0x24d2d0(0x12b)]),
      },
      _0x381ce7 = {
        itemSpwanSound: String(_0x1f75e8["itemSpwanSound"]),
        itemGetSound: String(_0x1f75e8["itemGetSound"]),
      },
      _0x519da9 = Number(_0x1f75e8[_0x24d2d0(0x12b)]),
      _0x18fa5e = {
        itemBase: _0x381ce7,
        mapItem: _0x595398,
        itemGainDisableSwitch: Number(_0x1f75e8[_0x24d2d0(0x155)] || 0x0),
        mvCommand: _0x1f75e8[_0x24d2d0(0x169)] === _0x24d2d0(0x113),
        maxMemory: Number(_0x1f75e8[_0x24d2d0(0x1c7)]),
        timeLimit: Number(_0x1f75e8[_0x24d2d0(0x1ef)]) * 0x3c,
        mapSpriteMax: _0x519da9 + 0x8,
        itemCallback: _0x216782(_0x1f75e8["itemCallback"], 0x7e),
        weaponCallback: _0x216782(_0x1f75e8[_0x24d2d0(0x15c)], 0x7f),
        armorCallback: _0x216782(_0x1f75e8["armorCallback"], 0x80),
        gold: _0x4d9bff,
        goldCallback: _0x216782(_0x1f75e8["goldCallback"], 0x7d),
        amount_MV: Number(_0x1f75e8[_0x24d2d0(0x19b)]),
        itemId_MV: Number(_0x1f75e8["itemId_MV"]),
        positionX_MV: Number(_0x1f75e8[_0x24d2d0(0x129)]),
        positionY_MV: Number(_0x1f75e8[_0x24d2d0(0x10d)]),
      };
    return _0x18fa5e;
  })();
  (UZMIP_EventGold[_0x1890a5(0x11f)]["conceptData"] = function () {
    const _0x5060b4 = _0x1890a5;
    return _0x2b3934[_0x5060b4(0x117)];
  }),
    (UZMIP_MapItems[_0x1890a5(0x11f)][_0x1890a5(0x187)] = function () {
      const _0x22d580 = _0x1890a5;
      return _0x2b3934[_0x22d580(0x1aa)];
    }),
    (UZMIP_EventItem["prototype"][_0x1890a5(0x162)] = function () {
      const _0x8baaaa = _0x1890a5;
      if (this[_0x8baaaa(0x137)][_0x8baaaa(0x149)]())
        return _0x2b3934[_0x8baaaa(0x168)];
      if (this["_item"][_0x8baaaa(0x19d)]()) return _0x2b3934["weaponCallback"];
      if (this["_item"]["isArmor"]()) return _0x2b3934[_0x8baaaa(0x1f9)];
      return null;
    }),
    (I_ItemEventV2_UZMIP["prototype"][_0x1890a5(0x1a5)] = function () {
      const _0x382f24 = _0x1890a5;
      return _0x2b3934[_0x382f24(0x1a0)];
    });
  class _0x296171 extends I_RenderbleItem_UZMIP {
    constructor(_0x49a75c, _0x20a6b1) {
      const _0x4a5375 = _0x1890a5;
      super(),
        this[_0x4a5375(0x177)](_0x49a75c, _0x20a6b1),
        (this[_0x4a5375(0x188)] = ![]),
        this[_0x4a5375(0x1bf)](),
        this[_0x4a5375(0x126)]();
    }
    ["timeStamp"]() {
      return 0x0;
    }
    ["renderItem"]() {
      return this;
    }
    [_0x1890a5(0x1bf)]() {
      const _0x3cf798 = _0x1890a5;
      this[_0x3cf798(0x133)] = Date[_0x3cf798(0x13f)]();
    }
    [_0x1890a5(0x126)]() {
      const _0x11dc11 = _0x1890a5;
      this[_0x11dc11(0x15e)] = this["timeLimitInitialValue"]();
    }
    [_0x1890a5(0x1b7)]() {
      return _0x2b3934["timeLimit"];
    }
    ["update"]() {
      const _0x3a6f1b = _0x1890a5;
      this[_0x3a6f1b(0x15e)] -= 0x1;
    }
    [_0x1890a5(0x1ef)]() {
      const _0x2e23c8 = _0x1890a5;
      return this[_0x2e23c8(0x15e)];
    }
    [_0x1890a5(0x1a3)]() {
      const _0x4b47c8 = _0x1890a5;
      return this[_0x4b47c8(0x15e)] <= 0x14a;
    }
    ["terminate"]() {
      const _0x2fa4c3 = _0x1890a5;
      this[_0x2fa4c3(0x15e)] = 0x14a;
    }
    ["kill"]() {
      const _0x7c4e1a = _0x1890a5;
      this[_0x7c4e1a(0x15e)] = 0x0;
    }
    [_0x1890a5(0x11d)]() {
      const _0x1d01fd = _0x1890a5,
        _0x31f3e6 = Math[_0x1d01fd(0x170)](0x0, this[_0x1d01fd(0x1ef)]() / 0xa);
      return Math["min"](_0x31f3e6 * _0x31f3e6, 0xff);
    }
    ["isTimeout"]() {
      const _0x1b28b0 = _0x1890a5;
      return this[_0x1b28b0(0x15e)] <= 0x0;
    }
    [_0x1890a5(0x18e)]() {
      const _0x476bf1 = _0x1890a5;
      !this[_0x476bf1(0x188)] && this["playSpwanSound"](),
        (this[_0x476bf1(0x188)] = !![]);
    }
    [_0x1890a5(0x12e)]() {
      const _0x42b78f = _0x1890a5;
      return this[_0x42b78f(0x1cb)]() || this["isEmpty"]();
    }
    [_0x1890a5(0x1da)]() {
      const _0x2de50a = _0x1890a5;
      if (!this[_0x2de50a(0x188)]) return ![];
      if (this[_0x2de50a(0x1c9)]()) return ![];
      if (this["isTimeout"]()) return ![];
      return !![];
    }
    [_0x1890a5(0x1f0)]() {
      const _0x1c8e20 = _0x1890a5;
      return !this[_0x1c8e20(0x1c9)]();
    }
    [_0x1890a5(0x1c9)]() {
      return ![];
    }
    [_0x1890a5(0x193)]() {
      const _0x187fd6 = _0x1890a5;
      return this[_0x187fd6(0x188)];
    }
    [_0x1890a5(0x177)](_0x570c1f, _0x35ef1c) {
      (this["_x"] = _0x570c1f), (this["_y"] = _0x35ef1c);
    }
    [_0x1890a5(0x18c)](_0x5ee36c) {
      const _0x277444 = _0x1890a5,
        _0xfc7e48 = _0x5ee36c[_0x277444(0x147)](0x0);
      _0xfc7e48 && this[_0x277444(0x177)](_0xfc7e48["x"], _0xfc7e48["y"]);
    }
    [_0x1890a5(0x1bc)](_0x502b7d, _0x142df7) {
      return this["_x"] === _0x502b7d && this["_y"] === _0x142df7;
    }
    get ["x"]() {
      return this["_x"];
    }
    get ["y"]() {
      return this["_y"];
    }
    [_0x1890a5(0x17a)]() {
      const _0x23c529 = _0x1890a5,
        _0x567025 = $gameMap[_0x23c529(0x1eb)]();
      return Math[_0x23c529(0x1a1)](
        this[_0x23c529(0x17e)]() * _0x567025 + _0x567025 / 0x2
      );
    }
    ["screenY"]() {
      const _0x1648ff = _0x1890a5,
        _0x32f736 = $gameMap[_0x1648ff(0x171)]();
      return Math[_0x1648ff(0x1a1)](
        this[_0x1648ff(0x13a)]() * _0x32f736 + _0x32f736
      );
    }
    [_0x1890a5(0x17e)]() {
      const _0x466bf7 = _0x1890a5;
      return $gameMap[_0x466bf7(0x1e3)](this["x"]);
    }
    ["scrolledY"]() {
      return $gameMap["adjustY"](this["y"]);
    }
    [_0x1890a5(0x127)]() {
      return 0x1;
    }
    [_0x1890a5(0x14e)]() {
      return 0x64;
    }
    [_0x1890a5(0x144)]() {
      return 0x64;
    }
    ["soundPan"]() {
      return 0x0;
    }
    [_0x1890a5(0x178)]() {
      const _0xef3456 = _0x1890a5,
        _0x2c6390 = {
          name: this[_0xef3456(0x12f)](),
          volume: this[_0xef3456(0x14e)](),
          pitch: this[_0xef3456(0x144)](),
          pan: this[_0xef3456(0x1ab)](),
          pos: 0x0,
        };
      AudioManager[_0xef3456(0x11a)](_0x2c6390);
    }
    ["playItemGetSound"]() {
      const _0x3aa643 = _0x1890a5,
        _0x31d4ce = {
          name: this[_0x3aa643(0x165)](),
          volume: this["soundVolume"](),
          pitch: this[_0x3aa643(0x144)](),
          pan: this[_0x3aa643(0x1ab)](),
          pos: 0x0,
        };
      AudioManager[_0x3aa643(0x11a)](_0x31d4ce);
    }
    ["itemName"]() {
      return "";
    }
    [_0x1890a5(0x1ae)]() {
      return 0x0;
    }
    ["amount"]() {
      return 0x0;
    }
    ["callbackEvent"]() {
      return null;
    }
    ["commonEventCall"]() {
      const _0x84d269 = _0x1890a5,
        _0x40495a = this["callbackEvent"]();
      _0x40495a &&
        _0x40495a["callEvent"](
          this[_0x84d269(0x128)](),
          this["itemId"](),
          this[_0x84d269(0x150)]()
        );
    }
    [_0x1890a5(0x12f)]() {
      return _0x2b3934["itemSpwanSound"];
    }
    [_0x1890a5(0x165)]() {
      const _0x443eb7 = _0x1890a5;
      return _0x2b3934[_0x443eb7(0x159)];
    }
    [_0x1890a5(0x174)](_0x1913cd) {
      const _0x1244fd = _0x1890a5;
      this[_0x1244fd(0x1e2)]() &&
        (this[_0x1244fd(0x13e)](),
        this[_0x1244fd(0x175)](),
        this[_0x1244fd(0x1d1)](),
        this["clearItem"]());
    }
    [_0x1890a5(0x175)]() {}
    [_0x1890a5(0x1ec)]() {}
    [_0x1890a5(0x1e2)]() {
      return !![];
    }
    [_0x1890a5(0x120)]() {
      return 0x1;
    }
  }
  class _0x3d8a83 extends _0x296171 {
    constructor(_0x1b2556, _0x3e504e, _0x11bae7) {
      super(_0x3e504e, _0x11bae7), this["setGold"](_0x1b2556);
    }
    [_0x1890a5(0x16c)](_0x343a7d) {
      const _0x4bf276 = _0x1890a5;
      this[_0x4bf276(0x1e9)] = _0x343a7d;
    }
    ["isEmpty"]() {
      const _0x320ce2 = _0x1890a5;
      return this[_0x320ce2(0x1e9)] <= 0x0;
    }
    [_0x1890a5(0x12f)]() {
      const _0x4983de = _0x1890a5;
      return _0x2b3934[_0x4983de(0x148)];
    }
    [_0x1890a5(0x165)]() {
      const _0x207ff3 = _0x1890a5;
      return _0x2b3934[_0x207ff3(0x164)];
    }
    ["callbackEvent"]() {
      const _0x4f2392 = _0x1890a5;
      return _0x2b3934[_0x4f2392(0x125)];
    }
    ["itemName"]() {
      const _0x361aaf = _0x1890a5;
      return TextManager[_0x361aaf(0x1b3)];
    }
    ["amount"]() {
      return this["_gold"];
    }
    ["clearItem"]() {
      const _0x285f0c = _0x1890a5;
      this[_0x285f0c(0x1e9)] = 0x0;
    }
    [_0x1890a5(0x175)]() {
      const _0x44be44 = _0x1890a5;
      $gameParty["gainGold"](this[_0x44be44(0x1e9)]);
    }
    [_0x1890a5(0x120)]() {
      const _0x1ab9fd = _0x1890a5;
      return _0x2b3934[_0x1ab9fd(0x1dd)];
    }
  }
  class _0x27bec0 extends _0x296171 {
    constructor(_0x3565c1, _0x5063ac, _0x5cecb9) {
      const _0x47344e = _0x1890a5;
      super(_0x5063ac, _0x5cecb9),
        (this[_0x47344e(0x137)] = new Game_Item(_0x3565c1)),
        (this["_amount"] = 0x1);
    }
    [_0x1890a5(0x1ae)]() {
      const _0x595b92 = _0x1890a5;
      return this[_0x595b92(0x137)][_0x595b92(0x1ae)]();
    }
    ["amount"]() {
      const _0x24dd11 = _0x1890a5;
      return this[_0x24dd11(0x10a)];
    }
    [_0x1890a5(0x128)]() {
      const _0x306207 = _0x1890a5,
        _0x40c4d8 = this[_0x306207(0x137)][_0x306207(0x1d5)]();
      if (_0x40c4d8) return _0x40c4d8["name"];
      return "";
    }
    [_0x1890a5(0x120)]() {
      const _0x2abbe9 = _0x1890a5,
        _0x137aef = this[_0x2abbe9(0x137)][_0x2abbe9(0x1d5)]();
      if (_0x137aef) return _0x137aef["iconIndex"];
      return 0x0;
    }
    [_0x1890a5(0x15a)](_0x2c53b2, _0x16ac90) {
      const _0x4bea08 = _0x1890a5;
      (this[_0x4bea08(0x10a)] = _0x16ac90),
        this[_0x4bea08(0x137)][_0x4bea08(0x1c8)](_0x2c53b2);
    }
    [_0x1890a5(0x1c2)](_0x581733) {
      this["_amount"] = _0x581733;
    }
    [_0x1890a5(0x165)]() {
      const _0xadb16c = _0x1890a5,
        _0x3f1003 = this[_0xadb16c(0x137)]["object"]();
      if (_0x3f1003) {
        const _0x1722bd = _0x3f1003[_0xadb16c(0x156)][_0xadb16c(0x1a4)];
        if (_0x1722bd) return _0x1722bd;
      }
      return super["itemGetSoundName"]();
    }
    [_0x1890a5(0x12f)]() {
      const _0xd9fd1d = _0x1890a5,
        _0x5c8b4b = this[_0xd9fd1d(0x137)][_0xd9fd1d(0x1d5)]();
      if (_0x5c8b4b) {
        const _0x2346a3 = _0x5c8b4b[_0xd9fd1d(0x156)][_0xd9fd1d(0x1de)];
        if (_0x2346a3) return _0x2346a3;
      }
      return super[_0xd9fd1d(0x12f)]();
    }
    ["callbackEvent"]() {
      const _0x20163d = _0x1890a5;
      if (this[_0x20163d(0x137)][_0x20163d(0x149)]())
        return _0x2b3934["itemCallback"];
      if (this[_0x20163d(0x137)][_0x20163d(0x19d)]())
        return _0x2b3934[_0x20163d(0x15c)];
      if (this["_item"][_0x20163d(0x1c3)]()) return _0x2b3934[_0x20163d(0x1f9)];
      return null;
    }
    [_0x1890a5(0x10b)]() {
      return $gameParty;
    }
    [_0x1890a5(0x1c9)]() {
      const _0x35415b = _0x1890a5;
      return this["_amount"] <= 0x0 || this[_0x35415b(0x137)]["isNull"]();
    }
    ["clearItem"]() {
      const _0x1c3a2a = _0x1890a5;
      this["_item"]["setObject"](null), (this[_0x1c3a2a(0x10a)] = 0x0);
    }
    ["playerGainItem"]() {
      const _0x420599 = _0x1890a5,
        _0x183de6 = this[_0x420599(0x137)][_0x420599(0x1d5)](),
        _0xf798d9 = this[_0x420599(0x10b)]();
      _0xf798d9[_0x420599(0x1cd)](_0x183de6, this[_0x420599(0x10a)]);
    }
    [_0x1890a5(0x18f)](_0xf6ec71) {
      return ![];
    }
  }
  const _0x448d4c = () => {
    const _0x370bcf = _0x1890a5;
    if (_0x2b3934[_0x370bcf(0x1b8)] > 0x0)
      return $gameSwitches[_0x370bcf(0x1a6)](_0x2b3934["itemStop"]);
    return ![];
  };
  class _0x4044e9 extends Sprite {
    constructor(_0x1ee50c) {
      const _0x5c99b4 = _0x1890a5,
        _0x3afd56 = ImageManager[_0x5c99b4(0x1cf)]("IconSet");
      super(_0x3afd56),
        (this[_0x5c99b4(0x134)]["x"] = 0.5),
        (this[_0x5c99b4(0x134)]["y"] = 0x1),
        (this["z"] = 0x1),
        this[_0x5c99b4(0x15a)](_0x1ee50c);
    }
    ["setItem"](_0x911df6) {
      const _0x1fd2ea = _0x1890a5;
      _0x911df6 && _0x911df6[_0x1fd2ea(0x1f0)]()
        ? ((this["_item"] = _0x911df6),
          _0x911df6[_0x1fd2ea(0x18e)](),
          this[_0x1fd2ea(0x172)](),
          this[_0x1fd2ea(0x189)](),
          (this[_0x1fd2ea(0x19a)] = !![]))
        : ((this[_0x1fd2ea(0x137)] = null), (this["visible"] = ![]));
    }
    ["hasItem"]() {
      const _0x2b6e81 = _0x1890a5;
      return !!this[_0x2b6e81(0x190)]();
    }
    [_0x1890a5(0x190)]() {
      const _0x4f6247 = _0x1890a5;
      return this[_0x4f6247(0x137)];
    }
    ["update"]() {
      const _0x189518 = _0x1890a5,
        _0x4c31c8 = this[_0x189518(0x190)]();
      _0x4c31c8 &&
        _0x4c31c8[_0x189518(0x12e)]() &&
        this[_0x189518(0x15a)](null),
        this[_0x189518(0x137)] &&
          (this[_0x189518(0x172)](), this["updateOpacity"]());
    }
    [_0x1890a5(0x131)]() {
      const _0x2a62e4 = _0x1890a5;
      this[_0x2a62e4(0x11d)] = this[_0x2a62e4(0x190)]()["opacity"]();
    }
    ["updatePosition"]() {
      const _0x16e35e = _0x1890a5,
        _0x30c514 = this[_0x16e35e(0x190)]();
      (this["x"] = _0x30c514[_0x16e35e(0x17a)]()),
        (this["y"] = _0x30c514[_0x16e35e(0x19e)]()),
        (this["z"] = _0x30c514[_0x16e35e(0x127)]());
    }
    [_0x1890a5(0x120)]() {
      const _0x1496b5 = _0x1890a5,
        _0x3902c0 = this[_0x1496b5(0x190)]();
      if (_0x3902c0) return _0x3902c0[_0x1496b5(0x120)]();
      return 0x0;
    }
    [_0x1890a5(0x1b2)]() {
      const _0x2c7265 = _0x1890a5;
      return ImageManager[_0x2c7265(0x1b2)];
    }
    [_0x1890a5(0x186)]() {
      const _0x3228d5 = _0x1890a5;
      return ImageManager[_0x3228d5(0x186)];
    }
    [_0x1890a5(0x189)]() {
      const _0xebda6 = _0x1890a5,
        _0x584f5b = this[_0xebda6(0x120)](),
        _0x4c8070 = this[_0xebda6(0x1b2)](),
        _0x29cec1 = this[_0xebda6(0x186)](),
        _0x1ee51a = (_0x584f5b % 0x10) * _0x4c8070,
        _0x42d457 = Math["floor"](_0x584f5b / 0x10) * _0x29cec1;
      this[_0xebda6(0x138)](_0x1ee51a, _0x42d457, _0x4c8070, _0x29cec1);
    }
  }
  if (Utils[_0x1890a5(0x1ad)] === "MV") {
    const _0x18ad26 = () => {
      return 0x20;
    };
    (_0x4044e9["prototype"][_0x1890a5(0x1b2)] = _0x18ad26),
      (_0x4044e9[_0x1890a5(0x11f)][_0x1890a5(0x186)] = _0x18ad26);
  }
  const _0x42d77a = Game_Player["prototype"]["startMapEvent"];
  Game_Player["prototype"][_0x1890a5(0x123)] = function (
    _0x1e53fd,
    _0x3b7cdc,
    _0x3f0761,
    _0x4de312
  ) {
    const _0x30394a = _0x1890a5,
      _0x3aeb1a = $gameMap[_0x30394a(0x1c5)]();
    _0x42d77a["call"](this, _0x1e53fd, _0x3b7cdc, _0x3f0761, _0x4de312);
    if (!_0x3aeb1a) {
      const _0x49bedb = _0x5dfd49();
      _0x49bedb[_0x30394a(0x1d6)](this);
    }
  };
  const _0x2a13b1 = Game_Map[_0x1890a5(0x11f)][_0x1890a5(0x108)];
  Game_Map[_0x1890a5(0x11f)][_0x1890a5(0x108)] = function (_0x57cc2b) {
    const _0x398d76 = _0x1890a5;
    _0x2a13b1["call"](this, _0x57cc2b),
      this[_0x398d76(0x18d)][_0x398d76(0x108)]();
  };
  const _0x5118d0 = Game_Map[_0x1890a5(0x11f)][_0x1890a5(0x135)];
  (Game_Map[_0x1890a5(0x11f)]["setup"] = function (_0x41759a) {
    const _0x258a9b = _0x1890a5;
    _0x5118d0[_0x258a9b(0x1dc)](this, _0x41759a), this[_0x258a9b(0x154)]();
  }),
    (Game_Map["prototype"][_0x1890a5(0x154)] = function () {
      const _0x2fef1a = _0x1890a5;
      if (!this[_0x2fef1a(0x18d)]) {
        const _0x15b93e = new UZMIP_MapitmeContainer();
        this[_0x2fef1a(0x18d)] = _0x15b93e;
      }
      this["_itemPlaceMIP"][_0x2fef1a(0x195)](this[_0x2fef1a(0x1e0)]());
    }),
    (Game_Map["prototype"]["deletePlacedItem"] = function (_0x37717e) {
      const _0x4eb39a = _0x1890a5;
      this[_0x4eb39a(0x18d)][_0x4eb39a(0x17b)](_0x37717e);
    });
  function _0x5dfd49() {
    const _0xceed7 = _0x1890a5;
    return $gameMap[_0xceed7(0x18d)];
  }
  function _0x20c846() {
    const _0x5b01ca = _0x1890a5;
    $gameMap[_0x5b01ca(0x154)]();
  }
  const _0x612731 = DataManager["createGameObjects"];
  DataManager[_0x1890a5(0x121)] = function () {
    _0x612731["call"](this), _0x20c846();
  };
  const _0x4fd57b = DataManager["extractSaveContents"];
  DataManager["extractSaveContents"] = function (_0x22456b) {
    const _0xe1924c = _0x1890a5;
    _0x4fd57b[_0xe1924c(0x1dc)](this, _0x22456b), _0x20c846();
  };
  const _0x372c3d = Spriteset_Map[_0x1890a5(0x11f)][_0x1890a5(0x1a2)];
  (Spriteset_Map[_0x1890a5(0x11f)][_0x1890a5(0x1a2)] = function () {
    const _0x2a70f3 = _0x1890a5;
    this[_0x2a70f3(0x16e)](), _0x372c3d[_0x2a70f3(0x1dc)](this);
  }),
    (Spriteset_Map[_0x1890a5(0x11f)][_0x1890a5(0x16e)] = function () {
      const _0x266a57 = _0x1890a5,
        _0x38f54b = new _0x37de42();
      this["_tilemap"][_0x266a57(0x1d7)](_0x38f54b),
        (this[_0x266a57(0x18d)] = _0x38f54b);
    });
  class _0x37de42 extends PIXI[_0x1890a5(0x199)] {
    constructor() {
      const _0x122224 = _0x1890a5;
      super(), this[_0x122224(0x197)]();
    }
    get ["z"]() {
      return 0x1;
    }
    ["mapItems"]() {
      const _0x402a99 = _0x1890a5;
      return _0x5dfd49()[_0x402a99(0x1be)]();
    }
    [_0x1890a5(0x197)]() {
      const _0x37bed5 = _0x1890a5,
        _0x55700e = this[_0x37bed5(0x1a8)]()[_0x37bed5(0x1c6)]((_0x1f6166) => {
          const _0x31346e = _0x37bed5;
          return new _0x4044e9(_0x1f6166[_0x31346e(0x1e8)]());
        });
      for (
        let _0x395e3e = _0x55700e[_0x37bed5(0x17f)];
        _0x395e3e < _0x2b3934["mapSpriteMax"];
        _0x395e3e++
      ) {
        _0x55700e[_0x37bed5(0x1d8)](new _0x4044e9(null));
      }
      for (const _0x1eb1a5 of _0x55700e) {
        this[_0x37bed5(0x1d7)](_0x1eb1a5);
      }
      this["_sprites"] = _0x55700e;
    }
    ["importNewItem"]() {
      const _0x4e14c6 = _0x1890a5,
        _0x3c587d = _0x5dfd49();
      if (!_0x3c587d["hasNewItem"]()) return;
      const _0x41c411 = _0x3c587d["currentList"]();
      for (const _0x446353 of _0x41c411) {
        !_0x446353["isSpriteCreated"]() &&
          (this[_0x4e14c6(0x130)](_0x446353), _0x3c587d[_0x4e14c6(0x18e)]());
      }
    }
    [_0x1890a5(0x108)]() {
      const _0x34346d = _0x1890a5;
      this[_0x34346d(0x19a)] = !_0x448d4c();
      if (this[_0x34346d(0x19a)]) {
        this["importNewItem"]();
        for (const _0x551f84 of this[_0x34346d(0x140)]) {
          _0x551f84[_0x34346d(0x108)]();
        }
      }
    }
    [_0x1890a5(0x130)](_0x24a157) {
      const _0x2057d4 = _0x1890a5,
        _0x35a0e5 = this["_sprites"]["find"]((_0x545632) => {
          return !_0x545632["hasItem"]();
        });
      if (_0x35a0e5)
        return _0x35a0e5["setItem"](_0x24a157[_0x2057d4(0x1e8)]()), !![];
      return ![];
    }
  }
  function _0x82a508(_0x563411) {
    const _0x45237c = _0x1890a5;
    switch (_0x563411) {
      case "item":
        return $dataItems;
      case "weapon":
        return $dataWeapons;
      case _0x45237c(0x15b):
        return $dataArmors;
    }
    return [];
  }
  function _0x54bc50(_0x354705, _0x2c986a, _0x541911) {
    const _0x4fe3a9 = _0x1890a5,
      _0x38205d = Number(_0x2c986a["amount"]);
    if (_0x38205d <= 0x0) return;
    const _0x11eabb = _0x541911["character"](0x0);
    if (!_0x11eabb) return;
    const _0x4c3554 = _0x354705[Number(_0x2c986a[_0x4fe3a9(0x190)])];
    if (!_0x4c3554) return;
    const _0x4ce1ed = new Game_Item(_0x4c3554),
      _0x2f9ce8 = new UZMIP_EventItem(_0x4ce1ed, _0x38205d),
      _0x4275e3 = new UZMIP_MapItemCasset(_0x2f9ce8);
    _0x4275e3[_0x4fe3a9(0x177)](_0x11eabb["x"], _0x11eabb["y"]);
    const _0x325159 = _0x5dfd49();
    _0x2c986a["asimoto"] === _0x4fe3a9(0x113)
      ? _0x325159["addAsimoto"](_0x4275e3)
      : _0x325159[_0x4fe3a9(0x163)](_0x4275e3);
  }
  function _0x1a3ac1(_0x222722, _0x48ec08) {
    const _0x2a1777 = _0x1890a5,
      _0x3a376b = $gameVariables[_0x2a1777(0x1a6)](_0x48ec08[_0x2a1777(0x1ae)]),
      _0x3d8ed5 = _0x222722[_0x3a376b];
    if (!_0x3d8ed5) return;
    const _0x24de04 = $gameVariables["value"](_0x48ec08["x"]),
      _0x51cbe8 = $gameVariables[_0x2a1777(0x1a6)](_0x48ec08["y"]),
      _0x43737 = $gameVariables["value"](Number(_0x48ec08["amount"])),
      _0xbb981d = _0x43737 ? _0x43737 : 0x1,
      _0x58ce6f = new UZMIP_EventItem(new Game_Item(_0x3d8ed5), _0xbb981d),
      _0x505e37 = new UZMIP_MapItemCasset(_0x58ce6f);
    _0x505e37[_0x2a1777(0x177)](_0x24de04, _0x51cbe8);
    const _0x49a404 = _0x5dfd49();
    _0x48ec08[_0x2a1777(0x13b)] === _0x2a1777(0x113)
      ? _0x49a404[_0x2a1777(0x1b1)](_0x505e37)
      : _0x49a404[_0x2a1777(0x163)](_0x505e37);
  }
  const _0x5298d7 = (_0x2abeff, _0x53b434) => {
      const _0x2b6e2b = _0x1890a5,
        _0x2a4e98 = Number(_0x2abeff[_0x2b6e2b(0x122)]),
        _0xcae4a2 = Number(_0x2abeff["max"]),
        _0xc887c6 =
          _0x2a4e98 > _0xcae4a2
            ? _0x2a4e98
            : Math["randomInt"](_0xcae4a2 - _0x2a4e98) + _0x2a4e98,
        _0x4e5839 = new UZMIP_EventGold(_0xc887c6),
        _0x47858a = new UZMIP_MapItemCasset(_0x4e5839),
        _0x158b3c = _0x53b434[_0x2b6e2b(0x147)](0x0);
      _0x158b3c && _0x47858a[_0x2b6e2b(0x177)](_0x158b3c["x"], _0x158b3c["y"]);
      const _0x11d101 = _0x5dfd49();
      _0x2abeff[_0x2b6e2b(0x13b)] === _0x2b6e2b(0x113)
        ? _0x11d101[_0x2b6e2b(0x1b1)](_0x47858a)
        : _0x11d101["addMawari"](_0x47858a);
    },
    _0x4327ce = (_0x75702) => {
      const _0x11cb61 = _0x1890a5,
        _0x268163 = $gameVariables[_0x11cb61(0x1a6)](
          _0x75702[_0x11cb61(0x1bb)]
        );
      if (_0x268163 > 0x0) {
        const _0x4c3b0c = $gameVariables[_0x11cb61(0x1a6)](_0x75702["x"]),
          _0x413670 = $gameVariables[_0x11cb61(0x1a6)](_0x75702["y"]),
          _0x387a2d = new UZMIP_EventGold(_0x268163),
          _0x5f5655 = new UZMIP_MapItemCasset(_0x387a2d);
        _0x5f5655[_0x11cb61(0x177)](_0x4c3b0c, _0x413670);
        const _0x230c8b = _0x5dfd49();
        _0x75702[_0x11cb61(0x13b)] === _0x11cb61(0x113)
          ? _0x230c8b[_0x11cb61(0x1b1)](_0x5f5655)
          : _0x230c8b[_0x11cb61(0x163)](_0x5f5655);
      }
    };
  class _0x5670ee {
    constructor() {
      const _0x4cbb8f = _0x1890a5;
      (this[_0x4cbb8f(0x13c)] = []), (this["_table"] = {});
    }
    [_0x1890a5(0x183)]() {
      const _0x5d1c41 = _0x1890a5,
        _0x55abdf = {};
      return (
        Object[_0x5d1c41(0x179)](_0x55abdf, this[_0x5d1c41(0x136)]), _0x55abdf
      );
    }
    [_0x1890a5(0x182)](_0x562c66) {
      const _0x1575fa = _0x1890a5,
        _0x248f0e = this[_0x1575fa(0x176)](),
        _0x53d1ba = Math[_0x1575fa(0x122)](
          _0x562c66["length"],
          this[_0x1575fa(0x13c)][_0x1575fa(0x17f)]
        );
      for (let _0x52dcde = 0x0; _0x52dcde < _0x53d1ba; ++_0x52dcde) {
        const _0x5a3235 = this[_0x1575fa(0x13c)][_0x52dcde];
        _0x248f0e[_0x5a3235] = _0x562c66[_0x52dcde];
      }
      return _0x248f0e;
    }
    ["variableArg"]() {
      return {};
    }
  }
  class _0x34d03f {
    constructor(_0x5d52f8, _0x1e0607, _0x4a94b5) {
      const _0x491d38 = _0x1890a5;
      (this[_0x491d38(0x1b4)] = _0x5d52f8),
        (this[_0x491d38(0x14d)] = _0x1e0607),
        (this[_0x491d38(0x194)] = _0x4a94b5);
    }
    [_0x1890a5(0x182)](_0x1fdd7c) {
      const _0x3b9027 = _0x1890a5,
        _0x186be5 = this[_0x3b9027(0x176)](),
        _0x2fd95f = Math[_0x3b9027(0x122)](
          _0x1fdd7c[_0x3b9027(0x17f)],
          this[_0x3b9027(0x14d)]["length"]
        );
      for (let _0x42a7e1 = 0x0; _0x42a7e1 < _0x2fd95f; ++_0x42a7e1) {
        const _0x5babee = this[_0x3b9027(0x14d)][_0x42a7e1];
        _0x186be5[_0x5babee] = _0x1fdd7c[_0x42a7e1];
      }
      return _0x186be5;
    }
    [_0x1890a5(0x176)]() {
      const _0x1322c0 = _0x1890a5,
        _0x1666ad = {
          x: _0x2b3934[_0x1322c0(0x129)],
          y: _0x2b3934[_0x1322c0(0x10d)],
          itemId: _0x2b3934[_0x1322c0(0x12a)],
          amount: _0x2b3934[_0x1322c0(0x19b)],
        };
      return _0x1666ad;
    }
    [_0x1890a5(0x1d2)](_0x5ef3d8, _0xe012f2) {
      const _0x2ecfef = _0x1890a5,
        _0x70b862 = this[_0x2ecfef(0x182)](_0xe012f2);
      this[_0x2ecfef(0x194)][_0x2ecfef(0x1dc)](_0x5ef3d8, _0x70b862);
    }
  }
  class _0x2e1ba3 {
    constructor(_0x1eba34) {
      const _0x839b99 = _0x1890a5;
      (this[_0x839b99(0x1ba)] = new Map()),
        (this[_0x839b99(0x180)] = _0x1eba34);
    }
    ["registerCommand"](_0x3118d6, _0x2e72b1, _0x4a78ac) {
      const _0x425b6e = _0x1890a5;
      Utils[_0x425b6e(0x1ad)] === "MZ" &&
        this[_0x425b6e(0x1f6)](_0x3118d6, _0x4a78ac),
        this[_0x425b6e(0x1f3)]() &&
          this["registerCommandMV"](_0x3118d6, _0x2e72b1, _0x4a78ac);
    }
    ["isMVcommandEnabeled"]() {
      const _0x2ef936 = _0x1890a5;
      return Utils[_0x2ef936(0x1ad)] === "MV" || _0x2b3934[_0x2ef936(0x124)];
    }
    ["registerCommandMZ"](_0x499ca0, _0x1cebb6) {
      const _0x355b94 = _0x1890a5;
      PluginManager[_0x355b94(0x16d)](
        this["_pluginName"],
        _0x499ca0,
        _0x1cebb6
      );
    }
    [_0x1890a5(0x14b)](_0xafeabe, _0x2d51bd, _0x4b980d) {
      const _0x35631c = _0x1890a5,
        _0x57bcf0 = new _0x34d03f(_0xafeabe, _0x2d51bd, _0x4b980d);
      this[_0x35631c(0x1ba)]["set"](_0xafeabe, _0x57bcf0);
    }
    [_0x1890a5(0x109)](_0x2d096c, _0x1a4824, _0x34ade1) {
      const _0x21f25c = _0x1890a5,
        _0x1dcea8 = this[_0x21f25c(0x1ba)][_0x21f25c(0x166)](_0x1a4824);
      if (_0x1dcea8)
        return _0x1dcea8[_0x21f25c(0x1d2)](_0x2d096c, _0x34ade1), !![];
      return ![];
    }
  }
  const _0x2cc857 = new _0x2e1ba3(_0x410884);
  if (_0x2cc857["isMVcommandEnabeled"]()) {
    const _0x37adf9 = Game_Interpreter["prototype"][_0x1890a5(0x151)];
    Game_Interpreter[_0x1890a5(0x11f)][_0x1890a5(0x151)] = function (
      _0x147eea,
      _0x4c152c
    ) {
      const _0x421ea8 = _0x1890a5;
      if (_0x2cc857[_0x421ea8(0x109)](this, _0x147eea, _0x4c152c)) return;
      _0x37adf9[_0x421ea8(0x1dc)](this, _0x147eea, _0x4c152c);
    };
  }
  _0x2cc857[_0x1890a5(0x16d)](
    "PlaceSimpleItem",
    ["item", _0x1890a5(0x150), _0x1890a5(0x16a)],
    function (_0x379c72) {
      _0x54bc50($dataItems, _0x379c72, this);
    }
  ),
    _0x2cc857[_0x1890a5(0x16d)](_0x1890a5(0x115), [], function (_0x226f9d) {
      _0x54bc50($dataWeapons, _0x226f9d, this);
    }),
    _0x2cc857[_0x1890a5(0x16d)](_0x1890a5(0x1f4), [], function (_0x593130) {
      _0x54bc50($dataArmors, _0x593130, this);
    }),
    _0x2cc857[_0x1890a5(0x16d)](
      _0x1890a5(0x1f5),
      [_0x1890a5(0x1c4), _0x1890a5(0x13b)],
      (_0x4234bf) => {
        const _0x552760 = _0x1890a5,
          _0x3e1b7a = _0x82a508(_0x4234bf[_0x552760(0x1c4)]);
        _0x1a3ac1(_0x3e1b7a, _0x4234bf);
      }
    ),
    _0x2cc857[_0x1890a5(0x16d)](_0x1890a5(0x158), [], function (_0x517559) {
      _0x5298d7(_0x517559, this);
    }),
    _0x2cc857[_0x1890a5(0x16d)]("PlaceGold", [], _0x4327ce),
    _0x2cc857[_0x1890a5(0x16d)]("NumItems", [_0x1890a5(0x160)], (_0xa5bd3) => {
      const _0x385bea = _0x1890a5,
        _0x4fb2aa = _0x5dfd49(),
        _0x105a8c = _0x4fb2aa[_0x385bea(0x185)]();
      $gameVariables[_0x385bea(0x111)](_0xa5bd3[_0x385bea(0x160)], _0x105a8c);
    }),
    _0x2cc857["registerCommand"](_0x1890a5(0x1df), [], () => {
      const _0x54fe64 = _0x1890a5,
        _0x47f1cb = _0x5dfd49();
      _0x47f1cb[_0x54fe64(0x1e6)]()[_0x54fe64(0x114)]();
    }),
    _0x2cc857[_0x1890a5(0x16d)](_0x1890a5(0x1e4), [], () => {
      const _0x51c106 = _0x1890a5,
        _0x15ec65 = _0x5dfd49();
      _0x15ec65["current"]()[_0x51c106(0x114)]();
    });
  function _0x213371() {
    const _0x2246b7 = [
      UZMIP_MapitmeContainer,
      UZMIP_MapItems,
      UZMIP_EventItem,
      UZMIP_EventGold,
      UZMIP_MapItemCasset,
      UZMIP_MapItem_LifeTimer,
      UZMIP_ItemPosition,
    ];
    for (const _0x583734 of _0x2246b7) {
      window[_0x583734["name"]] = _0x583734;
    }
  }
  _0x213371();
})();
