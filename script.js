// JSON with all the data
data = {
    "name": "Kyle Schutter",
    "title": "Computer Scientist",
    "statement": "As a fast learner and hard worker, I am committed to performing the best job that I can while advancing myself and my teammates at the same time.",
    "basicInfo": "I am a senior student at Miami University, studying Computer Science. I have experience with web development and database management, while working in a team-oriented environment. I throughly enjoy problem solving when it comes to computers, and will apply myself vigorously to any given task.",
    "jobs": [
        {
            "title": "Lab Assistant",
            "company": "Miami University",
            "address": "Oxford, Ohio",
            "date": "2017 - Present",
            "description": "Conducted studies and performed research pertaining to cybersecurities"
        },
        {
            "title": "Computer Repair Technician",
            "company": "TechHeadz",
            "address": "Oxford, Ohio",
            "date": "2017",
            "description": "Performed general repair on various devices from tablets, to computers, to mobile devices."
        },
        {
            "title": "Data Entry Coordinator",
            "company": "Lewis Fowler",
            "address": "Denver, Colorado",
            "date": "2014-2016",
            "description": "Arranged the transfer of thousands of clientele from Bullhorn to Salesforce"
        }
    ],
    
    "contact": {
        "address": {
                "street": "1801 Fillmore Ct.",
                "cityState": "Louisville, Colorado",
                "country": "United States"
        },
        "email": "kmosswork+resume@gmail.com",
        "phone": "720-555-4216"
    },
    
    "education": {
        "uniName": "Miami University",
        "uniYear": "Class of 2019",
        "uniDegree": "Bachelors in Computer Science"
    },

    "personalHighlights": [
        "Optimistic Outlook",
        "Forward Thinker",
        "Team Leader",
        "Efficient and Focused",
        "Motivated and Committed"
    ]
};

// Set name, title, etc
document.getElementById("name").innerHTML = data.name;
document.getElementById("title").innerHTML = data.title;
document.getElementById("statement").innerHTML = data.statement;
document.getElementById("basicInfo").innerHTML = data.basicInfo;

// Format and set education
var edu = data.education;
var paste = edu.uniName + " - " + edu.uniYear;
paste += "<br>" + edu.uniDegree;
document.getElementById("education").innerHTML = paste;

// Format and set job history, can take in any number of jobs
var jobs = "";
data.jobs.forEach(function(elmt) {
    jobs += elmt.title + " - " + elmt.company + "<br>";
    jobs += elmt.address + ", " + elmt.date + "<br>";
    jobs += elmt.description + "<br><br>";

})
document.getElementById("jobs").innerHTML = jobs;

// Format and set personal highlights, can take in any number
var list = "";
data.personalHighlights.forEach(function(li){
    list += "<li>" + li + "</li><br>";
})
document.getElementById("highlightList").innerHTML = list;

// Format and set contact details
var details = "";
var contact = data.contact;
details += contact.address.street + "<br>";
details += contact.address.cityState + "<br>";
details += contact.address.country + "<br>";
details += "<br>" + contact.email + "<br>";
details += "<br>" + contact.phone
document.getElementById("contact").innerHTML = details;
