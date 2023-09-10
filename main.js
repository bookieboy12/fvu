      import CONFIG from '/assets/js/config.js';
      document.addEventListener("DOMContentLoaded", () => { 
        fetch(CONFIG.api.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key': CONFIG.api.key
            }
        })
              .then(response => response.json())
              .then(data => {
                data.links = data.links.filter(link => link && link.date);
                data.links.sort((a, b) => new Date(b.date) - new Date(a.date));
        
                let daysAgo = 0;
                let foundLinks = [];
                while (daysAgo < 7 && foundLinks.length === 0) {  
                    const checkDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000); 
                    const dateString = checkDate.toISOString().split('T')[0];
                    foundLinks = data.links.filter(link => link.date.startsWith(dateString));
                    daysAgo++;
                }
                
        
                let displayText;
                switch (daysAgo - 1) {
                    case 0:
                        displayText = "Today's Leaks";
                        break;
                    case 1:
                        displayText = "Yesterday's Leaks";
                        break;
                    default:
                        displayText = `${daysAgo - 1} Days Ago Leaks`;
                        break;
                }
        
                document.title = CONFIG.siteName;
                document.querySelector('#today_leaks').textContent = `${displayText} (${foundLinks.length})`;
                
                const otherLinks = (foundLinks.length > 0) ? 
                                  data.links.filter(link => link.date !== foundLinks[0].date) : 
                                  [...data.links]; 
                const allLinks = data.links;
                  const randomBannerAdIndex = Math.floor(Math.random() * CONFIG.bannerAds.length);
                  const selectedBannerAd = CONFIG.bannerAds[randomBannerAdIndex];
                  const bannerContainer = document.getElementById('banner1');

                  bannerContainer.innerHTML = `
                        <a href="${selectedBannerAd.link}">
                            <img src="${selectedBannerAd.image}" alt="Banner Ad" class="ms_user_img">
                        </a>
                    `;



                    document.querySelector('#today_leaks').textContent = `${displayText} (${foundLinks.length})`;

                  document.querySelector('#all_leaks').textContent = `All Leaks (${otherLinks.length})`;
                  const todayContainer = document.querySelector('.top_album_slider .swiper-wrapper');
                  todayContainer.innerHTML = foundLinks.map(link => generateLinkHtml(link)).join('');
                  const todaySwiper = new Swiper('.top_album_slider .swiper-container', {
                      navigation: {
                          nextEl: '.swiper-button-next1',
                          prevEl: '.swiper-button-prev1',
                      },
                      slidesPerView: 6,
                      spaceBetween: 10,
                      loop: true,
                      breakpoints: {
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        }

                    }
                  });
                  const otherContainer = document.querySelector(
                      '.recommended_album_slider .swiper-wrapper2');
                  let loaded = 48;
                  otherContainer.innerHTML = otherLinks.slice(0, loaded).map((link, index) =>
                      generateLinkHtmlWithAds(link, index)
                  ).join('');

                  const recommendedSwiper = new Swiper('.recommended_album_slider .swiper-container', {
                      slidesPerView: 3,
                      spaceBetween: 10,
                      loop: true
                  });


                  document.getElementById('searchInput').addEventListener('keyup', function () {
                      const query = this.value.toLowerCase();
                      const otherContainer = document.querySelector(
                          '.recommended_album_slider .swiper-wrapper2');

                      if (query.trim() === "") { 
                          otherContainer.innerHTML = otherLinks.slice(0, loaded).map(link =>
                              generateLinkHtmlWithAds(link)).join('');
                      } else {
                          const filteredLinks = allLinks.filter(link =>
                              link.title.toLowerCase().includes(query)
                          );
                          otherContainer.innerHTML = filteredLinks.map(link =>
                              generateLinkHtmlWithAds(link)).join('');
                      }

                      recommendedSwiper
                          .update();
                  });

                  const loadMoreButton = document.createElement('button');
                  loadMoreButton.textContent = 'Load More';
                  loadMoreButton.className = 'load-more';
                  loadMoreButton.addEventListener('click', () => {
                      loaded += 48;
                      otherContainer.innerHTML += otherLinks.slice(loaded - 48, loaded).map(
                          link => generateLinkHtmlWithAds(link)).join('');
                      recommendedSwiper.update();
                  });
                  document.querySelector('.recommended_album_slider').appendChild(loadMoreButton);
              });
      });

      function copyToClipboard(password) {
        if (!navigator.clipboard) {
            Toastify({
                text: "Clipboard API not supported. Please manually copy the password.",
                duration: 3000, 
                close: true,
                gravity: "bottom",
                position: 'center', 
                backgroundColor: "linear-gradient(to right, #F44336, #E57373)",
                stopOnFocus: true, 
            }).showToast();
            ``
            
            return;
        }
    
        navigator.clipboard.writeText(password).then(function() {
            Toastify({
                text: "Password copied to clipboard!",
                duration: 3000, 
                close: true,
                gravity: "bottom",
                position: 'center',
                backgroundColor: "linear-gradient(to right, #4CAF50, #81C784)", 
                stopOnFocus: true, 
            }).showToast();
        }).catch(function(err) {
            Toastify({
                text: 'Error in copying password: ' + err, 
                duration: 3000, 
                close: true,
                gravity: "bottom", 
                position: 'center',
                backgroundColor: "linear-gradient(to right, #F44336, #E57373)", 
                stopOnFocus: true,
            }).showToast();
        });
    }
    

      function formatDate(dateString) {
          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          const date = new Date(dateString);

          const day = String(date.getDate()).padStart(2, '0');
          const month = months[date.getMonth()];
          const year = date.getFullYear();

          return `${day}. ${month} ${year}`;
      }


      document.addEventListener("DOMContentLoaded", () => {
        document.body.addEventListener("click", function(event) {
            let targetElement = event.target;
    
            if (targetElement.classList.contains("fa-copy")) {
                targetElement = targetElement.parentElement; 
            }
    
            if (targetElement && targetElement.classList.contains("copy-button")) {
                const passwordElement = targetElement.previousElementSibling;
                if (passwordElement) {
                    const passwordText = passwordElement.textContent;
                    copyToClipboard(passwordText);

                    
                    
                }
            }
        });
    });
    
    


      function generateLinkHtml(link) {
          return `
        <div class="swiper-slide">
            <div class="slider_cbox slider_artist_box text-center">
                <div class="slider_cimgbox slider_artist_imgbox">
                    <img src="${link.photo_link}" alt="artist" class="img-fluid" style="width: 220px; height: 240px;">
                </div>
                <div class="slider_ctext slider_artist_text">
                    <a class="slider_ctitle slider_artist_ttl" href="${link.monetized_link}" target="_blank" rel="noopener noreferrer">${link.title}</a>
                    <p class="slider_cdescription slider_artist_des">${formatDate(link.date)}</p>
                  <div class="password-container">
                        <p class="slider_cdescription slider_artist_des password">${link.password}</p>
                        <button class="copy-button copy-button-style" data-password="${link.password}"><i class="fa fa-copy"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
      }


      function generateLinkHtmlOthers(link) {
        return `
            <div class="slider_artist_box artist-box">
                <div class="slider_cimgbox slider_artist_imgbox">
                    <img src="${link.photo_link}" alt="artist" class="img-fluid" style="height:270px;">
                </div>
                <div class="slider_ctext slider_artist_text">
                    <a class="slider_ctitle slider_artist_ttl" href="${link.monetized_link}" target="_blank" rel="noopener noreferrer">${link.title}</a>
                    <p class="slider_cdescription slider_artist_des">${formatDate(link.date)}</p>
                    <div class="password-container">
                        <p class="slider_cdescription slider_artist_des password">${link.password}</p>
                        <button class="copy-button copy-button-style" data-password="${link.password}"><i class="fa fa-copy"></i></button>
                    </div>
                </div>
            </div>
        `;
    }
    
    
    
    


    
    




      function generateLinkHtmlWithAds(link, index) {
          const baseHtml = generateLinkHtmlOthers(link);

          const randomValue = Math.random();
          const adThreshold = 0.20;

          if (randomValue < adThreshold && index % 5 !== 0) {
              const adIndex = Math.floor(Math.random() * CONFIG.ads.length);
              return baseHtml + generateAdHtml(CONFIG.ads[adIndex]);
          }

          return baseHtml;
      }



      function generateAdHtml(ad) {
          if (!ad) return '';

          return `
        <div class="slider_artist_box artist-box">
                <div class="slider_cimgbox slider_artist_imgbox">
                    <img src="${ad.imageUrl}" alt="${ad.title}" class="img-fluid" style="width:240px; height:270px;">
                </div>
                <div class="slider_ctext slider_artist_text">
                    <a class="slider_ctitle slider_artist_ttl" href="${ad.url}" target="_blank" rel="noopener noreferrer">${ad.title}</a>
                    <p class="slider_cdescription slider_artist_des">${ad.description}</p>
                </div>
            </div>
    `;
      }