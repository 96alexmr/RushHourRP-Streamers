function displayStreamers(streamers) {
    const streamersContainer = document.getElementById("all-streamers");
    streamersContainer.innerHTML = "";

    streamers.forEach(streamer => {
        let buttonsHTML = `
            ${streamer.twitterUrl ? `<a href="${streamer.twitterUrl}" target="_blank" class="btn btn-twitter me-2 mb-2">Twitter</a>` : ''}
            ${streamer.tiktokUrl ? `<a href="${streamer.tiktokUrl}" target="_blank" class="btn btn-tiktok me-2 mb-2">TikTok</a>` : ''}
            ${streamer.youtubeUrl ? `<a href="${streamer.youtubeUrl}" target="_blank" class="btn btn-youtube me-2 mb-2">YouTube</a>` : ''}
            ${streamer.instagramUrl ? `<a href="${streamer.instagramUrl}" target="_blank" class="btn btn-instagram mb-2">Instagram</a>` : ''}
        `;

        streamersContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card bg-dark text-white text-center">
                    <div class="card-img-container">
                        <img src="${streamer.image}" class="card-img-top streamer-image" alt="${streamer.name}" data-twitch-url="${streamer.twitchUrl}">
                        <div class="live-indicator"></div>
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

    const streamerImages = document.querySelectorAll('.streamer-image');
    streamerImages.forEach(image => {
        image.addEventListener('click', () => {
            const twitchUrl = image.getAttribute('data-twitch-url');
            openTwitchPopup(twitchUrl);
        });
    });

    const iframeContainer = document.createElement('div');
    iframeContainer.style.display = 'none';

    streamers.forEach(streamer => {
        const iframe = document.createElement('iframe');
        iframe.src = streamer.twitchUrl;
        iframe.setAttribute('muted', '');
        iframe.onload = function() {
            const liveIndicator = document.querySelector(`.streamer-image[alt="${streamer.name}"] + .live-indicator`);
            if (iframe.contentDocument.body.innerHTML.includes('is offline')) {
                liveIndicator.classList.remove('live');
            } else {
                liveIndicator.classList.add('live');
            }
        };
        iframeContainer.appendChild(iframe);
    });

    document.body.appendChild(iframeContainer);
}

function openTwitchPopup(twitchUrl) {
    const popup = document.createElement('div');
    popup.classList.add('twitch-popup');
    popup.innerHTML = `
        <div class="twitch-popup-content">
            <iframe src="${twitchUrl}&autoplay=true" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
            <button class="close-btn">&times;</button>
        </div>
    `;
    document.body.appendChild(popup);

    const closeBtn = popup.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
        popup.remove();
    });
}

displayStreamers(streamers);