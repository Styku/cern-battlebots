function toggleVisibility(id) {
    var elem = document.getElementById(id);
    console.log(id);
    console.log(elem);
    console.log(elem.className);

    if (elem.className == "hidden") {
        elem.className = "";
    } else {
        elem.className = "hidden";
    }
    console.log(elem.className);

}