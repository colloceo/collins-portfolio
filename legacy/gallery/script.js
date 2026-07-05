$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Gallery | Collins Otieno";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

// Load and display gallery items
function loadGallery() {
    const container = document.querySelector(".gallery-container");
    container.classList.add('loading');
    
    fetch("gallery.json")
        .then(response => response.json())
        .then(data => {
            let html = "";
            
            data.forEach(item => {
                const imagesHtml = item.images.map(img => 
                    `<img src="${img}" alt="${item.title}" loading="lazy" onclick="openModal('${img}', '${item.title}', '${item.description}', '${item.date || ''}', '${item.location || ''}', '${item.achievements || ''}')"/>`
                ).join('');
                
                html += `
                <div class="gallery-item ${item.category}">
                    <div class="gallery-images">
                        ${imagesHtml}
                    </div>
                    <div class="gallery-details">
                        <h3>${item.title}</h3>
                        <div class="event-meta">
                            <span><i class="fas fa-calendar"></i> ${item.date}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${item.location}</span>
                        </div>
                        <p>${item.description}</p>
                        <div class="achievements">
                            <strong>Achievements:</strong>
                            ${item.achievements}
                        </div>
                    </div>
                </div>`;
            });
            
            container.innerHTML = html;
            container.classList.remove('loading');
            
            // Filter functionality
            $('.button-group').on('click', 'button', function () {
                $('.button-group').find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                const filterValue = $(this).attr('data-filter');
                
                if (filterValue === '*') {
                    $('.gallery-item').show();
                } else {
                    $('.gallery-item').hide();
                    $('.gallery-item' + filterValue).show();
                }
            });
        })
        .catch(error => {
            console.error('Error loading gallery:', error);
            container.classList.remove('loading');
            container.innerHTML = '<p style="text-align: center; color: #ff6b6b; font-size: 1.8rem; padding: 2rem;">Failed to load gallery. Please try again.</p>';
        });
}

// Modal functionality
function openModal(imageSrc, title, description, date, location, achievements) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
    
    let captionHTML = `<h3 style="color: #00d4ff; margin-bottom: 1rem;">${title}</h3>`;
    if (date) captionHTML += `<p style="color: #00d4ff; font-size: 1.4rem; margin-bottom: 0.5rem;"><i class="fas fa-calendar"></i> ${date}</p>`;
    if (location) captionHTML += `<p style="color: #00d4ff; font-size: 1.4rem; margin-bottom: 1rem;"><i class="fas fa-map-marker-alt"></i> ${location}</p>`;
    captionHTML += `<p style="margin-bottom: 1rem;">${description}</p>`;
    if (achievements) captionHTML += `<p style="color: #00d4ff; font-size: 1.3rem;"><i class="fas fa-trophy"></i> <strong>Achievements:</strong> ${achievements}</p>`;
    
    caption.innerHTML = captionHTML;
}

// Close modal
document.querySelector('.close').onclick = function() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initialize
loadGallery();