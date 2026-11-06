document.getElementById('year')?.replaceChildren(document.createTextNode(new Date().getFullYear()));

if (window.location.protocol === 'file:') {
  document.querySelectorAll('.campaign-video[data-video-id]').forEach((video) => {
    const videoId = video.dataset.videoId;
    const videoTitle = video.dataset.videoTitle || 'Launch film';
    const link = document.createElement('a');
    const image = document.createElement('img');
    const label = document.createElement('span');

    link.className = 'campaign-video-fallback';
    link.href = `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Watch ${videoTitle} on YouTube`);

    image.src = `https://i.ytimg.com/vi/${encodeURIComponent(videoId)}/hqdefault.jpg`;
    image.alt = '';
    label.textContent = 'Watch on YouTube';
    link.append(image, label);
    video.replaceChildren(link);
  });
}
