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
            document.title = "Blogs & Events | Collins Otieno";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

// Load and display blogs and events
function loadBlogsAndEvents() {
    fetch("blogs-events.json")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".blogs .box-container");
            let html = "";
            
            data.forEach(item => {
                html += `
                <div class="box tilt ${item.type}">
                    <div class="content">
                        <div class="tag">
                            <h3>${item.title}</h3>
                            <span class="badge">${item.type === 'blog' ? 'Blog' : 'Event'}</span>
                        </div>
                        <div class="desc">
                            <p class="date"><i class="fas fa-calendar"></i> ${item.date}</p>
                            <p>${item.description}</p>
                            <div class="btns">
                                <a href="${item.link}" class="btn" target="_blank">
                                    <i class="fas fa-${item.type === 'blog' ? 'book-open' : 'calendar-alt'}"></i> 
                                    ${item.type === 'blog' ? 'Read More' : 'View Event'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
            
            container.innerHTML = html;
            
            // Filter functionality
            $('.button-group').on('click', 'button', function () {
                $('.button-group').find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                const filterValue = $(this).attr('data-filter');
                
                if (filterValue === '*') {
                    $('.box').show();
                } else {
                    $('.box').hide();
                    $(filterValue).show();
                }
            });
        })
        .catch(error => console.error('Error loading blogs and events:', error));
}

// Initialize
loadBlogsAndEvents();