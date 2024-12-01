/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}

///////////////////////////////////////////////////

// Added this list to dynamically pass data to elements of the dialog
let students = [
    {
        name: "Murad",
        fullname: "Murad Musali",
        major: "Information Technology",
        imageSource: "media/Murad Musali.jpeg",
        profession: "Full-Stack Developer",
        information: "TEAM LEADER: First Year UG (Undergraduate) Student at ADA university. Finished IT STEP ACADEMY Programming course. Have an experience in web, mobile and software development, DB Management, etc. Currently working on developing skills of dart language and Flutter. One of the biggest achievements: Created mobile application as the copy of Netflix.",

        linkedInLink: "",
        githubLink: "https://github.com/mmusali23344",
        xTwitterLink: "",
        instagramLink: "https://www.instagram.com/1musayeff.__/profilecard/?igsh=MXh5djZkaWVwOWN2eg%3D%3D&utm_source=qr",

        codeAcademyLink: "https://www.codecademy.com/profiles/mmusali23344",
    },

    {
        name: "Aghaverdi",
        fullname: "Aghaverdi Aghazada",
        major: "Computer Engineering",
        imageSource: "media/Aghaverdi Aghazada.jpeg",
        profession: "Beginner Engineer",
        information: "First Year UG (Undergraduate) Student at ADA university. I am a Computer Engineering major who has experience in HTML and CSS. Finishing HTML and CSS course in Codecademy contributed a lot to my knowledge. I am a keen programming language learner and I am looking forward to improve my abilities.",
        
        linkedInLink: "",
        githubLink: "https://github.com/AghaverdiAghazada",
        xTwitterLink: "",
        instagramLink: "https://www.instagram.com/agxvvdi_/profilecard/?igsh=cXlyYjBsMWJzaWQ0",

        codeAcademyLink: "https://www.codecademy.com/profiles/AghaverdiAghazada",
    },

    {
        name: "Nigar",
        fullname: "Nigar Ahmadzada",
        major: "Math",
        imageSource: "media/Nigar Ahmadzada.jpeg",
        profession: "Mathematician",
        information: "I graduated from №95 school, and entered the ADA University in 2023. For the first year, I studied English academically with the EAPP program. Now, I am a freshman math student. Since September I have been studying the frontend program in Div Academy.",
        
        linkedInLink: "",
        githubLink: "https://github.com/nahmadzada20528",
        xTwitterLink: "",
        instagramLink: "https://www.instagram.com/ahmadzadee.n/profilecard/?igsh=MWp4NG12amZtNGVjeQ==",

        codeAcademyLink: "https://www.codecademy.com/profiles/NigarAhmadzada",
    },

    {
        name: "Gunash",
        fullname: "Gunash Rzayeva",
        major: "Information Technology",
        imageSource: "media/Gunash Rzayeva.jpeg",
        profession: "Mathematician",
        information: "First Year UG (Undergraduate) Student at ADA university. I graduated from №261 school-liceum and entered ADA  university via state exam center. I scored 663.7. Currently I am a freshman math student.",
        
        linkedInLink: "",
        githubLink: "https://github.com/grzayeva23798",
        xTwitterLink: "",
        instagramLink: "https://www.instagram.com/g_rzyyva/profilecard/?igsh=Y3A2NG0xYnU1cHlo",

        codeAcademyLink: "https://www.codecademy.com/profiles/grzayeva23798",
    },
]

const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggle-button");

function toggleSidebar() {
    sidebar.classList.toggle("close");
    sidebar.classList.toggle("rotate");
}

function showDetails(id) {
    document.getElementById('student-name').textContent = students[id - 1].name;
    document.getElementById('student-info').textContent = students[id - 1].information;
    document.getElementById('student-image').src = students[id - 1].imageSource;
    document.getElementById('student-profession').textContent = students[id - 1].profession;
    document.getElementById('student-codeacademy-profile').href = students[id - 1].codeAcademyLink;
    document.getElementById('linked-in-link').href = students[id - 1].linkedInLink;
    document.getElementById('twitter-link').href = students[id - 1].xTwitterLink;
    document.getElementById('instagram-link').href = students[id - 1].instagramLink;
    document.getElementById('github-link').href = students[id - 1].githubLink;

    document.getElementById('details-dialog').showModal();
}

const dialog = document.getElementById('details-dialog');

// Close dialog when clicking outside
dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
  
    if (!isInDialog) {
        dialog.close();
    }
});

/*
function closeDialog() {
    document.getElementById('details-dialog').close();
}
*/