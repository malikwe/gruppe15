var antalKlik = 0;
$(window).on("load", tilIphone);

function sidenErLoadet() {
    console.log("siden er loadet");

    $("#baggrund").addClass("startsite");
    $("#dreng_container").addClass("dreng_startposition1");
    $("#dreng_sprite").addClass("dreng_startanimation");
    $("#pige_container").addClass("pige_startskaerm");
    $("#pige_sprite").addClass("pige_forside");

    $(".trykdreng").on("click", vedKlikDreng);



}

function vedKlikDreng() {
    console.log("Der er blevet klikket på drengen")

    $("#baggrund").removeClass("startsite");
    $("#dreng_container").removeClass("dreng_startposition1");
    $("#dreng_sprite").removeClass("dreng_startanimation");
    $("#pige_container").removeClass("pige_startskaerm");
    $("#pige_sprite").removeClass("pige_forside");

    $(".trykdreng").off("click", vedKlikDreng);

    $("#baggrund").addClass("dreng_room");
    $("#dreng_sprite").addClass("dreng_noegen");

    $("#dreng_container").addClass("dreng_startposition");
    $("#dreng_sprite").addClass("dreng_tagerbillede");

    $("#dreng_container").on("animationend", tilIphone);




}

function tilIphone() {
    console.log("Iphone vinkel")
    $("#baggrund").removeClass("dreng_room");
    $("#dreng_sprite").removeClass("dreng_noegen");

    $("#dreng_container").removeClass("dreng_startposition");
    $("#dreng_sprite").removeClass("dreng_tagerbillede");

    $("#dreng_container").off("animationend", tilIphone);

    $("#iphone_container").addClass("iphone_placering");
    $("#iphone_sprite").addClass("snapchat_send");

    $("#iphone_container").on("animationend", startHistorie);

}



function startHistorie() {
    console.log("tryk på start");

    $("#iphone_container").removeClass("iphone_placering");
    $("#iphone_sprite").removeClass("snapchat_send");

    $("#iphone_container").off("animationend", startHistorie);

    $("#dreng_sprite").addClass("dreng_overrasket");
    $("#dreng_container").addClass("dreng_overrasket_position");
    $("#dreng_sprite").addClass("dreng_overrasket_animation");

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
        'top': randomIntFromInterval(4, 82) + '%',
        'left': randomIntFromInterval(1, 75) + '%'
    }).on("click", haandKopier).show();
    //haand.clone er for at clone det, removeclass haand og derfor tilføje

    $(".haand").clone().removeClass("haand").addClass("haand" + antalKlik + "B").addClass("haand" + randomIntFromInterval(1, 6)).appendTo("#scene").css({
        'top': randomIntFromInterval(4, 82) + '%',
        'left': randomIntFromInterval(1, 75) + '%'
    }).on("click", haandKopier).show();

    $(".haand").clone().removeClass("haand").addClass("haand" + antalKlik + "C").addClass("haand" + randomIntFromInterval(1, 6)).appendTo("#scene").css({
        'top': randomIntFromInterval(4, 82) + '%',
        'left': randomIntFromInterval(1, 75) + '%'
    }).on("click", haandKopier).show();


}

function startSpilPige() {
    console.log("spilstarted");
    $(".trykstart").off("click", startSpilPige);
    $(".trykstart").hide();

    $("#baggrund").removeClass("trykstartside");

    $("#hands").addClass("haandVisPige")
    $("#hands").addClass("haand")
    $("#baggrund").addClass("spilside");


    $(".haand").on("click", haandKopier);

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
