function displayStreamers(streamers) {
    const streamersContainer = document.getElementById("all-streamers");
    streamersContainer.innerHTML = "";

    streamers.forEach(streamer => {
        let iconLinksHTML = `
            ${streamer.twitchUrl ? `<a href="${streamer.twitchUrl}" target="_blank" class="icon-link"><i class="fab fa-twitch"></i></a>` : ''}
            ${streamer.twitterUrl ? `<a href="${streamer.twitterUrl}" target="_blank" class="icon-link"><i class="fab fa-twitter"></i></a>` : ''}
            ${streamer.tiktokUrl ? `<a href="${streamer.tiktokUrl}" target="_blank" class="icon-link"><i class="fab fa-tiktok"></i></a>` : ''}
            ${streamer.youtubeUrl ? `<a href="${streamer.youtubeUrl}" target="_blank" class="icon-link"><i class="fab fa-youtube"></i></a>` : ''}
            ${streamer.instagramUrl ? `<a href="${streamer.instagramUrl}" target="_blank" class="icon-link"><i class="fab fa-instagram"></i></a>` : ''}
        `;

        streamersContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card bg-dark text-white text-center">
                    <img src="${streamer.image}" class="card-img-top streamer-image" alt="${streamer.name}">
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title">${streamer.name}</h5>
                        <h6 class="card-subtitle mb-2">${streamer.nickname}</h6>
                        <div class="d-flex justify-content-center flex-wrap">
                            ${iconLinksHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

displayStreamers(streamers);