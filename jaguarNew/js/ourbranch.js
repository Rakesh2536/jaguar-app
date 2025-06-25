
    let maps = {};

    function initMap() {
        document.querySelectorAll('.branch-container').forEach(branch => {
            const mapId = branch.querySelector('.map').id;

            maps[mapId] = new google.maps.Map(document.getElementById(mapId), {
                center: { lat: 17.3850, lng: 78.4867 }, // Default Hyderabad location
                zoom: 14,
                disableDefaultUI: true,
                gestureHandling: "none"
            });

            new google.maps.Marker({
                position: { lat: 17.3850, lng: 78.4867 },
                map: maps[mapId]
            });
        });

        document.querySelectorAll('.zoom-in').forEach(btn => {
            btn.addEventListener('click', () => {
                let mapId = btn.dataset.map;
                maps[mapId].setZoom(maps[mapId].getZoom() + 1);
            });
        });

        document.querySelectorAll('.zoom-out').forEach(btn => {
            btn.addEventListener('click', () => {
                let mapId = btn.dataset.map;
                maps[mapId].setZoom(maps[mapId].getZoom() - 1);
            });
        });
    }

    function navigateToMap(element) {
        const url = element.closest('.branch-container').dataset.url;
        window.open(url, "_blank");
    }
