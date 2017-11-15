var antalKlik = 0;
$(window).on("load", sidenErLoadet);

function sidenErLoadet() {
    console.log("siden er loadet");


    $("#baggrund").addClass("startsite");
    $("#dreng_container").addClass("dreng_startposition1");
    $("#dreng_sprite").addClass("dreng_startanimation");
    $("#pige_container").addClass("pige_startskaerm");
    $("#pige_sprite").addClass("pige_forside");

    $(".trykdreng").on("click", vedKlikDreng);
    $(".trykpige").on("click", vedKlikPige);



}

function vedKlikDreng() {
    console.log("Der er blevet klikket på drengen")

    $("#baggrund").removeClass("startsite");
    $("#dreng_container").removeClass("dreng_startposition1");
    $("#dreng_sprite").removeClass("dreng_startanimation");
    $("#pige_container").removeClass("pige_startskaerm");
    $("#pige_sprite").removeClass("pige_forside");

    $(".trykdreng").off("click", vedKlikDreng);
    $(".trykpige").off("click", vedKlikPige);
    $("#baggrund").addClass("dreng_room");
    $("#dreng_sprite").addClass("dreng_noegen");

    $("#dreng_container").addClass("dreng_startposition");
    $("#dreng_sprite").addClass("dreng_tagerbillede");
    setTimeout(function () {
        new Audio('assets/lyde/camera_shutter.mp3').play();
    }, 1700);
    $("#dreng_container").on("animationend", tilIphone);




}

function tilIphone() {
    console.log("Iphone vinkel")

    $("#baggrund").removeClass("dreng_room");
    $("#dreng_sprite").removeClass("dreng_noegen");

    $("#dreng_container").removeClass("dreng_startposition");
    $("#dreng_sprite").removeClass("dreng_tagerbillede");
    $("#dreng_container").off("animationend", tilIphone);

    $("#baggrund").addClass("iphone_baggrund");
    $("#knap").addClass("send_knap");
    $("#iphone_container").addClass("iphone_placering");
    $("#iphone_sprite").addClass("snapchat_tryk_send");
    $(".send_knap").on("click", trykSend);

}


function trykSend() {
    console.log("der er trykket send")
    $("#iphone_sprite").removeClass("snapchat_tryk_send");
    $(".send_knap").off("click", trykSend);
    $("#knap").removeClass("send_knap");


    setTimeout(function () {
        new Audio('assets/lyde/sentmessage.mp3').play();
    }, 1000);
    $("#iphone_sprite").addClass("snapchat_send");
    setTimeout(function () {
        new Audio('assets/lyde/snapchat_notification.mp3').play();
    }, 3000);
    $("#iphone_container").on("animationend", drengOverrasket);

}

function drengOverrasket() {
    $("#iphone_container").off("animationend", drengOverrasket);

    setTimeout(function () {
        new Audio('assets/lyde/overrasket.mp3').play();
    }, 500);
    $("#dreng_container").addClass("dreng_overrasket_position");
    $("#dreng_sprite").addClass("dreng_overrasket_animation");
    $("#dreng_sprite").addClass("dreng_overrasket");
    setTimeout(startHistorie, 3000);
}


function startHistorie() {
    console.log("tryk på start");
    $("#baggrund").removeClass("iphone_baggrund");
    $("#iphone_container").removeClass("iphone_placering");
    $("#iphone_sprite").removeClass("snapchat_send");

    $("#iphone_container").off("animationend", startHistorie);


    $("#baggrund").addClass("trykstartside");
    $(".trykstart").on("click", startSpil);
}

function startSpil() {
    console.log("spilstarted");
    $("#dreng_container").removeClass("dreng_overrasket_position");
    $("#dreng_sprite").removeClass("dreng_overrasket_animation");
    $("#dreng_sprite").removeClass("dreng_overrasket");
    $("#baggrund").removeClass("trykstartside");
    $(".trykstart").off("click", startSpil);
    $(".trykstart").hide();
    $("#baggrund").removeClass("trykstartside");


    $("#output").addClass("number_game");
    $("#hands").addClass("haandVis");
    $("#hands").addClass("haand");
    $("#baggrund").addClass("spilside");
    $("#time").addClass("time_animation");



    $(".haand").on("click", haandKopier);
    setTimeout(efterAnimationCountdown, 15000);
}

function kliksound() {
    setTimeout(function () {
        new Audio('assets/lyde/klik.mp3').play();
    }, );
}

