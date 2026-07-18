
// // Mobile Navigation


// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });


// // Animated Counter


// const counters = document.querySelectorAll(".counter");

// const observer = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {

//         if(entry.isIntersecting){

//             const counter = entry.target;

//             const target = +counter.dataset.target;

//             let current = 0;

//             const increment = target / 80;

//             const updateCounter = () => {

//                 current += increment;

//                 if(current < target){

//                     counter.innerText = Math.ceil(current);

//                     requestAnimationFrame(updateCounter);

//                 }else{

//                     if(counter.classList.contains("decimal")){

//                         counter.innerText = (target / 10).toFixed(1);

//                     }else{

//                         counter.innerText = target + "+";

//                     }

//                 }

//             };

//             updateCounter();

//             observer.unobserve(counter);

//         }

//     });

// });

// counters.forEach(counter => observer.observe(counter));


// // SKILLS

// // ======================================
// // Skill Bar Animation
// // ======================================

// const skillBars = document.querySelectorAll(".progress-bar");

// const skillObserver = new IntersectionObserver((entries, observer) => {

//     entries.forEach(entry => {

//         if(entry.isIntersecting){

//             const bar = entry.target;

//             bar.style.width = bar.dataset.width;

//             observer.unobserve(bar);

//         }

//     });

// },{
//     threshold:0.3
// });

// skillBars.forEach(bar => {

//     skillObserver.observe(bar);

// });


// // ======================================
// // Percentage Counter
// // ======================================

// const percentages = document.querySelectorAll(".percent");

// const percentObserver = new IntersectionObserver((entries) => {

//     entries.forEach(entry => {

//         if(entry.isIntersecting){

//             const element = entry.target;

//             const target = +element.dataset.percent;

//             let current = 0;

//             const timer = setInterval(() => {

//                 if(current >= target){

//                     clearInterval(timer);

//                 }else{

//                     current++;

//                     element.innerText = current + "%";

//                 }

//             },15);

//             percentObserver.unobserve(element);

//         }

//     });

// });

// percentages.forEach(item => {

//     percentObserver.observe(item);

// });



// // ======================================
// // Hobby Cards Reveal Animation
// // ======================================

// const hobbyCards = document.querySelectorAll(".hobby-card");

// const hobbyObserver = new IntersectionObserver((entries, observer) => {

//     entries.forEach(entry => {

//         if(entry.isIntersecting){

//             entry.target.classList.add("show");

//             observer.unobserve(entry.target);

//         }

//     });

// },{
//     threshold:0.2
// });

// hobbyCards.forEach(card => {

//     hobbyObserver.observe(card);

// });



// // ======================================
// // Quote Animation
// // ======================================

// const quoteBox = document.querySelector(".quote-box");

// const quoteObserver = new IntersectionObserver((entries, observer)=>{

//     entries.forEach(entry=>{

//         if(entry.isIntersecting){

//             entry.target.classList.add("show");

//             observer.unobserve(entry.target);

//         }

//     });

// },{
//     threshold:0.3
// });

// quoteObserver.observe(quoteBox);

// // ======================================
// // Project Reveal Animation
// // ======================================

// const projectCards = document.querySelectorAll(".project-card");

// const projectObserver = new IntersectionObserver((entries)=>{

//     entries.forEach(entry=>{

//         if(entry.isIntersecting){

//             entry.target.classList.add("show");

//         }

//     });

// },{
//     threshold:0.2
// });

// projectCards.forEach(card=>{

//     projectObserver.observe(card);

// });












/*=========================================================
                    NAVIGATION
=========================================================*/

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

/*=========================================================
                HOME PAGE - COUNTERS
=========================================================*/

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    const counterObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;
            const duration = 1200; // animation time (ms)
            const frameRate = 60;
            const totalFrames = duration / (1000 / frameRate);
            const increment = target / totalFrames;

            function updateCounter() {

                current += increment;

                // Stop exactly at the target
                if (current >= target) {
                    current = target;
                }

                // Format the number
                if (counter.classList.contains("decimal")) {

                    counter.innerText = (current / 10).toFixed(1);

                } else if (counter.classList.contains("percent")) {

                    counter.innerText = Math.round(current) + "%";

                } else {

                    counter.innerText = Math.round(current) + "+";

                }

                // Continue animation only if not finished
                if (current < target) {

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

            observer.unobserve(counter);

        });

    }, {
        threshold: 0.3
    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}

