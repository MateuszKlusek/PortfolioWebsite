
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
            text: 'Multiple Countdowns project brings you very precise timer (to 1ms) thanks to using web workers seperatly for each of the countdowns (instead of using timer in the main thread). Additionally, countdowns also "run" offline thanks to local storage, can be stopped and reset and uses Notification API on devices with a proper support.                                              ',
            stack: "Typescript, React, styled components, Web Workers, Notification API",
        },
        visible: true
    },
    {
        fullName: "VSCode Clone",
        name: "vscodeclone",
        website: "https://vscodeclone",
        github: "https://github.com/MateuszKlusek/VSCodeClone",
        data: {
            imgURL: vscodeclone,
            text: "The main goal behind the VSCode Clone was to get as many functionalities without using external packages (or at least as infrequently as possible). It's fair to say it's impossible for a solo developer to achieve the same functionality as the original VSCode App with millions of contributions by tens of thousend of developers however some basic functionalities such as logging/user registering, file creation and deletion, storing files in database, single JS file execution with terminal output, file searches and basic VIM nagivation are provided. Much more to come.",
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
            text: "This project relies on Github API to get information about profiles and repositories, however due to the fact that Github API has its limits, I incorporated scraper using puppeteer that brings you the same results. Data requested by all users is stored in MongoDB and can be accessed at any point without going Github API/scraper route. ",
            stack: "Typescript (client), Javascript (server), React, styled components, puppeteer, MongoDB"
        },
        visible: true
    },
]