const API_KEY = "e86d6812f20651d4ce2f6c5c6cd35a5b";

$(document).ready(function () {
  $("#searchButton").on("click", function () {
    var artist = $("#artistInput").val();

    $.ajax({
      url: `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`,
      method: "GET",
      success: function (response) {
        displayResults(response);
      },
      error: function (error) {
        console.log("Error fetching data:", error);
      }
    });
  });

  function displayResults(data) {
    $("#resultContainer").empty();
    $("#resultCountContainer").empty();
    $("#resultCountContainer").append(
      `Showing ${data?.toptracks?.track?.length ?? 0} results `
    );
    if (data && data.toptracks && data.toptracks.track) {
      var tracks = data.toptracks.track;

      tracks.forEach(function (track) {
        var trackHtml = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <a href="${track.url}" target="_blank">${track.name}</a>
              </h5>
              <p class="card-text">Playcount: ${track.playcount}</p>
              <p class="card-text">Listeners: ${track.listeners}</p>
            </div>
          </div>
        `;

        $("#resultContainer").append(trackHtml);
      });
    } else {
      $("#resultContainer").html(
        "<p>No tracks found for the specified artist.</p>"
      );
    }
  }
});
