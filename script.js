let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.3617, lng: 126.5292 }, // 제주도 중심 좌표
        zoom: 10,
    });
}

document.getElementById("search-button").addEventListener("click", function() {
    const searchQuery = document.getElementById("search-box").value;
    // 검색 기능 구현: 여기에 Google Maps 검색 API 연동 코드 추가
});

// 추가적으로, 지도에 마커를 추가하고 여행지 정보를 표시하는 기능을 구현할 필요가 있습니다.
