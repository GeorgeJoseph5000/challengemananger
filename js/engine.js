'use strict';
/** @type {!Array} */
var _0x11de = ["challengemanagerthebest", "AIzaSyDUxwq8RxbkOAXmFhO1TNdC_xP0LZ0GwS8", "katyba24-d2ac5.firebaseapp.com", "https://katyba24-d2ac5.firebaseio.com", "katyba24-d2ac5", "katyba24-d2ac5.appspot.com", "642897487994", "1:642897487994:web:37990edd92b65793a633c3", "initializeApp", "nav", "getElementById", "innerHTML", '\r\n<nav class="navbar navbar-expand-md navbar-dark fixed-top" id="main-nav" style="opacity: 0.9;background-color: black;">\r\n<a class="navbar-brand" href="#" onclick="showDaysList();">Challenge Manager</a>\r\n<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar"\r\n  aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">\r\n  <span class="navbar-toggler-icon"></span>\r\n</button>\r\n\r\n<div class="collapse navbar-collapse" id="navBar">\r\n  <ul class="navbar-nav mr-auto">\r\n  <li class="nav-item dropdown">\r\n                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"\r\n                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n                        Products\r\n                    </a>\r\n                    <div class="dropdown-menu" id="dropdown-menu1" style="background-color:black;border: solid 1px white;"\r\n                        aria-labelledby="navbarDropdown">\r\n                        <a class="dropdown-item" id="dropdown-item" href="../main/">Portfolio</a>\r\n                        \r\n                        <a class="dropdown-item" id="dropdown-item" href="../templates">HTML Templates</a>\r\n                        <div class="dropdown-divider"></div>\r\n                        <a class="dropdown-item" id="dropdown-item" href="../eailio">Eailio</a>\r\n                        <a class="dropdown-item" id="dropdown-item" href="../exams">Exams</a>\r\n                        <div class="dropdown-divider"></div>\r\n                        <a class="dropdown-item" id="dropdown-item" href="../eailio2020">Eailio 2020</a>\r\n                        <a class="dropdown-item" id="dropdown-item" href="#">Challenge Manager</a>\r\n                        \r\n                        <div class="dropdown-divider"></div>\r\n\r\n                        <a class="dropdown-item" id="dropdown-item" href="../main/android.php">Focus</a>\r\n                        <a class="dropdown-item" id="dropdown-item" href="../main/flutter.php">CloneGram</a>\r\n                    </div>\r\n                </li>\r\n  <li class="nav-item dropdown">\r\n  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"\r\n      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n      Leader Or Admin\r\n  </a>\r\n  <div class="dropdown-menu" id="dropdown-menu1" style="background-color:black;border:solid 1px white;"\r\n      aria-labelledby="navbarDropdown">\r\n      <a class="dropdown-item" onclick="addPerson()" id="dropdown-item" href="#">Add Person</a>\r\n\r\n      <a class="dropdown-item" href="#" id="dropdown-item" onclick="deletePerson()">Delete Person</a>\r\n      <div class="dropdown-divider"></div>\r\n      <a class="dropdown-item" href="#" id="dropdown-item" onclick="addChallenge()">Add Challenge</a>\r\n      <a class="dropdown-item" href="#" id="dropdown-item" onclick="deleteChallenge()">Delete Challenge</a>\r\n      <div class="dropdown-divider"></div>\r\n      <a class="dropdown-item" href="#" id="dropdown-item" onclick="addDone()">Add Done \u2705</a>\r\n      <a class="dropdown-item" href="#" id="dropdown-item" onclick="deleteDone()">Remove Done \u2705</a>\r\n  </div>\r\n</li>\r\n    <li class="nav-item">\r\n      <a class="nav-link" href="#" id="li-nav" onclick="showDaysList()">Dashboard</a>\r\n    </li>\r\n    <li class="nav-item">\r\n      <a class="nav-link" href="#" id="li-nav" onclick="showTotalTable();">Show Total Table</a>\r\n    </li>\r\n\r\n\r\n  </ul>\r\n  <ul class="navbar-nav ml-auto">\r\n\r\n  </ul>\r\n</div>\r\n</nav>', 
"firestore", "app", "get", "day", "desc", "orderBy", "challenges", "collection", "data", "push", "forEach", "team", "users", "div", "createElement", "className", "row", "col-md-4", "marginBottom", "style", "20px", "button", "<h1>Leader Panel</h1>", "btn btn-warning", "width", "100%", "color", "white", "click", "preventDefault", "addEventListener", "appendChild", "<h1>Show All Challenges</h1>", "btn btn-success", "<h2>Challenge ", "</h2>", "<br>\r\n    <h3>", "length", "done", " People done out ", 
"</h3><br><h3>", "title", "</h3>", "btn btn-primary", "", "limit", "==", "where", "name", "id", "\u2705", "\u274c", '\r\n    <tr>\r\n      <th><a href="#" onclick="showUser(\'', "')\">", "</a></th>\r\n      <td>", "</td>\r\n      <td>", "</td>\r\n      \r\n    </tr>", "</h2><br>", "<h2>", "<br>", "content", "<br><br>", '<div class="table-responsive-sm">\r\n    <table class="table table-hover table-dark table-striped" style="color:white;">\r\n    <thead>\r\n      <tr>\r\n      <th></th>\r\n      <th>Team</th>\r\n      <th scope="col"><a href="#" onclick="showDay(', 
')">', " - Day ", "</a></a></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n    ", "\r\n  </tbody>\r\n  </table>\r\n  </div>", '\r\n    <tr>\r\n      <th><a href="#" onclick="showDay(', ')">Day ', " - ", "</td>\r\n    </tr>", "'s Progress</h2>", '<div class="table-responsive-sm">\r\n    <table class="table table-hover table-dark table-striped" style="color:white;">\r\n    <thead>\r\n      <tr>\r\n      <th></th>\r\n      <th scope="col"><a href="#" onclick="showUser(\'', "</a></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n    ", 
'<th><a href="#" onclick="showDay(', "</a></th>", "\r\n    <tr>\r\n    <th>", '</th>\r\n      <td><a href="#" onclick="showUser(\'', "</a></td>\r\n      <td>", "</td>", "<td>", "</tr>", "<h1>All Challenges</h1>", '<div class="table-responsive-sm">\r\n  <table style="color:white;">', '<div class="table-responsive-sm">\r\n  <table class="table table-sm table-hover table-dark table-striped" style="color:white;">', '\r\n    <thead>\r\n      <tr>\r\n      <th></th>\r\n      <th></th>\r\n      <th><div style="font-size:12px;">Team</div></th>\r\n      ', 
"\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n    ", "h2", "innerText", "Add Person", "br", "input", "type", "text", "placeholder", "Enter a name to add a user", "form-control", "Enter the admin password", "number", "Enter team", "Add", "value", "Fill all fields", "now", "set", "doc", "Person added", "Admin password wrong", "Delete Person", "select", "option", "Delete", "btn btn-danger", "delete", "array-contains", "indexOf", "splice", "update", "Person deleted", "Wrong Admin Password", "Add Challenge", 
"Enter Challenge Title", "Enter Day Number", "textarea", "Enter Challenge Description", "Challenge add", "Wrong admin password", "Delete Challenge", "Challenge ", "Challenge is deleted", "Admin password is wrong", "Add \u2705 to person", "log", "The User have already done the challenge", "Challenge done added", "Remove \u2705 from person.", "Remove", "This user didn't do the challenge", "Challenge done removed", "Leader Panel", "<h2>Add Person</h2>", "btn btn-info", "<h2>Delete Person</h2>", "<h2>Add Challenge</h2>", 
"<h2>Delete Challenge</h2>", "<h2>Add Done \u2705</h2>", "<h2>Remove Done \u2705</h2>"];
var password = _0x11de[0];
var firebaseConfig = {
  apiKey : _0x11de[1],
  authDomain : _0x11de[2],
  databaseURL : _0x11de[3],
  projectId : _0x11de[4],
  storageBucket : _0x11de[5],
  messagingSenderId : _0x11de[6],
  appId : _0x11de[7]
};
firebase[_0x11de[8]](firebaseConfig);
let nav = document[_0x11de[10]](_0x11de[9]);
nav[_0x11de[11]] = `${_0x11de[12]}`;
/**
 * @param {!Object} obj
 * @param {?} val
 * @return {?}
 */
