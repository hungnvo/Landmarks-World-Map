function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        //30.090324598415837, -11.513813205014705
        center: { lat: 30.09, lng: -11.51 },
        zoom: 3,
        mapId: '2734064dee1669'
    });

    const marker = new google.maps.Marker({
        //43.72346373712429, 10.396511169310484
        position: { lat: 43.72, lng: 10.39 },
        map,
        title: "Leaning Tower of Pisa",
        icon: {
            url: "images/001-pisa.svg",
            scaledSize: new google.maps.Size(30, 30)
        },
        animation: google.maps.Animation.DROP
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Leaning Tower of Pisa</h1>' +
        '<div id="bodyContent">' +
        "<p>The <b>Leaning Tower of Pisa</b> or simply the <b>Tower of Pisa</b> is the campanile, or freestanding bell tower, " +
        "of the cathedral of the Italian city of Pisa, " +
        "known worldwide for its nearly four-degree lean, the result of an unstable foundation. The tower is situated behind the " +
        "<b>Pisa Cathedral</b> and is the third-oldest structure in the city's Cathedral Square" +
        "(Piazza del Duomo), after the cathedral and the Pisa Baptistry</p>" +
        '<p>Attribution: Leaning Tower of Pisa, <a href="https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa" target="_blank">' +
        "https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa</a> " +
        "</div>" +
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
}

