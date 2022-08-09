function getData() {
  let retrievedData = localStorage.getItem("foods");

  let arrData = JSON.parse(retrievedData);
  console.log(arrData);

  if (arrData != null) {
    for (let i = 0; i < arrData.length; i++) {
      new Restaurant(
        // arrData[i].id,
        arrData[i].FoodName,
        arrData[i].type,
        arrData[i].price
      ); //end new Resraurant
    } //end for
  } //end if
  for (let i = 0; i < allRes.length; i++) {
    allRes[i].render();
  } //end for2

  console.log("-->", allRes);
  console.log("-->", arrData);
} //end fub=nction getData

getData();