function contains(obj, val) {
  for (i in obj) {
    if (obj[i] == val) {
      return true;
    }
  }
  return false;
}
var db = firebase[_0x11de[13]]();
/** @type {!Array} */
var pagesArrangement = [];
/** @type {number} */
var pageIndex = 0;
const app = document[_0x11de[10]](_0x11de[14]);
/**
 * @return {undefined}
 */
async function showDaysList() {
  var _0x2fc5xc = await db[_0x11de[20]](_0x11de[19])[_0x11de[18]](_0x11de[16], _0x11de[17])[_0x11de[15]]();
  /** @type {!Array} */
  var _0x2fc5xd = [];
  _0x2fc5xc[_0x11de[23]]((canCreateDiscussions) => {
    _0x2fc5xd[_0x11de[22]](canCreateDiscussions[_0x11de[21]]());
  });
  var _0x2fc5xf = await db[_0x11de[20]](_0x11de[25])[_0x11de[18]](_0x11de[24], _0x11de[17])[_0x11de[15]]();
  /** @type {!Array} */
  var _0x2fc5x10 = [];
  _0x2fc5xf[_0x11de[23]]((canCreateDiscussions) => {
    _0x2fc5x10[_0x11de[22]](canCreateDiscussions[_0x11de[21]]());
  });
  var window = document[_0x11de[27]](_0x11de[26]);
  window[_0x11de[28]] = _0x11de[29];
  var processEvaluatorsCallback = document[_0x11de[27]](_0x11de[26]);
  processEvaluatorsCallback[_0x11de[28]] = _0x11de[30];
  var params = document[_0x11de[27]](_0x11de[26]);
  params[_0x11de[28]] = _0x11de[30];
  params[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var srcToEval = document[_0x11de[27]](_0x11de[26]);
  srcToEval[_0x11de[28]] = _0x11de[30];
  var par = document[_0x11de[27]](_0x11de[34]);
  par[_0x11de[11]] = _0x11de[35];
  par[_0x11de[28]] = _0x11de[36];
  par[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  par[_0x11de[32]][_0x11de[39]] = _0x11de[40];
  par[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    showLeaderPanel();
  });
  params[_0x11de[44]](par);
  window[_0x11de[44]](processEvaluatorsCallback);
  window[_0x11de[44]](params);
  window[_0x11de[44]](srcToEval);
  var item = document[_0x11de[27]](_0x11de[26]);
  item[_0x11de[28]] = _0x11de[29];
  var a = document[_0x11de[27]](_0x11de[26]);
  a[_0x11de[28]] = _0x11de[29];
  var event = document[_0x11de[27]](_0x11de[26]);
  event[_0x11de[28]] = _0x11de[30];
  event[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var input = document[_0x11de[27]](_0x11de[26]);
  input[_0x11de[28]] = _0x11de[30];
  input[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var selectstart = document[_0x11de[27]](_0x11de[26]);
  selectstart[_0x11de[28]] = _0x11de[30];
  selectstart[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var data = document[_0x11de[27]](_0x11de[34]);
  data[_0x11de[11]] = _0x11de[45];
  data[_0x11de[28]] = _0x11de[46];
  data[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  data[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    showTotalTable();
  });
  input[_0x11de[44]](data);
  a[_0x11de[44]](event);
  a[_0x11de[44]](input);
  a[_0x11de[44]](selectstart);
  _0x2fc5xd[_0x11de[23]]((canCreateDiscussions) => {
    var value = document[_0x11de[27]](_0x11de[26]);
    value[_0x11de[28]] = _0x11de[30];
    var data = document[_0x11de[27]](_0x11de[34]);
    data[_0x11de[11]] = _0x11de[47] + canCreateDiscussions[_0x11de[16]] + _0x11de[48] + `${_0x11de[49]}${canCreateDiscussions[_0x11de[51]][_0x11de[50]]}${_0x11de[52]}${_0x2fc5x10[_0x11de[50]]}${_0x11de[53]}${canCreateDiscussions[_0x11de[54]]}${_0x11de[55]}`;
    data[_0x11de[28]] = _0x11de[56];
    data[_0x11de[32]][_0x11de[37]] = _0x11de[38];
    data[_0x11de[43]](_0x11de[41], (isSlidingUp) => {
      isSlidingUp[_0x11de[42]]();
      showDay(canCreateDiscussions[_0x11de[16]]);
    });
    value[_0x11de[44]](data);
    value[_0x11de[32]][_0x11de[31]] = _0x11de[33];
    item[_0x11de[44]](value);
  });
  app[_0x11de[11]] = _0x11de[57];
  app[_0x11de[44]](window);
  app[_0x11de[44]](a);
  app[_0x11de[44]](item);
}
showDaysList();
/**
 * @param {?} input
 * @return {undefined}
 */
async function showDay(input) {
  var _0x2fc5xc = await db[_0x11de[20]](_0x11de[19])[_0x11de[60]](_0x11de[16], _0x11de[59], input)[_0x11de[58]](1)[_0x11de[15]]();
  var checkSet = {};
  _0x2fc5xc[_0x11de[23]]((canCreateDiscussions) => {
    checkSet = canCreateDiscussions[_0x11de[21]]();
  });
  var _0x2fc5xf = await db[_0x11de[20]](_0x11de[25])[_0x11de[18]](_0x11de[24])[_0x11de[15]]();
  /** @type {!Array} */
  var _0x2fc5x10 = [];
  _0x2fc5xf[_0x11de[23]]((canCreateDiscussions) => {
    _0x2fc5x10[_0x11de[22]](canCreateDiscussions[_0x11de[21]]());
  });
  var url = _0x11de[57];
  _0x2fc5x10[_0x11de[23]]((componentStack) => {
    var constructorPartParm1 = componentStack[_0x11de[61]];
    var byhour = componentStack[_0x11de[51]];
    var parentComponentDef = componentStack[_0x11de[24]];
    var Y = contains(byhour, checkSet[_0x11de[62]]) ? _0x11de[63] : _0x11de[64];
    url = url + `${_0x11de[65]}${constructorPartParm1}${_0x11de[66]}${constructorPartParm1}${_0x11de[67]}${parentComponentDef}${_0x11de[68]}${Y}${_0x11de[69]}`;
  });
  var message = _0x11de[47] + checkSet[_0x11de[16]] + _0x11de[70] + `${_0x11de[71]}${checkSet[_0x11de[54]]}${_0x11de[48]}`;
  message = message + `${_0x11de[72]}${checkSet[_0x11de[73]]}${_0x11de[74]}`;
  var text = `${_0x11de[75]}${checkSet[_0x11de[16]]}${_0x11de[76]}${checkSet[_0x11de[54]]}${_0x11de[77]}${checkSet[_0x11de[16]]}${_0x11de[78]}${url}${_0x11de[79]}`;
  message = message + text;
  app[_0x11de[11]] = message;
}
/**
 * @param {?} callback
 * @return {undefined}
 */
async function showUser(callback) {
  var _0x2fc5xc = await db[_0x11de[20]](_0x11de[25])[_0x11de[60]](_0x11de[61], _0x11de[59], callback)[_0x11de[58]](1)[_0x11de[15]]();
  var checkSet = {};
  _0x2fc5xc[_0x11de[23]]((canCreateDiscussions) => {
    checkSet = canCreateDiscussions[_0x11de[21]]();
  });
  var _0x2fc5x2b = await db[_0x11de[20]](_0x11de[19])[_0x11de[18]](_0x11de[16])[_0x11de[15]]();
  /** @type {!Array} */
  var _0x2fc5x2c = [];
  _0x2fc5x2b[_0x11de[23]]((canCreateDiscussions) => {
    _0x2fc5x2c[_0x11de[22]](canCreateDiscussions[_0x11de[21]]());
  });
  var message = _0x11de[57];
  _0x2fc5x2c[_0x11de[23]]((componentStack) => {
    var EXT = componentStack[_0x11de[16]];
    var parentComponentDef = componentStack[_0x11de[54]];
    var byhour = componentStack[_0x11de[51]];
    var Y = contains(byhour, checkSet[_0x11de[62]]) ? _0x11de[63] : _0x11de[64];
    message = message + `${_0x11de[80]}${EXT}${_0x11de[81]}${EXT}${_0x11de[82]}${parentComponentDef}${_0x11de[67]}${Y}${_0x11de[83]}`;
  });
  var value = _0x11de[71] + checkSet[_0x11de[61]] + _0x11de[84];
  var text = `${_0x11de[85]}${checkSet[_0x11de[61]]}${_0x11de[66]}${checkSet[_0x11de[61]]}${_0x11de[86]}${message}${_0x11de[79]}`;
  value = value + text;
  app[_0x11de[11]] = value;
}
/**
 * @return {undefined}
 */
async function showTotalTable() {
  var _0x2fc5x2b = await db[_0x11de[20]](_0x11de[19])[_0x11de[18]](_0x11de[16])[_0x11de[15]]();
  /** @type {!Array} */
  var _0x2fc5x2c = [];
  _0x2fc5x2b[_0x11de[23]]((canCreateDiscussions) => {
    _0x2fc5x2c[_0x11de[22]](canCreateDiscussions[_0x11de[21]]());
  });
  var _0x2fc5xf = await db[_0x11de[20]](_0x11de[25])[_0x11de[18]](_0x11de[24])[_0x11de[15]]();
  /** @type {!Array} */
  var _0x2fc5x10 = [];
  _0x2fc5xf[_0x11de[23]]((canCreateDiscussions) => {
    _0x2fc5x10[_0x11de[22]](canCreateDiscussions[_0x11de[21]]());
  });
  var url = _0x11de[57];
  var result = _0x11de[57];
  _0x2fc5x2c[_0x11de[23]]((componentStack) => {
    var constructorPartParm1 = componentStack[_0x11de[16]];
    var parentComponentDef = componentStack[_0x11de[54]];
    result = result + `${_0x11de[87]}${constructorPartParm1}${_0x11de[76]}${constructorPartParm1}${_0x11de[88]}`;
  });
  /** @type {number} */
  var stripeAPIVersion = 1;
  _0x2fc5x10[_0x11de[23]]((target) => {
    var sec = target[_0x11de[61]];
    var src = target[_0x11de[51]];
    var targetComponentId = target[_0x11de[24]];
    url = url + `${_0x11de[89]}${stripeAPIVersion}${_0x11de[90]}${sec}${_0x11de[66]}${sec}${_0x11de[91]}${targetComponentId}${_0x11de[92]}`;
    _0x2fc5x2c[_0x11de[23]]((val) => {
      var stripeAPIVersion = contains(val[_0x11de[51]], target[_0x11de[62]]) ? _0x11de[63] : _0x11de[64];
      url = url + `${_0x11de[93]}${stripeAPIVersion}${_0x11de[92]}`;
    });
    url = url + `${_0x11de[94]}`;
    stripeAPIVersion++;
  });
  var outputMessageBuffer = _0x11de[95];
  var message = _0x11de[57];
  if (screen[_0x11de[37]] <= 380 && _0x2fc5x2c[_0x11de[50]] >= 8) {
    message = `${_0x11de[96]}`;
  } else {
    message = `${_0x11de[97]}`;
  }
  message = message + `${_0x11de[98]}${result}${_0x11de[99]}${url}${_0x11de[79]}`;
  outputMessageBuffer = outputMessageBuffer + message;
  app[_0x11de[11]] = outputMessageBuffer;
}
/**
 * @return {undefined}
 */
function addPerson() {
  app[_0x11de[11]] = _0x11de[57];
  var item = document[_0x11de[27]](_0x11de[26]);
  item[_0x11de[28]] = _0x11de[29];
  var window = document[_0x11de[27]](_0x11de[26]);
  window[_0x11de[28]] = _0x11de[30];
  var processEvaluatorsCallback = document[_0x11de[27]](_0x11de[100]);
  processEvaluatorsCallback[_0x11de[101]] = _0x11de[102];
  window[_0x11de[44]](processEvaluatorsCallback);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  var result = document[_0x11de[27]](_0x11de[104]);
  result[_0x11de[105]] = _0x11de[106];
  result[_0x11de[107]] = _0x11de[108];
  result[_0x11de[28]] = _0x11de[109];
  var response = document[_0x11de[27]](_0x11de[104]);
  response[_0x11de[105]] = _0x11de[106];
  response[_0x11de[107]] = _0x11de[110];
  response[_0x11de[28]] = _0x11de[109];
  var params = document[_0x11de[27]](_0x11de[104]);
  params[_0x11de[105]] = _0x11de[111];
  params[_0x11de[107]] = _0x11de[112];
  params[_0x11de[28]] = _0x11de[109];
  var srcToEval = document[_0x11de[27]](_0x11de[34]);
  srcToEval[_0x11de[101]] = _0x11de[113];
  srcToEval[_0x11de[28]] = _0x11de[56];
  srcToEval[_0x11de[43]](_0x11de[41], async(canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    if (result[_0x11de[114]] == _0x11de[57] || response[_0x11de[114]] == _0x11de[57]) {
      alert(_0x11de[115]);
    } else {
      if (response[_0x11de[114]] == password) {
        var stripeAPIVersion = Date[_0x11de[116]]();
        /** @type {number} */
        var id = Number(params[_0x11de[114]]);
        await db[_0x11de[20]](_0x11de[25])[_0x11de[118]](`${_0x11de[57]}${stripeAPIVersion}${_0x11de[57]}`)[_0x11de[117]]({
          name : result[_0x11de[114]],
          id : `${_0x11de[57]}${stripeAPIVersion}${_0x11de[57]}`,
          done : [],
          team : id
        });
        alert(_0x11de[119]);
        showLeaderPanel();
      } else {
        alert(_0x11de[120]);
      }
    }
  });
  window[_0x11de[44]](result);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](response);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](params);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](srcToEval);
  item[_0x11de[44]](window);
  app[_0x11de[44]](item);
}
/**
 * @return {undefined}
 */
async function deletePerson() {
  app[_0x11de[11]] = _0x11de[57];
  var item = document[_0x11de[27]](_0x11de[26]);
  item[_0x11de[28]] = _0x11de[29];
  var window = document[_0x11de[27]](_0x11de[26]);
  window[_0x11de[28]] = _0x11de[30];
  var processEvaluatorsCallback = document[_0x11de[27]](_0x11de[100]);
  processEvaluatorsCallback[_0x11de[101]] = _0x11de[121];
  window[_0x11de[44]](processEvaluatorsCallback);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  var result = document[_0x11de[27]](_0x11de[122]);
  result[_0x11de[28]] = _0x11de[109];
  var _0x2fc5x3a = await db[_0x11de[20]](_0x11de[25])[_0x11de[18]](_0x11de[24])[_0x11de[15]]();
  _0x2fc5x3a[_0x11de[23]]((canCreateDiscussions) => {
    var color1hsl = canCreateDiscussions[_0x11de[21]]();
    var color3hsl = document[_0x11de[27]](_0x11de[123]);
    color3hsl[_0x11de[114]] = color1hsl[_0x11de[62]];
    color3hsl[_0x11de[101]] = color1hsl[_0x11de[61]];
    result[_0x11de[44]](color3hsl);
  });
  var response = document[_0x11de[27]](_0x11de[104]);
  response[_0x11de[105]] = _0x11de[106];
  response[_0x11de[107]] = _0x11de[110];
  response[_0x11de[28]] = _0x11de[109];
  var srcToEval = document[_0x11de[27]](_0x11de[34]);
  srcToEval[_0x11de[101]] = _0x11de[124];
  srcToEval[_0x11de[28]] = _0x11de[125];
  srcToEval[_0x11de[43]](_0x11de[41], async(canCreateDiscussions) => {
    if (response[_0x11de[114]] == password) {
      var data = result[_0x11de[114]];
      await db[_0x11de[20]](_0x11de[25])[_0x11de[118]](data)[_0x11de[126]]();
      var _0x2fc5xc = await db[_0x11de[20]](_0x11de[19])[_0x11de[60]](_0x11de[51], _0x11de[127], data)[_0x11de[15]]();
      _0x2fc5xc[_0x11de[23]](async(canCreateDiscussions) => {
        var tiledImageBRs = canCreateDiscussions[_0x11de[21]]();
        var packByNumType = tiledImageBRs[_0x11de[51]];
        const pivot = packByNumType[_0x11de[128]](data);
        if (pivot > -1) {
          packByNumType[_0x11de[129]](pivot, 1);
        }
        await db[_0x11de[20]](_0x11de[19])[_0x11de[118]](canCreateDiscussions[_0x11de[62]])[_0x11de[130]]({
          done : packByNumType
        });
      });
      alert(_0x11de[131]);
      showLeaderPanel();
    } else {
      alert(_0x11de[132]);
    }
  });
  window[_0x11de[44]](result);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](response);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](srcToEval);
  item[_0x11de[44]](window);
  app[_0x11de[44]](item);
}
/**
 * @return {undefined}
 */
