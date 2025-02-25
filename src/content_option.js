import perso from './assets/images/ludo.webp'
import p2 from './assets/images/projet2.webp'


const logotext = "LUDO";
const meta = {
    title: "Ludovic DUFAURE",
    description: "Je m'appelle Ludovic DUFAURE 'intégrateur web', actuellement basé sur Bordeaux en France",
};

const introdata = {
    title: "Bonjour je m'appelle Ludovic DUFAURE",
    animated: {
        first: "J'adore codé !",
        second: "Je code des sites internet cool !",
        third: "Je développe en utilisant React",
    },
    description: "je suis'intégrateur web', actuellement basé sur Bordeaux en France",
    your_img_url: perso,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
},
];

const skills = [{
    name: "Python",
    value: 90,
},
{
    name: "Djano",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 60,
},
{
    name: "Jquery",
    value: 85,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
];

const dataportfolio = [{
    img: p2,
    description: "Riding Cities - Intégrer des éléments sur une page web en utilisant les fondamentaux de HTML et CSS.",
    linkGitub: "https://github.com/LudoRap33/P2",
    linkSite: "https://ludorap33.github.io/P2/"
},
{
    img: "https://picsum.photos/400/800/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},

{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/550/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    linkGitub: "#",
    linkSite: ""
},
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};