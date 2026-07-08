// Data to hold: color, image, title, tools, website, icon, project_site
// colors: purple.400 = website, yellow.500 = Figma prototype, red.500 = GitHub and no website, cyan.600 = mobile app

import holiday_image from '../images/HolidayAPI_img.png'
import futurelb_design from '../images/FutureLB.png'
import first_website from '../images/FirstWeb.png'
import eventmate_image from '../images/eventmate-project-image.png'

export default [
    {
        "color": "cyan.600",
        "image": eventmate_image,
        "title": "EventMate Application",
        "tools": "Flutter, Dart, RESTful API Consumption, Figma, Git, Github, JSON Web Tokens",
        "website": "",
        "internal_site": "/eventmate",
        "icon": "",
        "project_site": ""
    },
    {
        "color": "purple.400",
        "image": holiday_image,
        "title": "HolidayAPI",
        "tools": "HTML, CSS, JS, C#, Git, Github",
        "website": "",
        "internal_site": "",
        "icon": "github",
        "project_site": "https://github.com/FranciscoL-M01/PublicHolidaysAPI"
    },
    {
        "color": "yellow.500",
        "image": futurelb_design,
        "title": "FutureLB Design",
        "tools": "Figma",
        "website": "",
        "internal_site": "",
        "icon": "figma",
        "project_site": "https://www.figma.com/proto/xOiySj6yQWO1vuOxwWmR44/Youth-Services-Page-Idea?node-id=108-36&p=f&t=1ieRwSsUN2eSQt83-1&scaling=min-zoom&content-scaling=fixed&page-id=108%3A35&starting-point-node-id=108%3A36"
    },
    {
        "color": "red.500",
        "image": first_website,
        "title": "My First Personal Website",
        "tools": "HTML, CSS, JS, Git, Github",
        "website": "https://franciscol-m01.github.io/My-WebPage/home",
        "internal_site": "",
        "icon": "github",
        "project_site": "https://github.com/FranciscoL-M01/My-WebPage"
    }
]