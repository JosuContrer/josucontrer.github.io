import MonkeySnippetImgT from '../documents/SnippetSystem/titleImage.png';
import msImg1 from '../documents/SnippetSystem/image1.png';
import msImg2 from '../documents/SnippetSystem/image2.png';
import msImg3 from '../documents/SnippetSystem/image3.png';
import msImg4 from '../documents/SnippetSystem/image4.png';
import msImg5 from '../documents/SnippetSystem/image5.png';

import BFDImgT from '../documents/BFD/titleImage.png';
import bfImg1 from '../documents/BFD/titleImage.png';

import BombermanImgT from '../documents/Bomberman/titleImage.png';
import bmImg1 from '../documents/Bomberman/titleImage.png';

import AnnotationApplicationImgT from '../documents/AnnotationApplication/titleImage.png';
import aaImg1 from '../documents/AnnotationApplication/image1.png';
import aaImg2 from '../documents/AnnotationApplication/titleImage.png';

import ChatApplicationImgT from '../documents/ChatApplication/titleImage.png';
import caImg1 from '../documents/ChatApplication/image1.png';
import caImg2 from '../documents/ChatApplication/image2.png';
import caImg3 from '../documents/ChatApplication/image3.png';
import caImg4 from '../documents/ChatApplication/image4.png';

import KdTreeImgT from '../documents/KdTree/titleImage.png';
import kdImg1 from '../documents/KdTree/titleImage.png';

import ComputerGraphicsImgT from '../documents/ComputerGraphics/titleImage.png';
import cgVid1 from '../documents/ComputerGraphics/project1.mp4';
import cgVid2 from '../documents/ComputerGraphics/project2.mp4';
import cgVid3 from '../documents/ComputerGraphics/project3.mp4';
import cgVid4 from '../documents/ComputerGraphics/project4.mp4';

