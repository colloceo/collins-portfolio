$(document).ready(function () {
    // Toggle navbar on menu click
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Handle scroll events
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Show scroll-to-top button
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy for active navbar links
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // EmailJS for contact form submission
    $("#contact-form").submit(function (event) {
        emailjs.init("user_mLoVBJ2RYpRC8ALnc");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });

    // Change favicon and title on visibility change
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Collins Otieno";
            $("#favicon").attr("href", "assets/images/favicon.png");
        } else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

    // Typed.js effect for typing animation
var typed = new Typed(".typing-text", {
        strings: [
            "frontend development", 
            "backend development",
        ],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });

    // Fetch skills and projects data
    async function fetchData(type = "skills") {
        let response;
        if (type === "skills") {
            response = await fetch("skills.json");
        } else {
            response = await fetch("./projects/projects.json");
        }
        const data = await response.json();
        return data;
    }

    // Display skills on the page
    function showSkills(skills) {
        let skillsContainer = document.getElementById("skillsContainer");
        let skillHTML = "";
        skills.forEach(skill => {
            skillHTML += `
            <div class="bar">
                <div class="info">
                    <img src="${skill.icon}" alt="skill" />
                    <span>${skill.name}</span>
                </div>
            </div>`;
        });
        skillsContainer.innerHTML = skillHTML;
    }

    // Display projects on the page
    function showProjects(projects) {
        let projectsContainer = document.querySelector("#work .box-container");
        let projectHTML = "";
        projects.slice(0, 10).filter(project => project.category !== "android").forEach(project => {
            projectHTML += `
            <div class="box tilt">
                <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="${project.name} project" />
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
 <div class="btns">
                            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        projectsContainer.innerHTML = projectHTML;

        // Initialize tilt effect on project boxes
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
        });

        // Scroll reveal animation for projects
        const srtop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1000,
            reset: true
        });

        srtop.reveal('.work .box', { interval: 200 });
    }

    // Fetch and display skills and projects
    fetchData().then(data => {
        showSkills(data);
    });

    fetchData("projects").then(data => {
        showProjects(data);
    });

    // Disable developer tools access
    document.onkeydown = function (e) {
        if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && [73, 67, 74].includes(e.keyCode)) || (e.ctrlKey && e.keyCode == 85)) {
            return false;
        }
    };

    // Start Tawk.to live chat
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6741e0de4304e3196ae78ce8/1idclcq25';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
});