async function addChallenge() {
  app[_0x11de[11]] = _0x11de[57];
  var item = document[_0x11de[27]](_0x11de[26]);
  item[_0x11de[28]] = _0x11de[29];
  var window = document[_0x11de[27]](_0x11de[26]);
  window[_0x11de[28]] = _0x11de[30];
  var processEvaluatorsCallback = document[_0x11de[27]](_0x11de[100]);
  processEvaluatorsCallback[_0x11de[101]] = _0x11de[133];
  window[_0x11de[44]](processEvaluatorsCallback);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  var params = document[_0x11de[27]](_0x11de[104]);
  params[_0x11de[105]] = _0x11de[106];
  params[_0x11de[107]] = _0x11de[134];
  params[_0x11de[28]] = _0x11de[109];
  var data = document[_0x11de[27]](_0x11de[104]);
  data[_0x11de[105]] = _0x11de[111];
  data[_0x11de[107]] = _0x11de[135];
  data[_0x11de[28]] = _0x11de[109];
  var result = document[_0x11de[27]](_0x11de[136]);
  result[_0x11de[28]] = _0x11de[109];
  result[_0x11de[107]] = _0x11de[137];
  var response = document[_0x11de[27]](_0x11de[104]);
  response[_0x11de[105]] = _0x11de[106];
  response[_0x11de[107]] = _0x11de[110];
  response[_0x11de[28]] = _0x11de[109];
  var _renderTimer = document[_0x11de[27]](_0x11de[34]);
  _renderTimer[_0x11de[101]] = _0x11de[113];
  _renderTimer[_0x11de[28]] = _0x11de[56];
  _renderTimer[_0x11de[43]](_0x11de[41], async(canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    if (params[_0x11de[114]] == _0x11de[57] || data[_0x11de[114]] == _0x11de[57] || result[_0x11de[114]] == _0x11de[57] || response[_0x11de[114]] == _0x11de[57]) {
      alert(_0x11de[115]);
    } else {
      /** @type {number} */
      var v = Number(data[_0x11de[114]]);
      if (response[_0x11de[114]] == password) {
        var stripeAPIVersion = Date[_0x11de[116]]();
        await db[_0x11de[20]](_0x11de[19])[_0x11de[118]](stripeAPIVersion.toString())[_0x11de[117]]({
          id : `${_0x11de[57]}${stripeAPIVersion}${_0x11de[57]}`,
          content : result[_0x11de[114]],
          day : v,
          done : [],
          title : params[_0x11de[114]]
        });
        alert(_0x11de[138]);
        showLeaderPanel();
      } else {
        alert(_0x11de[139]);
      }
    }
  });
  window[_0x11de[44]](params);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](data);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](result);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](response);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](_renderTimer);
  item[_0x11de[44]](window);
  app[_0x11de[44]](item);
}
/**
 * @return {undefined}
 */