export const computerScienceData = [
    {
        title: "Infinite Monkey Snippet Web Application", 
        componentName: "infiniteMonkey",
        documentation: [
            {available: "Yes", icon: "GitHub", link: "https://github.com/JosuContrer/infinite-monkey-snippet"},
            {available: "No", icon: "UseCases", link: "../documents/SnippetSystemUseCases.pdf"},
        ],
        components: [ "AWS", "Java", "MySQL", "React JS", "Swagger REST API", "Agile", "Trello", "GitHub"],
        image: MonkeySnippetImgT,
        content: [ {type: "img" , object: msImg1} , {type: "img", object: msImg2} , {type: "img", object: msImg3} , {type: "img", object: msImg4} , {type: "img", object: msImg5} ],
        description:
            <p>Infinite Monkey Snippet is a <b>collaborative Web Application</b> with three kinds of users: creator, viewer, and administrator. Users can create, share, edit metadata, delete a snippet, and collaborate with other is real time. Viewers can view, edit, and comment on lines of the code snippet. Administrators can access a complete list of the snippets in the database, delete individual snippets, and delete snippets prior to the date selected.</p>,
        bulletPoints:
            <p>
                <ul className="ul1">
                    <li>Followed <b>Agile methodology</b> to <b>design, develop, test, and deploy</b></li>
                    <li>Developed <b>use cases</b> to identify, clarify, and organize system requirements.</li>
                    <li>Designed <b>REST API</b> using <b>SwaggerHub’s</b> editor to deal between front-end and back-end HTTP requests and responses. </li>
                    <li>Designed <b>scalable</b> Web Application following the <b>EBC architecture.</b> </li>
                    <ul className="ul2">
                        <li><b>Front End:</b> React JS</li>
                        <li><b>Back End:</b> REST API, Java, MySQL</li>
                        <li><b>Team Management:</b> Trello, Outlook</li>
                    </ul>
                    <li><b>Deployed and managed</b> Web Application on AWS cloud computing platform using S3, lambda, and RDS services.</li>
                    <li>Collaborated with team members to <b>fix bugs</b></li>
                    <li>Fun Fact: </li>
                    <ul className="ul2">
                        <li>Our team named this application “Infinite Monkey Snippet” after mathematicians Emile Borel’s Infinite Monkey Theorem that illustrates a monkey hitting keys at random until it completes the works of Shakespeare given infinite time! </li>
                    </ul>
                </ul>
            </p>
    },
    {
        title: "Bidirectional Forwarding Detection (BFD) on Link Aggregate Groups (LAGs)", 
        componentName: "BFDonLAG",
        documentation: [
            {available: "No", icon: "Paper", link: "../documents/BFD/BFD_Paper.pfd"},
            {available: "No", icon: "Presentation", link: "../documents/BFD/BFD_Presentation.pdf"},
        ],
        components: [ "Google Docs, Outlook, IEFT"],
        image: BFDImgT,
        content: [ {type: "img", object: bfImg1} ],
        description: 
            <p>This paper explores the development of the BFD standard (<b>RFC 5880</b>), its importance in networking, its integration with LAG, and its challenges.</p>,
        bulletPoints:
            <p>
                <ul>
                    <li>Researched the development of the lightweight BFD standard protocol and LAG <b>technology using in networking today.</b></li>
                    <li><b>Collaborated in a team of</b> two to outline the paper, compile references, and write an annotated bibliography.</li>
                    <li><b>Designed and presented</b> analysis of BFD on LAG.</li>
                </ul>
            </p> 
    },{
        title: "Player AI Agent: Bomberman Game", 
        componentName: "bomberman",
        documentation: [
            {available: "Yes", icon: "GitHub", link: "https://github.com/JosuContrer/Bomberman_AI"},
        ],
        components: [ "Python", "GitHub"],
        image: BombermanImgT,
        content: [ {type: "img", object: bmImg1} ],
        description:
            <p>The goal of this project was to <b>implement an AI agent</b> using <b>reinforcement learning</b> to play and beat the classic Bomberman game. The agent developed was able to beat each maze variant in the game. This meant that the “brain” (Q-table) with the greatest successes was able to blow up walls, monsters, and reached the goal with a satisfactory score.</p>,
        bulletPoints:
            <p>
                <ul>
                    <li>Implemented <b>Q-learning</b> reinforcement learning algorithm using the moving average Q-learning equation and <b>A* algorithm.</b></li>
                    <li>Discretized the characters world to <b>lower learning time and save memory space. </b></li>
                    <li>Trained Q-learning agent with world rewards based on actions taken by the character making progress the map exit.</li>
                    <li>The agent was evaluated based on the number of episodes (games played)  it took for higher rewards to be learned.</li>
                    <li>The agent was able to <b>beat the hardest level</b> in the games scenario after trained.</li>
                    <li>An <b>important lesson learned</b> by the team when training is to save the training data (Q-table) every time as results may not be able to be reproduced easily.</li>
                </ul>
            </p>
    },{
        title: "Image Annotation Software Application", 
        componentName: "bomberman",
        documentation: [
            {available: "No", icon: "GitHub", link: "none"},
            {available: "No", icon: "Use Cases Document", link: "..documents/AnnotationApplication/AnnotationUseCases.pdf"},
        ],
        components: [ "Java", "Swing", "EBC Architecture"],
        image: AnnotationApplicationImgT,
        content: [ {type: "img", object: aaImg1} , {type: "img", object: aaImg2} ],
        description:
            <p>This <b>desktop application</b> enables a user to <b>annotate and load an image (JPG, PNG, or GIF) from disk.</b> The <b>annotation files are saved</b> within the same directory of the image and are <b>loaded automatically.</b></p>,
        bulletPoints:
            <p>
                <ul>
                    <li>Developed application use cases.</li>
                    <li>Designed UI using <b>Java Swing library. </b></li>
                    <li><b>Implemented clean application</b> based on the EBC architecture.</li>
                    <li><b>Tested application</b> using the EclEmma code coverage Eclipse plugin and demonstrated <b>{">"}80% coverage. </b></li>
                </ul>
            </p>
    },{
        title: "Chat Application", 
        componentName: "chat",
        documentation: [
            {available: "Yes", icon: "GitHub", link: "https://github.com/JosuContrer/ComputerNetworkChatProject"},
            {available: "No", icon: "Paper", link: "..documents/ChatApplication/chatApplicationPaper.pdf"},
        ],
        components: [ "Java", "JavaFx", "Window Sockets", "IntelliJ IDE"],
        image: ChatApplicationImgT,
        content: [ {type: "img", object: caImg1} , {type: "img", object: caImg2} , {type: "img", object: caImg3} , {type: "img", object: caImg4} ],
        description:
            <p>This Java developed desktop application allows<b> users to connect and chat</b> between each other by clicking on the <b>list of connected users. </b> This application follows the<b> single server-multiple client model.</b> To handle <b>multiple client requests concurrently</b> the server implements <b>threads</b>. Users on the client-side are provided with a GUI that allows them to select username, connect with server, and chat with connected users.</p>,
        bulletPoints:
            <p>
                <ul>
                    <li>Implemented multithreaded client handler on Server.</li>
                    <li>Server design allows multiple clients to connect, communicate, and disconnect <b>without disrupting the Server or other clients.</b></li>
                    <li>Designed Client GUI using JavaFX in IntelliJ IDE.</li>
                    <li>Developed <b>unit tests, system tests, and performance test</b> to prevent errors that may arise throughout the development of the application. The Server performance test demonstrated that an average of <b>14,594 clients</b> can connect before the Server starts dropping requests.</li>
               </ul>
            </p>
    },{
        title: "KD-Tree Data Structure & Visualizer", 
        componentName: "kdTree",
        documentation: [
            {available: "Yes", icon: "GitHub", link: "https://github.com/JosuContrer/KD-Tree"},
            {available: "Yes", icon: "Youtube", link: "https://youtu.be/DNuXnstsf1U"},
            {available: "No", icon: "Paper", link: "../documents/KdTree/kdTreePaper.pdf"},
        ],
        components: [ "Java", "Swing"],
        image: KdTreeImgT,
        content: [ {type: "img", object: kdImg1} ],
        description: 
            <p>Our team implemented and <b>tested the performance</b> of the <b>KD-tree data structure.</b> We choose this data structure as it is <b>widely used</b> in numerous applications like computer graphics, neural networks, data mining, and data analysis. To be able to visualize this spatial space and the <b>nearest neighbor query</b> we developed a <b>java swing GUI.</b></p>,
        bulletPoints:
            <p>
                <ul>
                    <li>Implemented 2D tree (KD tree) advanced data structure in Java.</li>
                    <li>Tested performance of nearest query search and was evaluated against brute force approach.</li>
                    <li>Designed GUI to visualize KD trees spatial structure in a 2-D space.</li>
                </ul>
            </p>
    },{
        title: "Web Graphics: WebGL", 
        componentName: "kdTree",
        documentation: [
            {available: "No", icon: "Youtube", link: "none"},
        ],
        components: [ "Javascript", "WebGL", "HTML", "CSS"],
        image: ComputerGraphicsImgT,
        content: [ {type: "vid", object: cgVid1} , {type: "vid", object: cgVid2} , {type: "vid", object: cgVid3} , {type: "vid", object: cgVid4} ],
        description:
            <p>Four projects where implemented using the <b>WebGL JavaScript Library.</b> This library allows the execution of programs on the <b>computer's GPU</b> while rendering objects in browser window. Using the <b>graphics pipeline</b> objects were manipulated, animated, and displayed. Graphics were accelerated with the use of methods like face-culling. Additional topics covered in the projects were <b>ray tracing vs rasterization</b>, texture, Chaikus algorithm and Bezier Curve, Fractals, <b>lighting algorithms (Phong Interpolation vs Gouraud Shading),</b> reflection and refraction.</p>,
        bulletPoints:
            <p>
                <ul>
                    <li>(Project 1) <b>Web Paint</b> – Web browser canvas that can load .bat files and draw vectors.</li>
                    <li>(Project 2) <b>Mesh Viewer</b> – 3D program that loads a mesh object from a .ply file and animates by rotation, translation, and pulsation transformations.</li>
                    <li>(Project 3) <b>Kinematic Sculpture</b> – Sculpture that uses hierarchical modeling to assign parent child relationships that allows group transformations.</li>
                    <li>(Project 4) <b>Ray Tracer</b> – Three different scenes rendered using a set amount of ray tracing iterations for more accurate depiction of 3D scenes.</li>
                </ul>
            </p>
    },
];