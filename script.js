document.addEventListener('DOMContentLoaded', () => {
    
  
  const tracks = [
      { // Назва пісні
        name: "Комбат Сатана", 
        // Імя автора
        artist: "Benito Eugenio", 
        // Шлях до файлу
        src: "music/Benito_Eugenio Combat_Satana_(Ukrainian_Folk_Song_by_SunoAI).mp3", 
        // Шлях до обкладинки
        art: "artworks/Combat_Satana.jpg" },
//наступна пісня
      { 
        name: "Benito Style", 
        artist: "Benito Eugenio", 
        src: "music/Benito Style.mp3", 
        art: "artworks/Benito Eugenio - Benito Style.jpg" },
//наступна пісня
      { 
        name: "Credo Benito Eugenio", 
        artist: "Benito Eugenio", 
        src: "music/Credo_Benito_Eugenio.mp3", 
        art: "artworks/Credo_Benito_Eugenio.jpg" },
//наступна пісня
      { 
        name: "Systemy Abstrakcii", 
        artist: "Benito Eugenio", 
        src: "music/Systemy_Abstrakcii.mp3",  
        art: "artworks/Systemy_Abstrakcii.jpg" },
//наступна пісня
      { 
        name: "Stal_Mitsna_Kruta", 
        artist: "Benito Eugenio", 
        src: "music/Stal_Mitsna_Kruta.mp3", 
        art: "artworks/Stal_Mitsna_Kruta.jpg" },
//наступна пісня

      { 
        name: "Manifest", 
        artist: "Benito Eugenio", 
        src: "music/manifest.mp3", 
        art: "artworks/manifest.jpg" },
//наступна пісня
      { 
        name: "Custode della Luce", 
        artist: "Benito Eugenio", 
        src: "music/Custode_della_Luce.mp3", 
        art: "artworks/Custode_della_Luce.jpg" },
//наступна пісня
      { 
        name: "Dobrota Ne Slabkist", 
        artist: "Benito Eugenio", 
        src: "music/Dobrota_Ne_Slabkist.mp3", 
        art: "artworks/Dobrota_Ne_Slabkist.jpg" },
//наступна пісня
      { 
        name: "Masks and Scars", 
        artist: "Benito Eugenio", 
        src: "music/Masks_and_Scars.mp3", 
        art: "artworks/Masks_and_Scars.jpg" },
//наступна пісня  
      { 
        name: "Cherkassy", 
        artist: "Benito Eugenio", 
        src: "music/Cherkassy.mp3", 
        art: "artworks/Cherkassy.jpg" },
      //наступна пісня  
      { 
        name: "Skromnyi Vilnyiy", 
        artist: "Benito Eugenio", 
        src: "music/Skromnyi_Vilnyiy.mp3", 
        art: "artworks/Skromnyi_Vilnyiy.jpg" },
      //наступна пісня  
      { 
        name: "Brat", 
        artist: "Benito Eugenio", 
        src: "music/Brat.mp3", 
        art: "artworks/Brat.jpg" },
      //наступна пісня  
      { 
        name: "Dity Viiny", 
        artist: "Benito Eugenio", 
        src: "music/Dity_Viiny.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Mama Svitla Beregynia", 
        artist: "Benito Eugenio", 
        src: "music/Mama_Svitla_Beregynia.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Code Of Nation", 
        artist: "Benito Eugenio", 
        src: "music/Code_Of_Nation.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Igor Ne Skorena Ptashka", 
        artist: "Benito Eugenio", 
        src: "music/Igor_Ne_Skorena_Ptashka.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Arina Zirka Scho Siaye", 
        artist: "Benito Eugenio", 
        src: "music/Arina_Zirka_Scho_siaye.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Zhyttevyi Shlyah", 
        artist: "Benito Eugenio", 
        src: "music/Zhyttevyi_Shlyah.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Dovro_v_Kredyt", 
        artist: "Benito Eugenio", 
        src: "music/Dovro_v_Kredyt.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Den Vsesvitnogo Durnya", 
        artist: "Benito Eugenio", 
        src: "music/Den_Vsesvitnogo_Durnya.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Engineer World", 
        artist: "Benito Eugenio", 
        src: "music/Engineer_World.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Dedlany", 
        artist: "Benito Eugenio", 
        src: "music/Dedlany.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Lilliya", 
        artist: "Benito Eugenio", 
        src: "music/Lilliya.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Svit Movchit Chety Ne Hoche", 
        artist: "Benito Eugenio", 
        src: "music/Svit_movchit_chety_ne_hoche.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Gibrydna Kapitulyatsiya", 
        artist: "Benito Eugenio", 
        src: "music/Gibrydna_Kapitulyatsiya.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Braterska Lybov", 
        artist: "Benito Eugenio", 
        src: "music/Braterska_Lybov.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Bratuha Flow", 
        artist: "Benito Eugenio", 
        src: "music/Bratuha_Flow.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Vilnomu Rodu Ne Zlamaty Korinnya", 
        artist: "Benito Eugenio", 
        src: "music/Vilnomu_Rodu_Ne_Zlamaty_Korinnya.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Ukrainian Hearts Burning So Bright", 
        artist: "Benito Eugenio", 
        src: "music/Ukrainian_hearts_burning_so_bright.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Nikoly Nebudemo Bratamy", 
        artist: "Benito Eugenio", 
        src: "music/Nikoly_nebudemo_Bratamy.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Den Durnya Nastav Gangsta Rap", 
        artist: "Benito Eugenio", 
        src: "music/Den_Durnya_Nastav_Gangsta_Rap.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "9 Zirok", 
        artist: "Benito Eugenio", 
        src: "music/9_zirok.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "Complexum Est Simplex Non Elaboratum", 
        artist: "Benito Eugenio", 
        src: "music/Complexum_Est_Simplex_Non_Elaboratum.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      { 
        name: "You Kat is it the Terroristic", 
        artist: "Benito Eugenio", 
        src: "music/You_Kat_is_it_the_Terroristic.mp3", 
        art: "artworks/image_free.jpg" },
      //наступна пісня  
      
        
    ];

    /* Додаткові треки, яких не було у масиві tracks */
    const autoFiles = [
        "music/BENITO EUGENIO - _ПРАДАВНІЙ ЗАПОВІД_.mp3",
        "music/BENITO EUGENIO - _КОД НАЦІЇ 3.0_.mp3",
        "music/BENITO EUGENIO - КОДЕКС ВУЛИЦЬ (Ukrainian Rap) (Vocals).mp3",
        "music/АКАПЕЛЛА_BENITO EUGENIO - КОДЕКС ВУЛИЦЬ (Ukrainian Rap) (Vocals).mp3",
        "music/13_BENITO EUGENIO - ТЦК-ШНИЙ ПАТРУЛЬ 2.0 .mp3",
        "music/12_BENITO EUGENIO - КОДЕКС ВУЛИЦЬ (Ukrainian Rap).mp3",
        "music/11_BENITO EUGENIO - КОДЕКС 2.0.mp3",
        "music/10_BENITO EUGENIO - MANIFEST.mp3",
        "music/09_BENITO EUGENIO - ДОСИТЬ МЕНЕ ЛАМАТИ.mp3",
        "music/08_BENITO EUGENIO - Слово це зброя.mp3",
        "music/07_BENITO EUGENIO - НІЧНИЙ ЗВІР.mp3",
        "music/06_BENITO EUGENIO - КАТАРСИС.mp3",
        "music/05_BENITO EUGENIO - _Чорний Записник_.mp3",
        "music/04_BENITO EUGENIO - _СТАЛЕВИЙ ПУЛЬС_.mp3",
        "music/03_BENITO EUGENIO - Кредит _Життя__.mp3",
        "music/02_BENITO EUGENIO - Разводняк _Життя_.mp3",
        "music/01_BENITO EUGENIO - _Нічний бетон_.mp3",
        "music/BENITO EUGENIO - ГОРЮ.mp3",
        "music/BENITO EUGENIO - Ой Мама.mp3",
        "music/BENITO EUGENIO - СПОВІДЬ (1).mp3",
        "music/BENITO EUGENIO - СПОВІДЬ.mp3",
        "music/BENITO EUGENIO - СТИРАЮ ЯК ДИМ ВІД ПІРРОНКИ.mp3",
        "music/BENITO EUGENIO - Слово це зброя (2).mp3",
        "music/BENITO EUGENIO - Слово це зброя (1).mp3",
        "music/BENITO EUGENIO - Слово це зброя.mp3",
        "music/BENITO EUGENIO - MANIFEST (2).mp3",
        "music/BENITO EUGENIO - MANIFEST (1).mp3",
        "music/BENITO EUGENIO - КОДЕКС 2.0 (Ukrainian Rap).mp3",
        "music/BENITO EUGENIO - КОДЕКС 3.0.mp3",
        "music/BENITO EUGENIO - КОДЕКС 2.0 (1).mp3",
        "music/BENITO EUGENIO - КОДЕКС 2.0 (2).mp3",
        "music/BENITO EUGENIO - MANIFEST.mp3",
        "music/BENITO EUGENIO - КОДЕКС ВУЛИЦЬ (Ukrainian Rap).mp3",
        "music/063_Benito_Eugenio_-_Ni4_ne_dlya_zgrai.mp3",
        "music/track_1.mp3",
        "music/Benito Eugenio - _ТЦК_ Бізнес на гробах_ (Ukrainian Folk Song by SunoAI).mp3",
        "music/Benito Eugenio - _Мама берегиня світла_ (Ukrainian Folk Song by SunoAI).mp3",
        "music/062. - Benito Eugenio – _Дай, Боже, сили нашим солдатам_.mp3",
        "music/Benito Eugenio - _MANIFEST_  (Ukrainian Folk Song by SunoAI).mp3"
    ];

    const existingSrcs = new Set(tracks.map(t => t.src));
    autoFiles.forEach(src => {
        if (!existingSrcs.has(src)) {
            tracks.push({
                name: src.split('/').pop().replace('.mp3', ''),
                artist: "Benito Eugenio",
                src,
                art: "artworks/image_free.jpg"
            });
        }
    });

    let currentIndex = 0;
    const player = document.getElementById("audioPlayer");
    const playerUi = document.querySelector(".player-ui");
    const coverArt = document.getElementById("coverArt");
    const trackTitle = document.getElementById("currentTrack");
    const trackArtist = document.getElementById("currentArtist");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playlistElement = document.getElementById("playlist");
    const progressBar = document.getElementById("progressBar");
    const currentTimeEl = document.getElementById("currentTime");
    const totalDurationEl = document.getElementById("totalDuration");
    const volumeSlider = document.getElementById("volumeSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const mainMenu = document.getElementById('mainMenu');
    const playerMenu = document.getElementById('playerMenu');
    const playerBtn = mainMenu.querySelector('.btn');

    const playIcon = `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>`;
    const pauseIcon = `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>`;

    function showPlayer() {
      mainMenu.classList.add('hidden');
      playerMenu.classList.remove('hidden');
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function togglePlayPause() {
      if (!player.src || player.src === window.location.href) return;
      if (player.paused) {
        player.play();
        playPauseBtn.innerHTML = pauseIcon;
      } else {
        player.pause();
        playPauseBtn.innerHTML = playIcon;
      }
    }

    function playNextTrack() {
      currentIndex = (currentIndex + 1) % tracks.length;
      loadTrack(true);
    }

    function playPrevTrack() {
      currentIndex = (currentIndex - 1 + tracks.length) % tracks.length;
      loadTrack(true);
    }

    function selectTrack(index) {
      currentIndex = index;
      loadTrack(true);
    }
    
    function loadTrack(autoplay = false) {
      const track = tracks[currentIndex];
      player.src = track.src;
      trackTitle.textContent = track.name;
      trackArtist.textContent = track.artist;
      // увімкнути/вимкнути анімацію прокрутки залежно від довжини
      const wrapper = trackTitle.parentElement;
      if (trackTitle.scrollWidth <= wrapper.clientWidth) {
        trackTitle.style.animation = 'none';
      } else {
        trackTitle.style.animation = '';
      }
      // показуємо обкладинку лише якщо вона не placeholder
      if (track.art && !track.art.includes('image_free.jpg')) {
        coverArt.src = track.art;
        coverArt.style.display = 'block';
        playerUi.style.backgroundImage = `url('${track.art}')`;
      } else {
        coverArt.style.display = 'none';
        playerUi.style.backgroundImage = 'none';
      }
      
      updatePlaylistUI();

      if (autoplay) {
        player.play();
        playPauseBtn.innerHTML = pauseIcon;
      } else {
        playPauseBtn.innerHTML = playIcon;
      }
    }

    function updateProgress() {
        if(player.duration) {
            progressBar.value = player.currentTime;
            currentTimeEl.textContent = formatTime(player.currentTime);
        }
    }

    function updateTotalDuration() {
        if(player.duration) {
            progressBar.max = player.duration;
            totalDurationEl.textContent = formatTime(player.duration);
        }
    }

    function seek() {
        player.currentTime = progressBar.value;
    }

    function adjustVolume(e) {
        player.volume = e.target.value;
    }
    
    function renderPlaylist() {
        playlistElement.innerHTML = '';
        tracks.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = 'playlist-item';
            item.addEventListener('click', () => selectTrack(index));
            item.innerHTML = `
              <div>
                <div class="playlist-track-name">${track.name}</div>
                <div class="playlist-track-artist" style="font-size:12px; color: var(--text-color-light)">${track.artist}</div>
              </div>
            `;
            playlistElement.appendChild(item);
        });
        updatePlaylistUI();
    }

    function updatePlaylistUI() {
        const items = playlistElement.querySelectorAll('.playlist-item');
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    playerBtn.addEventListener('click', showPlayer);
    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', playPrevTrack);
    nextBtn.addEventListener('click', playNextTrack);
    
    player.addEventListener('timeupdate', updateProgress);
    player.addEventListener('loadedmetadata', updateTotalDuration);
    player.addEventListener('ended', playNextTrack);
    
    progressBar.addEventListener('input', seek);
    volumeSlider.addEventListener('input', adjustVolume);

    renderPlaylist();
    loadTrack(false);

    // Mobile optimizations
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Better touch feedback for player controls
    const controls = document.querySelectorAll('.controls button, .btn');
    controls.forEach(control => {
        control.addEventListener('touchstart', function() {
            this.style.transform = this.style.transform.includes('scale') ? 
                this.style.transform : this.style.transform + ' scale(0.9)';
        }, { passive: true });
        
        control.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = this.style.transform.replace(' scale(0.9)', '');
            }, 100);
        }, { passive: true });
    });

    // Optimize progress bar for touch
    if (progressBar) {
        progressBar.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent default to avoid conflicts
        });
    }

    // Auto-adjust player UI height on mobile
    function adjustPlayerHeight() {
        const playerUI = document.querySelector('.player-ui');
        if (playerUI && window.innerWidth <= 480) {
            const vh = window.innerHeight * 0.01;
            playerUI.style.height = `${vh * 95}px`;
        }
    }

    window.addEventListener('resize', adjustPlayerHeight);
    window.addEventListener('orientationchange', adjustPlayerHeight);
    adjustPlayerHeight(); // Initial call
}); 