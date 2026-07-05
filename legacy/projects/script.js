$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

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
            document.title = "Projects | Portfolio Collins Otieno";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

// Load and display projects
function loadProjects() {
    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            const container = document.querySelector(".work .box-container");
            let html = "";
            
            projects.forEach(project => {
                html += `
                <div class="project-card ${project.category}">
                    <div class="card-content">
                        <div class="project-header">
                            <h3>${project.name}</h3>
                        </div>
                        <p class="project-description">${project.desc}</p>
                        <div class="card-actions">
                            <a href="${project.links.view}" class="btn-primary" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                            <a href="${project.links.code}" class="btn-secondary" target="_blank">
                                <i class="fab fa-github"></i> Code
                            </a>
                        </div>
                    </div>
                </div>`;
            });
            
            container.innerHTML = html;
            
            // Simple filter functionality
            $('.button-group').on('click', 'button', function () {
                $('.button-group').find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
                const filterValue = $(this).attr('data-filter');
                
                if (filterValue === '*') {
                    $('.project-card').show();
                } else {
                    $('.project-card').hide();
                    $(filterValue).show();
                }
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}

// Initialize
loadProjects();

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}