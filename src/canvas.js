"use strict";

function Cards(suit, value, origin, type, analysis, refute) {
    this.suit = suit;
    this.origin = origin;
    this.type = type;
    this.analysis = analysis;
    this.refute = refute;
    this.value = value;

    this.coverJson() = function() {

    }
    this.switchSuit() = $(function(div, suit, lisuit) {
        switch (suit) {
            case "spades":
                suit = "&spadesuit;";
                lisuit.html(suit);
                div.addClass("spadesuit");
                break;
            case "hearts":
                suit = "&heartsuit;";
                lisuit.html(suit);
                div.addClass("heartsuit");
                break;
            case "diamonds":
                suit = "&diamondsuit;";
                lisuit.html(suit);
                div.addClass("diamondsuit");
                break;
            case "clubs":
                suit = "&clubsuit;";
                lisuit.html(suit);
                div.addClass("clubsuit");
                break;
            default:
                console.log('error,this is king');
        }
        return div, suit, lisuit
    })
    this.addCards = $(function() {
        let div = $("<div class='card'></div>");
        $("div.hand").append(div);

        let header = $("<header></header>");
        let footer = $("<footer></footer>");

        let ulsuit = $("<ul class='suit'></ul>");
        let livalue = $("<li class='value'>" + this.value + "</li>");
        let lisuit = $("<li></li>");

        div, suit, lisuit = this.switchSuit(div, suit, lisuit);

        let headul = ulsuit.append(livalue).append(lisuit);
        let footul = headul.clone(true);

        header.append(headul);
        footer.append(footul);

        let section = $("<section class='contente'></section>");

        let sectionul = $("<ul></ul>");

        let origins = $("<li class='origin'>" + this.origin + "</li>");

        let analyse = $("<li class='analysis'>" + this.analysis + "</li>");

        let refutes = $("<li class='refute'>" + this.refute + "</li>");

        sectionul.append(origins).append(analyse).append(refutes);
        section.append(sectionul);

        div.append(header).append(section).append(footer);

    })

    this.fitContent = $(function() {
        let content = $(".card .content");
        content.each(function(_, e) {
            let origin = $(e).find(".origin");
            let refute = $(e).find(".refute");
            if (origin.text().length > 24) {
                origin.css("font-size", 8);
            }
            if (refute.text().length > 24) {
                refute.css("font-size", 7);
            }
        })
    })
}

/* $.getJSON("cards.json", function(data) {
    console.log(data);
}) */
// var card = new Cards();