/*=========================================================
                ABOUT PAGE - SKILL BARS
=========================================================*/

const skillBars = document.querySelectorAll(".progress-bar");

if (skillBars.length > 0) {

    const skillObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                bar.style.width = bar.dataset.width;

                observer.unobserve(bar);

            }

        });

    }, {
        threshold: 0.3
    });

    skillBars.forEach(bar => {

        skillObserver.observe(bar);

    });

}


/*=========================================================
            ABOUT PAGE - PERCENTAGES
=========================================================*/

const percentages = document.querySelectorAll(".percent");

if (percentages.length > 0) {

    const percentObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const element = entry.target;

                const target = +element.dataset.percent;

                let current = 0;

                const timer = setInterval(() => {

                    if (current >= target) {

                        clearInterval(timer);

                    } else {

                        current++;

                        element.innerText = current + "%";

                    }

                }, 15);

                observer.unobserve(element);

            }

        });

    });

    percentages.forEach(item => {

        percentObserver.observe(item);

    });

}


/*=========================================================
            ABOUT PAGE - HOBBIES
=========================================================*/

const hobbyCards = document.querySelectorAll(".hobby-card");

if (hobbyCards.length > 0) {

    const hobbyObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    hobbyCards.forEach(card => {

        hobbyObserver.observe(card);

    });

}


/*=========================================================
            ABOUT PAGE - QUOTE
=========================================================*/

const quoteBox = document.querySelector(".quote-box");

if (quoteBox) {

    const quoteObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.3
    });

    quoteObserver.observe(quoteBox);

}


/*=========================================================
            PROJECTS PAGE - PROJECT CARDS
=========================================================*/

const projectCards = document.querySelectorAll(".project-card");

if (projectCards.length > 0) {

    const projectObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    projectCards.forEach(card => {

        projectObserver.observe(card);

    });

}






/*=========================================================
            ACADEMIC PLANNER
=========================================================*/

const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");

if (taskInput && addTaskBtn && taskList && taskCount) {

    let tasks = [];

    function updateCount() {

        const remaining = tasks.filter(task => !task.completed).length;

        taskCount.innerText = remaining;

    }

    function renderTasks() {

        taskList.innerHTML = "";

        tasks.forEach((task, index) => {

            const li = document.createElement("li");

            li.innerHTML = `

                <div class="task-left">

                    <input
                        type="checkbox"
                        ${task.completed ? "checked" : ""}>

                    <span class="${task.completed ? "completed" : ""}">

                        ${task.text}

                    </span>

                </div>

                <button class="delete-btn">

                    <i class="fas fa-trash"></i>

                </button>

            `;

            const checkbox = li.querySelector("input");

            checkbox.addEventListener("change", () => {

                tasks[index].completed = checkbox.checked;

                renderTasks();

            });

            const deleteBtn = li.querySelector(".delete-btn");

            deleteBtn.addEventListener("click", () => {

                tasks.splice(index, 1);

                renderTasks();

            });

            taskList.appendChild(li);

        });

        updateCount();

    }

    addTaskBtn.addEventListener("click", () => {

        const text = taskInput.value.trim();

        if (text === "") return;

        tasks.push({

            text,

            completed: false

        });

        taskInput.value = "";

        renderTasks();


    });

}

taskInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        addTaskBtn.click();

    }

});


/*=========================================================
                CONTACT FORM
=========================================================*/

const contactForm = document.querySelector("#contactForm");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name = document.querySelector("#name").value.trim();

        const email = document.querySelector("#email").value.trim();

        const phone = document.querySelector("#phone").value.trim();

        const message = document.querySelector("#message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern = /^[0-9]+$/;

        if(!name || !email || !phone || !message){

            alert("Please fill in all fields.");

            return;

        }

        if(!emailPattern.test(email)){

            alert("Please enter a valid email address.");

            return;

        }

        if(!phonePattern.test(phone)){

            alert("Phone number should contain digits only.");

            return;

        }

        alert("Message sent successfully!");

        contactForm.reset();

    });

}