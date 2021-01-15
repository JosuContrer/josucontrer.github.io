import ms from '../images/PMonkeySnippet.png';

export const computerScienceData = [
    {
        title: "Infinite Monkey Snippet Web Application", 
        componentName: "webGL",
        projectComponents: [
            {icon: "GitHub", link: "https://github.com/JosuContrer/infinite-monkey-snippet"},
            {icon: "UseCases", link: "../documents/SnippetSystemUseCases.pdf"},
        ],
        Components: [ "AWS", "Java", "MySQL", "React JS", "Swagger REST API", "Agile", "Trello", "GitHub"],
        image: ms,
        description: 
        <p>Infinite Monkey Snippet is a <b>collaborative Web Application</b> that has three kinds of users: creator, viewer, and administrator. Users can create, share, edit metadata, and delete a snippet to collaborate with other is real time. Viewers can view, edit, and comment on lines the code snippet. Administrators can access a complete list of the snippets in the database, delete individual snippets, and delete snippets prior to the date selected.
            <ul>
                <li>Followed <b>Agile methodology</b> to <b>design, develop, test, and deploy</b></li>
                <li>Developed <b>use cases</b> to identify, clarify, and organize system requirements.</li>
                <li>Designed <b>REST API</b> using <b>SwaggerHub’s</b> editor to deal between front-end and back-end HTTP requests and responses. </li>
                <li>Designed <b>scalable</b> Web Application following the <b>EBC architecture.</b> </li>
                <ul>
                    <li><b>Front End:</b> React JS</li>
                    <li><b>Back End:</b> REST API, Java, MySQL</li>
                    <li><b>Team Management:</b> Trello, Outlook</li>
                </ul>
                <li><b>Deployed and managed</b> Web Application on AWS cloud computing platform using S3, lambda, and RDS services.</li>
                <li>Collaborated with team members to <b>fix bugs</b></li>
            </ul>
        </p>
    },
    {
        title: "WebGL Projects", 
        componentName: "webGL",
        projectComponents: [
            {icon: "Icon1", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
            {icon: "Icon2", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
            {icon: "Icon3", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
            {icon: "Icon4", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
        ],
        image: ms,
        description: "This is a cool project I made." 
    },{
        title: "WebGL Projects", 
        componentName: "webGL",
        projectComponents: [
            {icon: "Icon1", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
            {icon: "Icon2", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
            {icon: "Icon3", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
            {icon: "Icon4", link: "https://css-tricks.com/snippets/css/complete-guide-grid/"},
        ],
        image: ms,
        description: "This is a cool project I made." 
    },
];

export const roboticsData = [
    {
        title: "3 Degree of Freedom Robotic Arm", 
        componentName: "3Dof",
        projectComponents: [
            {icon: "Icon1", link: "link1"},
            {icon: "Icon2", link: "link2"},
            {icon: "Icon3", link: "link3"},
            {icon: "Icon4", link: "link4"},
        ],
        image: "Image",
        description: "This is a cool project I made."
    },
];