function haandKopier() {

    console.log("haandKopier" + antalKlik);
    setTimeout(function () {
        new Audio('assets/lyde/klik.mp3').play();
    }, );
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

    $('#output').html(function (i, val) {
        return val * 1 + 2
    });

}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function efterAnimationCountdown() {
    console.log("vis spil side 3");
    $("#time").removeClass("time_animation");

    $("#output").removeClass("number_game");
    $("#hands").removeClass("haandVis");
    $("#hands").removeClass("haandVisPige");
    $("#hands").removeClass("haand");
    $("#baggrund").removeClass("spilside");
    $(".haand").off("click", haandKopier);
    $(".haandVis").remove();
    $(".haandVisPige").remove();

    $("#baggrund").addClass("billede_delt");
    $("#output").addClass("number_side");

    $("#pil").addClass("trykpil");
    $(".trykpil").on("click", vedKlikPil);

}

function vedKlikPil() {
    console.log("vis spilside 4");

    $("#baggrund").removeClass("billede_delt");
    $("#output").removeClass("number_side");

    $("#pil").removeClass("trykpil");
    $(".trykpil").off("click", vedKlikPil);

    $("#baggrund").addClass("vidste_du");
    $("#link").addClass("privatsnaklink");
    $("#replay").addClass("replayknap");
    $("#replay").on("click", vedKlikReplay);


}

function vedKlikReplay() {
    console.log("genstart");
    document.location.reload(true);
}

function vedKlikPige() {
    console.log("Der er blevet klikket på pigen")
    $("#baggrund").removeClass("startsite");
    $("#dreng_container").removeClass("dreng_startposition1");
    $("#dreng_sprite").removeClass("dreng_startanimation");
    $("#pige_container").removeClass("pige_startskaerm");
    $("#pige_sprite").removeClass("pige_forside");
    $(".trykdreng").off("click", vedKlikDreng);
    $(".trykpige").off("click", vedKlikPige);


    $("#baggrund").addClass("pige_room");
    $("#pige_sprite").addClass("pige_noegen");

    $("#pige_container").addClass("dreng_startposition");
    $("#pige_sprite").addClass("dreng_tagerbillede");
    setTimeout(function () {
        new Audio('assets/lyde/camera_shutter.mp3').play();
    }, 1700);

    $("#pige_container").on("animationend", tilIphonePige);


}

function tilIphonePige() {
    console.log("Iphone vinkel")
    $("#baggrund").removeClass("pige_room");
    $("#pige_sprite").removeClass("pige_noegen");
    $("#pige_container").removeClass("dreng_startposition");
    $("#pige_sprite").removeClass("dreng_tagerbillede");
    $("#pige_container").off("animationend", tilIphonePige);


    $("#baggrund").addClass("iphone_baggrund");
    $("#knap").addClass("send_knap");
    $("#iphone_container").addClass("iphone_placering");
    $("#iphone_sprite_pige").addClass("snapchat_tryk_send");
    $(".send_knap").on("click", trykSendPige);
}

function trykSendPige() {
    console.log("Sender")
    $("#knap").removeClass("send_knap");
    $("#iphone_sprite_pige").removeClass("snapchat_tryk_send");
    $(".send_knap").off("click", trykSendPige);


    setTimeout(function () {
        new Audio('assets/lyde/sentmessage.mp3').play();
    }, 1000);
    $("#iphone_sprite_pige").addClass("snapchat_send");
    setTimeout(function () {
        new Audio('assets/lyde/snapchat_notification.mp3').play();
    }, 3000);
    $("#iphone_container").on("animationend", pigeOverrasket);
}

function pigeOverrasket() {
    console.log("Screenshot bliver taget")
    $("#iphone_container").off("animationend", pigeOverrasket);
    setTimeout(function () {
        new Audio('assets/lyde/overrasket.mp3').play();
    }, );

    $("#pige_container").addClass("dreng_overrasket_position");
    $("#pige_sprite").addClass("pige_overrasket");
    setTimeout(startHistoriePige, 3000);
}

function startHistoriePige() {
    console.log("startside")
    $("#baggrund").removeClass("iphone_baggrund");
    $("#iphone_container").removeClass("iphone_placering");
    $("#iphone_sprite_pige").removeClass("snapchat_send");

    $("#baggrund").addClass("trykstartside");
    $(".trykstart").on("click", startSpilPige);

}

function startSpilPige() {
    console.log("spilstarted");
    $("#pige_container").removeClass("dreng_overrasket_position");
    $("#pige_sprite").removeClass("pige_overrasket");
    $("#baggrund").removeClass("trykstartside");
    $(".trykstart").off("click", startSpil);
    $(".trykstart").hide();
    $("#baggrund").removeClass("trykstartside");


    $("#output").addClass("number_game");
    $("#hands").addClass("haandVisPige");
    $("#hands").addClass("haand");
    $("#baggrund").addClass("spilside");
    $("#time").addClass("time_animation");

    $(".haand").on("click", haandKopier);
    setTimeout(efterAnimationCountdown, 15000);
}
