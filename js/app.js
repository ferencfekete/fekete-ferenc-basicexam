function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
  var userDatas = JSON.parse(xhttp.responseText);
  var withoutNull = [];


  // 1. feladat
  function orderObjByCost(arr) {
    var i = arr.length - 1;
    var tmp;
    var swap = false;

    do {
      swap = false;
      for (var j = 0; j < i - 1; j++) {
        if (parseInt(arr[j].cost_in_credits) > parseInt(arr[j + 1].cost_in_credits) || !arr[j + 1].cost_in_credits) {
          tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          swap = true;
        }
      }
      i--;
    } while (i >= 0 && swap);
    console.log(arr);
  }
  orderObjByCost(userDatas);

  // 2. feladat

  function deleteConsumableWhereNull(arr) {
    for (var i in arr) {
      if (arr[i].consumables !== null) {
        withoutNull.push(arr[i])
      }
    }
    console.log(withoutNull);
  }

  deleteConsumableWhereNull(userDatas);

  // 3. feladat

  function deleteNulls(arr) {
    for (var i in arr) {
      if (Object.keys[arr[i]] == null) {}
    }
  }
  deleteNulls(userDatas);

  // 4. feladat



  // 5. feladat



  // 6. feladat



}

getData('/json/spaceships.json', successAjax);