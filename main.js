const targetDiv = document.querySelector('.geofs-refreshTarget');

if (targetDiv) {
    targetDiv.style.display = "block";
    targetDiv.style.visibility = "visible";

    targetDiv.innerHTML = `
        <div style="font-family: sans-serif; font-size: 11px; padding: 20px;">
            <h6>Fox-2:</h6>
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
                <li>MAA-1A Piranha</li>
                <li>MAA-1B Piranha</li>
                <li>MBDA MICA IR</li>
                <li>PL-9</li>
                <li>R-60 / AA-8 Aphid</li>
                <li>R-27T / AA-10T Alamo</li>
                <li>Sky Sword 1 / TC-1</li>
            </ul>
        </div>
    `;
} else {
    console.error("Element with class 'geofs-refreshTarget' not found.");
}