async function deleteChallenge() {
  app[_0x11de[11]] = _0x11de[57];
  var item = document[_0x11de[27]](_0x11de[26]);
  item[_0x11de[28]] = _0x11de[29];
  var window = document[_0x11de[27]](_0x11de[26]);
  window[_0x11de[28]] = _0x11de[30];
  var processEvaluatorsCallback = document[_0x11de[27]](_0x11de[100]);
  processEvaluatorsCallback[_0x11de[101]] = _0x11de[140];
  window[_0x11de[44]](processEvaluatorsCallback);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  var data = document[_0x11de[27]](_0x11de[122]);
  data[_0x11de[28]] = _0x11de[109];
  var _0x2fc5x43 = await db[_0x11de[20]](_0x11de[19])[_0x11de[18]](_0x11de[16])[_0x11de[15]]();
  _0x2fc5x43[_0x11de[23]]((canCreateDiscussions) => {
    var color1hsl = canCreateDiscussions[_0x11de[21]]();
    var color3hsl = document[_0x11de[27]](_0x11de[123]);
    color3hsl[_0x11de[114]] = color1hsl[_0x11de[62]];
    color3hsl[_0x11de[101]] = _0x11de[141] + color1hsl[_0x11de[16]] + _0x11de[82] + color1hsl[_0x11de[54]];
    data[_0x11de[44]](color3hsl);
  });
  var response = document[_0x11de[27]](_0x11de[104]);
  response[_0x11de[105]] = _0x11de[106];
  response[_0x11de[107]] = _0x11de[110];
  response[_0x11de[28]] = _0x11de[109];
  var srcToEval = document[_0x11de[27]](_0x11de[34]);
  srcToEval[_0x11de[101]] = _0x11de[124];
  srcToEval[_0x11de[28]] = _0x11de[125];
  srcToEval[_0x11de[43]](_0x11de[41], async(canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    if (response[_0x11de[114]] == password) {
      var _0x2fc5xc = await db[_0x11de[20]](_0x11de[25])[_0x11de[60]](_0x11de[51], _0x11de[127], data[_0x11de[114]])[_0x11de[15]]();
      _0x2fc5xc[_0x11de[23]](async(canCreateDiscussions) => {
        var tiledImageBRs = canCreateDiscussions[_0x11de[21]]();
        var packByNumType = tiledImageBRs[_0x11de[51]];
        const pivot = packByNumType[_0x11de[128]](data[_0x11de[114]]);
        if (pivot > -1) {
          packByNumType[_0x11de[129]](pivot, 1);
        }
        await db[_0x11de[20]](_0x11de[25])[_0x11de[118]](canCreateDiscussions[_0x11de[62]])[_0x11de[130]]({
          done : packByNumType
        });
      });
      await db[_0x11de[20]](_0x11de[19])[_0x11de[118]](data[_0x11de[114]])[_0x11de[126]]();
      alert(_0x11de[142]);
      showLeaderPanel();
    } else {
      alert(_0x11de[143]);
    }
  });
  window[_0x11de[44]](data);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](response);
  window[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  window[_0x11de[44]](srcToEval);
  item[_0x11de[44]](window);
  app[_0x11de[44]](item);
}
/**
 * @return {undefined}
 */
