function displayStreamers(streamers) {
    const streamersContainer = document.getElementById("all-streamers");
    streamersContainer.innerHTML = "";
    
    streamers.forEach(streamer => {
        let buttonsHTML = `
            ${streamer.twitchUrl ? `<a href="${streamer.twitchUrl}" target="_blank" class="btn btn-primary me-2 mb-2">View Twitch</a>` : ''}
            ${streamer.twitterUrl ? `<a href="${streamer.twitterUrl}" target="_blank" class="btn btn-twitter me-2 mb-2">View Twitter</a>` : ''}
            ${streamer.tiktokUrl ? `<a href="${streamer.tiktokUrl}" target="_blank" class="btn btn-tiktok me-2 mb-2">View TikTok</a>` : ''}
            ${streamer.youtubeUrl ? `<a href="${streamer.youtubeUrl}" target="_blank" class="btn btn-youtube me-2 mb-2">View YouTube</a>` : ''}
            ${streamer.instagramUrl ? `<a href="${streamer.instagramUrl}" target="_blank" class="btn btn-instagram mb-2">View Instagram</a>` : ''}
        `;
        
        streamersContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card bg-dark text-white text-center">
                    <div class="card-img-container">
                        <img src="${streamer.image}" class="card-img-top" alt="${streamer.name}">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-center align-items-center">
                        <h5 class="card-title">${streamer.name}</h5>
                        <h6 class="card-subtitle mb-2">(${streamer.nickname})</h6>
                        <div class="d-flex justify-content-center flex-wrap">
                            ${buttonsHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

displayStreamers(streamers);