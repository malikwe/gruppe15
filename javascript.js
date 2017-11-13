var antalKlik = 0;
$(window).on("load", startHistorie);

function sidenErLoadet() {
    console.log("siden er loadet");

}

function vedKlikDreng() {
    console.log("Der er blevet klikket på drengen")

}

function tilIphone() {
    console.log("Iphone vinkel")

}

function vedKlikSend() {
    console.log("Sender")

}

function efterLydSendt() {
    console.log("Screenshot bliver taget")

}

function efterAnimationScreenshot() {
    console.log("Dreng chokeret")

}

function efterLydGisp() {
    console.log("Spil side 1")

}

function startHistorie() {
    console.log("tryk på start");

    $("#baggrund").addClass("trykstartside");
    $(".trykstart").on("click", startSpil);
}

function startSpil() {
    console.log("spilstarted");
    $(".trykstart").off("click", startSpil);
    $(".trykstart").hide();

    $("#baggrund").removeClass("trykstartside");

    $("#hands").addClass("haandVis")
    $("#hands").addClass("haand")
    $("#baggrund").addClass("spilside");


    $(".haand").on("click", haandKopier);

}

function haandKopier() {
    console.log("haandKopier");
    $(this).off("click", haandKopier);
    $(this).hide();
    antalKlik++;
    //this hide er til at gemme den man klikker på.
    //this off click er for at slukke click fra f startspil
    //antalklik++ er til at tilføje et klik til at give class et unikt navn

    $(".haand").clone().removeClass("haand").addClass("haand" + antalKlik + "A").addClass("haand" + randomIntFromInterval(1, 6)).appendTo("#scene").css({
        'top': randomIntFromInterval(20, 75) + '%',
        'left': randomIntFromInterval(20, 75) + '%'
    }).on("click", haandKopier).show();
    //haand.clone er for at clone det, removeclass haand og derfor tilføje

    $(".haand").clone().removeClass("haand").addClass("haand" + antalKlik + "B").addClass("haand" + randomIntFromInterval(1, 6)).appendTo("#scene").css({
        'top': randomIntFromInterval(10, 75) + '%',
        'left': randomIntFromInterval(10, 75) + '%'
    }).on("click", haandKopier).show();

    $(".haand").clone().removeClass("haand").addClass("haand" + antalKlik + "C").addClass("haand" + randomIntFromInterval(1, 6)).appendTo("#scene").css({
        'top': randomIntFromInterval(10, 75) + '%',
        'left': randomIntFromInterval(10, 75) + '%'
    }).on("click", haandKopier).show();


}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function efterAnimationCountdown() {
    console.log("vis spil side 3")

}

function vedKlikPil() {
    console.log("vis spilside 4")

}

function vedKlikReplay() {
    console.log("genstart")

}

function vedKlikPige() {
    console.log("Der er blevet klikket på drengen")

}

function tilIphonePige() {
    console.log("Iphone vinkel")

}

function vedKlikSendPige() {
    console.log("Sender")

}

function efterLydSendtPige() {
    console.log("Screenshot bliver taget")

}

function efterAnimationScreenshotPige() {
    console.log("Dreng chokeret")

}

function efterLydGispPige() {
    console.log("Spil side 1")

}

function vedKlikStartPige() {
    console.log("Spil går i gang")

}

function efterAnimationCountdownPige() {
    console.log("vis spil side 3")

}

function vedKlikPilPige() {
    console.log("vis spilside 4")

}

function vedKlikReplayPige() {
    console.log("genstart")

}