async function addDone() {
  app[_0x11de[11]] = _0x11de[57];
  var item = document[_0x11de[27]](_0x11de[26]);
  item[_0x11de[28]] = _0x11de[29];
  var value = document[_0x11de[27]](_0x11de[26]);
  value[_0x11de[28]] = _0x11de[30];
  var data = document[_0x11de[27]](_0x11de[100]);
  data[_0x11de[101]] = _0x11de[144];
  value[_0x11de[44]](data);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  var elem = document[_0x11de[27]](_0x11de[122]);
  elem[_0x11de[28]] = _0x11de[109];
  var _0x2fc5x43 = await db[_0x11de[20]](_0x11de[19])[_0x11de[18]](_0x11de[16])[_0x11de[15]]();
  _0x2fc5x43[_0x11de[23]]((canCreateDiscussions) => {
    var color1hsl = canCreateDiscussions[_0x11de[21]]();
    var color3hsl = document[_0x11de[27]](_0x11de[123]);
    color3hsl[_0x11de[114]] = color1hsl[_0x11de[62]];
    color3hsl[_0x11de[101]] = _0x11de[141] + color1hsl[_0x11de[16]] + _0x11de[82] + color1hsl[_0x11de[54]];
    elem[_0x11de[44]](color3hsl);
  });
  var row = document[_0x11de[27]](_0x11de[122]);
  row[_0x11de[28]] = _0x11de[109];
  var _0x2fc5x3a = await db[_0x11de[20]](_0x11de[25])[_0x11de[18]](_0x11de[24])[_0x11de[15]]();
  _0x2fc5x3a[_0x11de[23]]((canCreateDiscussions) => {
    var color1hsl = canCreateDiscussions[_0x11de[21]]();
    var color3hsl = document[_0x11de[27]](_0x11de[123]);
    color3hsl[_0x11de[114]] = color1hsl[_0x11de[62]];
    color3hsl[_0x11de[101]] = color1hsl[_0x11de[61]];
    row[_0x11de[44]](color3hsl);
  });
  var attr_str = document[_0x11de[27]](_0x11de[104]);
  attr_str[_0x11de[105]] = _0x11de[106];
  attr_str[_0x11de[107]] = _0x11de[110];
  attr_str[_0x11de[28]] = _0x11de[109];
  var $rata = document[_0x11de[27]](_0x11de[34]);
  $rata[_0x11de[101]] = _0x11de[113];
  $rata[_0x11de[28]] = _0x11de[56];
  $rata[_0x11de[43]](_0x11de[41], async(canCreateDiscussions) => {
    if (attr_str[_0x11de[114]] == password) {
      var data = row[_0x11de[114]];
      var id = elem[_0x11de[114]];
      var _0x2fc5x49 = await db[_0x11de[20]](_0x11de[19])[_0x11de[118]](id)[_0x11de[15]]();
      var arr = _0x2fc5x49[_0x11de[21]]();
      console[_0x11de[145]](arr);
      var _0x2fc5x4b = await db[_0x11de[20]](_0x11de[25])[_0x11de[118]](data)[_0x11de[15]]();
      var args = _0x2fc5x4b[_0x11de[21]]();
      console[_0x11de[145]](args);
      /** @type {boolean} */
      var isNewStateNearStart = false;
      /** @type {boolean} */
      var reverseName = false;
      args[_0x11de[51]][_0x11de[23]]((prop) => {
        if (prop == id) {
          /** @type {boolean} */
          isNewStateNearStart = true;
        }
      });
      arr[_0x11de[51]][_0x11de[23]]((to) => {
        if (to == data) {
          /** @type {boolean} */
          reverseName = true;
        }
      });
      var reverseIsSingle = reverseName && isNewStateNearStart;
      if (reverseIsSingle) {
        alert(_0x11de[146]);
      } else {
        var done = args[_0x11de[51]];
        done[_0x11de[22]](id);
        var callback = arr[_0x11de[51]];
        callback[_0x11de[22]](data);
        await db[_0x11de[20]](_0x11de[19])[_0x11de[118]](id)[_0x11de[130]]({
          done : callback
        });
        await db[_0x11de[20]](_0x11de[25])[_0x11de[118]](data)[_0x11de[130]]({
          done : done
        });
        alert(_0x11de[147]);
        showLeaderPanel();
      }
    } else {
      alert(_0x11de[143]);
    }
  });
  value[_0x11de[44]](elem);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  value[_0x11de[44]](row);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  value[_0x11de[44]](attr_str);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  value[_0x11de[44]]($rata);
  item[_0x11de[44]](value);
  app[_0x11de[44]](item);
}
/**
 * @return {undefined}
 */
