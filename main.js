// ==UserScript==
// @name         GeoFs-Ad-banner-changer
// @namespace    https://github.com/bismarck017
// @version      1.7
// @description  Adds the Fox-2 missile list to the ad area
// @author       bismarck017 & giggityohio 
// @match        https://*.geo-fs.com/geofs.php*
// @grant        none
// ==/UserScript==

(function () {
    function initStyles () {
        $(`<style>
            .QTQ0W80gpFw {
                width: 300px;
                max-width: 300px;
                min-width: 160px;
                margin-bottom: 36px;
                background-color: white;
                display: flex;
                align-items: center;
            }
            @media screen and (max-width: 1600px) {
                .QTQ0W80gpFw {
                    width: 160px;
                }
            }
            @media screen and (orientation: portrait) {
                .QTQ0W80gpFw {
                    width: 100% !important;
                    max-width: 100% !important;
                    height: 20%;
                    min-height: 160px;
                }
            }
        <\style>`).appendTo("head");
    }
    const listHTML = `
        <div style="font-family: sans-serif; font-size: 11px; padding: 20px;">
            <h6>Fox-2 (flares):</h6>
            <ul>
                <li>AIM-9 Sidewinder</li>
                <li>ASRAAM / AIM-132</li>
                <li>IRIS-T</li>
                <li>AAM-3</li>
                <li>Bozdoğan / Merlin</li>
                <li>Rafael Python 5</li>
                <li>Matra Magic II</li>
                <li>Matra R.510</li>
                <li>Matra R.530</li>
                <li>MAA-1(A/B) Piranha</li>
                <li>MBDA MICA IR</li>
                <li>PL-9</li>
                <li>R-60 / AA-8 Aphid</li>
                <li>R-27T / AA-10T Alamo</li>
                <li>Sky Sword 1 / TC-1</li>
            </ul>
        </div>
    `;
    function ensureTargetVisible() {
        const targetDiv = $('.geofs-refreshTarget');
        const targetContainer = $('.geofs-adbanner').removeClass().addClass("QTQ0W80gpFw");
        const adBlock = $('.ads.adsbox.adBlock');
        adBlock && adBlock.hide();
        targetDiv.length ? (targetDiv.show(), targetDiv.html(listHTML)) : $("body").append($("<div/>").addClass('QTQ0W80gpFw').append($("<div/>").html(listHTML).addClass("geofs-refreshTarget").show()));
    }
    ;
    function toggleBanner () {
        geofs.adbannerOn ? (clearInterval(geofs.adbannerInterval), $(".QTQ0W80gpFw").hide(), geofs.adbannerOn = !1) : (setInterval(ensureTargetVisible, 2000), $(".QTQ0W80gpFw").show(), geofs.adbannerOn = !0);
    }
    ;
    window.executeOnEventDone("geofsInitialized", function () {
        $(".geofs-ui-bottom").append($("<button/>").text("LIST").click(toggleBanner).attr("style", "float: right;").addClass("mdl-button"));
        ensureTargetVisible();
        geofs.adbannerInterval = setInterval(ensureTargetVisible, 2000);
        initStyles();
        geofs.adbannerOn = !0;
    });
})();
