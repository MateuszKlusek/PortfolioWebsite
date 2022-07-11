
import multiplecountdowns from "./../assets/multiplecountdowns/threecountdowns.png"
import vscodeclone from "./../assets/vscodeclone/hellopage.png"
import exploregithub from "./../assets/exploregithub/mainoading.png"

export const projectsData = [
    {
        fullName: "Multiple Countdowns",
        name: "multiplecountdowns",
        website: "https://multiplecountdowns.com",
        github: "https://github.com/MateuszKlusek/MultipleCountdowns",
        data: {
            imgURL: multiplecountdowns,
            text: 'Multiple Countdowns project allows you to create up to 5 precise countdown timers (up to 1ms) that run independently. The precision is achieved due to using web workers with script for each of the countdown timers (instead of using script in the UI thread). Additionally, countdown timers can also "run" offline thanks to local storage, can be stopped and reset and use Notification API on devices with Notification API support.',
            stack: "Typescript, React, styled components, Web Workers, Notification API",
        },
        visible: true
    },
    {
        fullName: "VSCode Clone",
        name: "vscodeclone",
        website: "https://vscodeclone.com",
        github: "https://github.com/MateuszKlusek/VSCodeClone",
        data: {
            imgURL: vscodeclone,
            text: "The main goal behind the VSCode Clone was to achieve as many functionalities without using external packages (or at least as infrequently as possible). It's fair to say it's impossible for a solo developer to achieve the same functionality as the original VSCode App with millions of contributions by tens of thousands of developers however some basic functionalities such as logging/user registering, file creation and deletion, storing files in database, single JS file execution with terminal output, file searches and basic VIM nagivation are provided. Much more to come.",
            stack: "Typescript (client), Javascript (server), React, styled components, MongoDB, "
        },
        visible: true
    },
    {
        fullName: "Explore Github",
        name: "exploregithub",
        website: "https://exploregithub.com",
        github: "https://github.com/MateuszKlusek/ExploreGithub",
        data: {
            imgURL: exploregithub,
            text: "This project relies on Github API to get information about profiles and repositories, however due to the fact that Github API has its limits, puppeteer scraper was incorporated as a vaiable option. The results are the same. Data requested by all users is stored in MongoDB and three latest searches can be accessed at any point without going Github API/scraper route. ",
            stack: "Typescript (client), Javascript (server), React, Chart.js, styled components, puppeteer, MongoDB"
        },
        visible: true
    },
]