async function deleteDone() {
  app[_0x11de[11]] = _0x11de[57];
  var item = document[_0x11de[27]](_0x11de[26]);
  item[_0x11de[28]] = _0x11de[29];
  var value = document[_0x11de[27]](_0x11de[26]);
  value[_0x11de[28]] = _0x11de[30];
  var row = document[_0x11de[27]](_0x11de[100]);
  row[_0x11de[101]] = _0x11de[148];
  value[_0x11de[44]](row);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  var elem = document[_0x11de[27]](_0x11de[122]);
  elem[_0x11de[28]] = _0x11de[109];
  var _0x2fc5x43 = await db[_0x11de[20]](_0x11de[19])[_0x11de[18]](_0x11de[16])[_0x11de[15]]();
  _0x2fc5x43[_0x11de[23]]((canCreateDiscussions) => {
    var color1hsl = canCreateDiscussions[_0x11de[21]]();
    var color3hsl = document[_0x11de[27]](_0x11de[123]);
    color3hsl[_0x11de[114]] = color1hsl[_0x11de[62]];
    color3hsl[_0x11de[101]] = _0x11de[141] + color1hsl[_0x11de[16]] + _0x11de[82] + color1hsl[_0x11de[54]];
    elem[_0x11de[44]](color3hsl);
  });
  var data = document[_0x11de[27]](_0x11de[122]);
  data[_0x11de[28]] = _0x11de[109];
  var _0x2fc5x3a = await db[_0x11de[20]](_0x11de[25])[_0x11de[18]](_0x11de[24])[_0x11de[15]]();
  _0x2fc5x3a[_0x11de[23]]((canCreateDiscussions) => {
    var color1hsl = canCreateDiscussions[_0x11de[21]]();
    var color3hsl = document[_0x11de[27]](_0x11de[123]);
    color3hsl[_0x11de[114]] = color1hsl[_0x11de[62]];
    color3hsl[_0x11de[101]] = color1hsl[_0x11de[61]];
    data[_0x11de[44]](color3hsl);
  });
  var attr_str = document[_0x11de[27]](_0x11de[104]);
  attr_str[_0x11de[105]] = _0x11de[106];
  attr_str[_0x11de[107]] = _0x11de[110];
  attr_str[_0x11de[28]] = _0x11de[109];
  var $rata = document[_0x11de[27]](_0x11de[34]);
  $rata[_0x11de[101]] = _0x11de[149];
  $rata[_0x11de[28]] = _0x11de[125];
  $rata[_0x11de[43]](_0x11de[41], async(canCreateDiscussions) => {
    if (attr_str[_0x11de[114]] == password) {
      var type = data[_0x11de[114]];
      var id = elem[_0x11de[114]];
      var _0x2fc5x49 = await db[_0x11de[20]](_0x11de[19])[_0x11de[118]](id)[_0x11de[15]]();
      var arr = _0x2fc5x49[_0x11de[21]]();
      console[_0x11de[145]](arr);
      var _0x2fc5x4b = await db[_0x11de[20]](_0x11de[25])[_0x11de[118]](type)[_0x11de[15]]();
      var pre = _0x2fc5x4b[_0x11de[21]]();
      console[_0x11de[145]](pre);
      /** @type {boolean} */
      var isNewStateNearStart = false;
      /** @type {boolean} */
      var reverseName = false;
      pre[_0x11de[51]][_0x11de[23]]((prop) => {
        if (prop == id) {
          /** @type {boolean} */
          isNewStateNearStart = true;
        }
      });
      arr[_0x11de[51]][_0x11de[23]]((array) => {
        if (array == type) {
          /** @type {boolean} */
          reverseName = true;
        }
      });
      var reverseIsSingle = reverseName && isNewStateNearStart;
      if (!reverseIsSingle) {
        alert(_0x11de[150]);
      } else {
        var y = pre[_0x11de[51]];
        var callback = arr[_0x11de[51]];
        const p = callback[_0x11de[128]](type);
        if (p > -1) {
          callback[_0x11de[129]](p, 1);
        }
        await db[_0x11de[20]](_0x11de[19])[_0x11de[118]](id)[_0x11de[130]]({
          done : callback
        });
        const interval = y[_0x11de[128]](id);
        if (interval > -1) {
          y[_0x11de[129]](interval, 1);
        }
        await db[_0x11de[20]](_0x11de[25])[_0x11de[118]](type)[_0x11de[130]]({
          done : y
        });
        alert(_0x11de[151]);
        showLeaderPanel();
      }
    } else {
      alert(_0x11de[143]);
    }
  });
  value[_0x11de[44]](elem);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  value[_0x11de[44]](data);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  value[_0x11de[44]](attr_str);
  value[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  value[_0x11de[44]]($rata);
  item[_0x11de[44]](value);
  app[_0x11de[44]](item);
}
/**
 * @return {undefined}
 */
function showLeaderPanel() {
  app[_0x11de[11]] = _0x11de[57];
  var item = document[_0x11de[27]](_0x11de[100]);
  item[_0x11de[101]] = _0x11de[152];
  app[_0x11de[44]](item);
  app[_0x11de[44]](document[_0x11de[27]](_0x11de[103]));
  var req = document[_0x11de[27]](_0x11de[26]);
  req[_0x11de[28]] = _0x11de[29];
  var url = document[_0x11de[27]](_0x11de[26]);
  url[_0x11de[28]] = _0x11de[30];
  var postName = document[_0x11de[27]](_0x11de[34]);
  postName[_0x11de[11]] = _0x11de[153];
  postName[_0x11de[28]] = _0x11de[154];
  postName[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  postName[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    addPerson();
  });
  url[_0x11de[44]](postName);
  url[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var container = document[_0x11de[27]](_0x11de[26]);
  container[_0x11de[28]] = _0x11de[30];
  var data = document[_0x11de[27]](_0x11de[34]);
  data[_0x11de[11]] = _0x11de[155];
  data[_0x11de[28]] = _0x11de[154];
  data[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  data[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    deletePerson();
  });
  container[_0x11de[44]](data);
  container[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var graphic = document[_0x11de[27]](_0x11de[26]);
  graphic[_0x11de[28]] = _0x11de[30];
  var clipPath = document[_0x11de[27]](_0x11de[34]);
  clipPath[_0x11de[11]] = _0x11de[156];
  clipPath[_0x11de[28]] = _0x11de[154];
  clipPath[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  clipPath[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    addChallenge();
  });
  graphic[_0x11de[44]](clipPath);
  graphic[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var _spring2 = document[_0x11de[27]](_0x11de[26]);
  _spring2[_0x11de[28]] = _0x11de[30];
  var val = document[_0x11de[27]](_0x11de[34]);
  val[_0x11de[11]] = _0x11de[157];
  val[_0x11de[28]] = _0x11de[154];
  val[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  val[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    deleteChallenge();
  });
  _spring2[_0x11de[44]](val);
  _spring2[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var PL$26 = document[_0x11de[27]](_0x11de[26]);
  PL$26[_0x11de[28]] = _0x11de[30];
  var PL$27 = document[_0x11de[27]](_0x11de[34]);
  PL$27[_0x11de[11]] = _0x11de[158];
  PL$27[_0x11de[28]] = _0x11de[154];
  PL$27[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  PL$27[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    addDone();
  });
  PL$26[_0x11de[44]](PL$27);
  PL$26[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  var typeCheckers = document[_0x11de[27]](_0x11de[26]);
  typeCheckers[_0x11de[28]] = _0x11de[30];
  var value = document[_0x11de[27]](_0x11de[34]);
  value[_0x11de[11]] = _0x11de[159];
  value[_0x11de[28]] = _0x11de[154];
  value[_0x11de[32]][_0x11de[37]] = _0x11de[38];
  value[_0x11de[43]](_0x11de[41], (canCreateDiscussions) => {
    canCreateDiscussions[_0x11de[42]]();
    deleteDone();
  });
  typeCheckers[_0x11de[44]](value);
  typeCheckers[_0x11de[32]][_0x11de[31]] = _0x11de[33];
  req[_0x11de[44]](url);
  req[_0x11de[44]](container);
  req[_0x11de[44]](graphic);
  req[_0x11de[44]](_spring2);
  req[_0x11de[44]](PL$26);
  req[_0x11de[44]](typeCheckers);
  app[_0x11de[44]](req);
}
;
