(this.webpackJsonpSourceCode=this.webpackJsonpSourceCode||[]).push([[0],{54:function(e,t,n){},58:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n(1),c=n.n(s),a=n(19),r=n.n(a),o=n(13),l=n(3),d=n(6),j=(n(54),n(5)),b=n(9),h=[{title:"Home",link:"/home",offset:0,icon:Object(i.jsx)(j.a,{icon:b.f})},{title:"About",link:"/about",offset:0,icon:Object(i.jsx)(j.a,{icon:b.c})},{title:"Projects",link:"/projects",offset:0,icon:Object(i.jsx)(j.a,{icon:b.b})},{title:"Experience",link:"/experience",offset:0,icon:Object(i.jsx)(j.a,{icon:b.i})},{title:"Random",link:"/random",offset:0,icon:Object(i.jsx)(j.a,{icon:b.g})},{title:"Hobbies",link:"/hobbies",offset:0,icon:Object(i.jsx)(j.a,{icon:b.e})}],m=n.p+"static/media/NameInitials2.c2c6a7de.png",u=function(e){var t=e.toggle;return Object(i.jsxs)("div",{className:"NavMenu",children:[Object(i.jsx)("a",{className:"NavMenuIconLink",href:"/",children:Object(i.jsx)("div",{className:"NavMenuIconContainer",children:Object(i.jsx)("img",{className:"NameLogo",src:m})})}),Object(i.jsx)("div",{className:"NavMenuTitles",children:h.map((function(e,t){return Object(i.jsx)(d.Link,{className:"NavMenuLinks",to:e.link,spy:!0,smooth:!0,offset:e.offset,duration:500,children:e.title},t)}))}),Object(i.jsx)(d.Link,{className:"ContactButton",to:"/contact",spy:!0,smooth:!0,offset:0,duration:500,children:Object(i.jsx)("button",{title:"You wont't regret it!",children:"Contact"})},"cb"),Object(i.jsx)("div",{className:"NavMenuMobile",onClick:t,children:Object(i.jsx)(j.a,{icon:b.d})})]})},p=n.p+"static/media/udp1.f3ec6b46.jpg";n(58);var O=n(11),x=n.p+"static/media/funny.59042802.png";n(67);function g(){var e=Object(s.useRef)(null);return Object(i.jsxs)("div",{className:"AboutCardContainer",ref:e,children:[Object(i.jsx)("div",{className:"ColLeft",children:Object(i.jsx)("div",{className:"Circle",children:Object(i.jsx)("img",{className:"FunnyImage",src:x,alt:"Ummm this is akward :)"})})}),Object(i.jsxs)("div",{className:"ColRight",children:[Object(i.jsx)("h1",{className:"AboutTextWrapper animateAbout",children:"ABOUT"}),Object(i.jsxs)("p",{className:"AboutTextWrapper animateAboutP",children:["I drink coffee, I eat sushi, I write code, and improve my skills every day. I have a B.Sc. degree in Robotics and Electrical & Computer Engineering. I enjoy software engineering so I decided to pursue a master\u2019s in computer science and I am about to finish in the next few months of 2021",Object(O.emojify)(":smiley:"),". Enjoy this portfolio I developed in ReactJS showcasing my projects, experience, and me!"]})]})]})}var f=n(16),v=[{title:"Github",icon:Object(i.jsx)(j.a,{icon:f.a}),link:"https://github.com/JosuContrer"},{title:"Linkedin",icon:Object(i.jsx)(j.a,{icon:f.c}),link:"https://www.linkedin.com/in/josue-contreras-127238141/"},{title:"Youtube",icon:Object(i.jsx)(j.a,{icon:f.d}),link:"https://www.youtube.com/watch?v=Y4B4QkW97oU&t=23s&ab_channel=JosueContreras"},{title:"Instagram",icon:Object(i.jsx)(j.a,{icon:f.b}),link:"https://www.instagram.com/contrerasjosu/"}];n(68);function k(e){var t=e.toggle,n=e.isOpen;return Object(i.jsxs)("div",{className:n?"DropDownMenuContainerOpen":"DropDownMenuContainerClosed",isOpen:n,onClick:t,children:[Object(i.jsx)("div",{className:"ExitIconContainer",children:Object(i.jsx)(j.a,{className:"ExitIcon",icon:b.h,onClick:t})}),Object(i.jsxs)("div",{className:"DropDownMenuTitles",children:[h.map((function(e,n){return Object(i.jsxs)(d.Link,{className:"DropDownMenuLinks",onClick:t,to:e.link,spy:!0,smooth:!0,offset:e.offset,duration:500,children:[e.icon," \xa0 ",e.title]},n)})),Object(i.jsx)(d.Link,{className:"ContactButton",to:"/contact",spy:!0,smooth:!0,offset:0,duration:500,children:Object(i.jsxs)("button",{title:"You wont't regret it!",children:[Object(i.jsx)(j.a,{icon:b.a})," Contact"]})},"cb")]}),Object(i.jsx)("div",{className:"ContactContainer",children:v.map((function(e,t){return Object(i.jsx)("a",{href:e.link,className:"ContactIcon",children:e.icon},t)}))})]})}var w=n(35),y=n(36),C=n(20),N=n(39),S=n(38);n(69);function T(){return Object(s.useEffect)((function(){var e=document.querySelector(".Card"),t=document.querySelector(".TitlePageContainer"),n=document.querySelector(".TitleHeading"),i=document.querySelector(".Name");t.addEventListener("mousemove",(function(t){var n=(window.innerWidth/2-t.pageX)/15,i=(window.innerHeight/2-t.pageY)/5;e.style.transform="rotateY("+n+"deg) rotateX("+i+"deg)"})),t.addEventListener("mouseenter",(function(t){e.style.transition="all 0.1s ease",n.style.transform="translateZ(100px)",i.style.transform="translateZ(150px)"})),t.addEventListener("mouseleave",(function(t){e.style.transition="all 0.5s ease",e.style.transform="rotateY(0deg) rotateX(0deg)",n.style.transform="translateZ(0px)",i.style.transform="translateZ(0px)"}))}),[]),Object(i.jsx)("div",{class:"TitlePageWrapper",children:Object(i.jsx)("div",{class:"TitlePageContainer",children:Object(i.jsxs)("div",{class:"Card",children:[Object(i.jsx)("div",{class:"Info1",children:Object(i.jsxs)("h1",{class:"TitleHeading",children:["Hi",Object(i.jsx)("span",{class:"Dot",children:"."})]})}),Object(i.jsx)("div",{class:"Info2",children:Object(i.jsxs)("h1",{class:"Name",children:["I am ",Object(i.jsx)("br",{}),"Josue"]})})]})})})}n(70);var I=n.p+"static/media/middle.fd21fa62.jpg",P=function(e){Object(N.a)(n,e);var t=Object(S.a)(n);function n(e){var i;return Object(w.a)(this,n),(i=t.call(this,e)).state={screenSizeSmall:!1},i.updateScreenSize=i.updateScreenSize.bind(Object(C.a)(i)),i}return Object(y.a)(n,[{key:"componentDidMount",value:function(){this.updateScreenSize(),window.addEventListener("resize",this.updateScreenSize)}},{key:"updateScreenSize",value:function(){this.setState({screenSizeSmall:window.innerWidth<1e3})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"TitleCardContainer",children:[Object(i.jsx)(T,{}),this.state.screenSizeSmall?Object(i.jsx)("img",{className:"TitleCardBackgroundImage",src:I,alt:"Me"}):Object(i.jsx)("img",{className:"TitleCardBackgroundImage",src:p,alt:"Me"})]})}}]),n}(c.a.Component),D=n.p+"static/media/titleImage.7df74de7.png",E=n.p+"static/media/titleImage.fc31af94.png",A=n.p+"static/media/titleImage.3e0c15cb.png",L=n.p+"static/media/titleImage.e8f89ded.png",G=n.p+"static/media/titleImage.c04dd706.png",J=n.p+"static/media/titleImage.e52435f5.png",B=n.p+"static/media/titleImage.d60947ea.png",M=[{title:"Infinite Monkey Snippet Web Application",componentName:"infiniteMonkey",documentation:[{icon:"GitHub",link:"https://github.com/JosuContrer/infinite-monkey-snippet"},{icon:"UseCases",link:"../documents/SnippetSystemUseCases.pdf"}],components:["AWS","Java","MySQL","React JS","Swagger REST API","Agile","Trello","GitHub"],image:D,description:Object(i.jsxs)("p",{children:["Infinite Monkey Snippet is a ",Object(i.jsx)("b",{children:"collaborative Web Application"})," that has three kinds of users: creator, viewer, and administrator. Users can create, share, edit metadata, and delete a snippet to collaborate with other is real time. Viewers can view, edit, and comment on lines the code snippet. Administrators can access a complete list of the snippets in the database, delete individual snippets, and delete snippets prior to the date selected."]}),bulletPoints:Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["Followed ",Object(i.jsx)("b",{children:"Agile methodology"})," to ",Object(i.jsx)("b",{children:"design, develop, test, and deploy"})]}),Object(i.jsxs)("li",{children:["Developed ",Object(i.jsx)("b",{children:"use cases"})," to identify, clarify, and organize system requirements."]}),Object(i.jsxs)("li",{children:["Designed ",Object(i.jsx)("b",{children:"REST API"})," using ",Object(i.jsx)("b",{children:"SwaggerHub\u2019s"})," editor to deal between front-end and back-end HTTP requests and responses. "]}),Object(i.jsxs)("li",{children:["Designed ",Object(i.jsx)("b",{children:"scalable"})," Web Application following the ",Object(i.jsx)("b",{children:"EBC architecture."})," "]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Front End:"})," React JS"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Back End:"})," REST API, Java, MySQL"]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Team Management:"})," Trello, Outlook"]})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Deployed and managed"})," Web Application on AWS cloud computing platform using S3, lambda, and RDS services."]}),Object(i.jsxs)("li",{children:["Collaborated with team members to ",Object(i.jsx)("b",{children:"fix bugs"})]}),Object(i.jsx)("li",{children:"Fun Fact: "}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:"Our team named this application \u201cInfinite Monkey Snippet\u201d after mathematicians Emile Borel\u2019s Infinite Monkey Theorem that illustrates a monkey hitting keys at random until it completes the works of Shakespeare given infinite time! "})})]})})},{title:"Bidirectional Forwarding Detection (BFD) on Link Aggregate Groups (LAGs)",componentName:"BFDonLAG",documentation:[{icon:"Paper",link:"../documents/BFD/BFD_Paper.pfd"},{icon:"Presentation",link:"../documents/BFD/BFD_Presentation.pdf"}],components:["Google Docs, Outlook, IEFT"],image:E,description:Object(i.jsxs)("p",{children:["This paper explores the development of the BFD standard (",Object(i.jsx)("b",{children:"RFC 5880"}),"), its importance in networking, its integration with LAG, and its challenges."]}),bulletPoints:Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["Researched the development of the lightweight BFD standard protocol and LAG ",Object(i.jsx)("b",{children:"technology using in networking today."})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Collaborated in a team of"})," two to outline the paper, compile references, and write an annotated bibliography."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Designed and presented"})," analysis of BFD on LAG."]})]})})},{title:"Player AI Agent: Bomberman Game",componentName:"bomberman",documentation:[{icon:"GitHub",link:"https://github.com/JosuContrer/Bomberman_AI"}],components:["Python","GitHub"],image:A,description:Object(i.jsxs)("p",{children:["The goal of this project was to ",Object(i.jsx)("b",{children:"implement an AI agent"})," using ",Object(i.jsx)("b",{children:"reinforcement learning"})," to play and beat the classic Bomberman game. The agent developed was able to beat each maze variant in the game. The \u201cbrain\u201d (Q-table) with the greatest successes was able to blow up walls, monsters, and reached the goal with a decent score."]}),bulletPoints:Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["Implemented ",Object(i.jsx)("b",{children:"Q-learning"})," reinforcement learning algorithm using the moving average Q-learning equation and ",Object(i.jsx)("b",{children:"A* algorithm."})]}),Object(i.jsxs)("li",{children:["Discretized the characters world to ",Object(i.jsx)("b",{children:"lower learning time and save memory space. "})]}),Object(i.jsx)("li",{children:"Trained Q-learning agent with world rewards based on actions taken by the character making progress the map exit."}),Object(i.jsx)("li",{children:"The agent was evaluated based on the number of episodes (games played)  it took for higher rewards to be learned."}),Object(i.jsxs)("li",{children:["The agent was able to ",Object(i.jsx)("b",{children:"beat the hardest level"})," in the games scenario after trained."]}),Object(i.jsxs)("li",{children:["An ",Object(i.jsx)("b",{children:"important lesson learned"})," by the team when training is to save the training data (Q-table) every time as results may not be able to be reproduced easily."]})]})})},{title:"Image Annotation Software Application",componentName:"bomberman",documentation:[{icon:"GitHub",link:"none"},{icon:"Use Cases Document",link:"..documents/AnnotationApplication/AnnotationUseCases.pdf"}],components:["Java","Swing","EBC Architecture"],image:L,description:Object(i.jsxs)("p",{children:["This ",Object(i.jsx)("b",{children:"desktop application"})," enables a user to load an image (JPG, PNG, or GIF) form disk and annotate it with comments. The ",Object(i.jsx)("b",{children:"annotations are saved"})," within the ",Object(i.jsx)("b",{children:"same directory"})," of the image and loaded if the image is reopened in the annotation application."]}),bulletPoints:Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Developed application use cases."}),Object(i.jsxs)("li",{children:["Designed UI using ",Object(i.jsx)("b",{children:"Java Swing library. "})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Implemented clean application"})," based on the EBC architecture."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Tested application"})," using the EclEmma code coverage Eclipse plugin and demonstrated ",Object(i.jsxs)("b",{children:[">","80% coverage. "]})]})]})})},{title:"Chat Application",componentName:"chat",documentation:[{icon:"GitHub",link:"https://github.com/JosuContrer/ComputerNetworkChatProject"},{icon:"Paper",link:"..documents/ChatApplication/chatApplicationPaper.pdf"}],components:["Java","JavaFx","Window Sockets","IntelliJ IDE"],image:G,description:Object(i.jsxs)("p",{children:["This desktop application allows",Object(i.jsx)("b",{children:" users to connect and chat"})," between each other by clicking on the ",Object(i.jsx)("b",{children:"list of connected users."})," This java application follows the",Object(i.jsx)("b",{children:" single server-multiple client model."})," The ",Object(i.jsx)("b",{children:"multithreaded server"})," allows multiple users to communicate with each other concurrently. On the client-side users are provided with a GUI to select username, connect with server, and chat with connected users."]}),bulletPoints:Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Implemented multithreaded client handler on Server."}),Object(i.jsxs)("li",{children:["Server design allows multiple clients to connect, communicate, and disconnect ",Object(i.jsx)("b",{children:"without disrupting the Server or other clients."})]}),Object(i.jsx)("li",{children:"Designed Client GUI using JavaFX in IntelliJ IDE."}),Object(i.jsxs)("li",{children:["Developed ",Object(i.jsx)("b",{children:"unit tests, system tests, and performance test"})," to prevent errors that may arise throughout the development of the application. The Server performance test demonstrated that an average of ",Object(i.jsx)("b",{children:"14,594 clients"})," can connect before the Server starts dropping requests."]})]})})},{title:"KD-Tree Data Structure & Visualizer",componentName:"kdTree",documentation:[{icon:"GitHub",link:"https://github.com/JosuContrer/KD-Tree"},{icon:"Youtube",link:"https://youtu.be/DNuXnstsf1U"},{icon:"Paper",link:"../documents/KdTree/kdTreePaper.pdf"}],components:["Java","Swing"],image:J,description:Object(i.jsxs)("p",{children:["Our team implemented and ",Object(i.jsx)("b",{children:"tested the performance"})," of the ",Object(i.jsx)("b",{children:"KD-tree data structure."})," We choose this data structure as it is ",Object(i.jsx)("b",{children:"widely used"})," in numerous applications like computer graphics, neural networks, data mining, and data analysis. To be able to visualize this spatial space and the ",Object(i.jsx)("b",{children:"nearest neighbor query"})," we developed a ",Object(i.jsx)("b",{children:"java swing GUI."})]}),bulletPoints:Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Implemented 2D tree (KD tree) advanced data structure in Java."}),Object(i.jsx)("li",{children:"Tested performance of nearest query search and was evaluated against brute force approach."}),Object(i.jsx)("li",{children:"Designed GUI to visualize KD trees spatial structure in a 2-D space."})]})})},{title:"Web Graphics: WebGL",componentName:"kdTree",documentation:[{icon:"Youtube",link:"none"}],components:["Javascript","WebGL","HTML","CSS"],image:B,description:Object(i.jsxs)("p",{children:["Four projects where implemented using the ",Object(i.jsx)("b",{children:"WebGL JavaScript Library."})," Used the ",Object(i.jsx)("b",{children:"graphics pipeline"})," to manipulate vertices of objects calculated by the computers ",Object(i.jsx)("b",{children:"GPU"})," and displayed on the browser. Other topics covered in the projects where ",Object(i.jsx)("b",{children:"ray tracing vs rasterization"}),", texture, ",Object(i.jsx)("b",{children:"Chaikus algorithm and Bezier Curve,"})," Fractals, lighting algorithms (Phong Interpolation vs Gouraud Shading), reflection and refraction, and back-face culling."]}),bulletPoints:Object(i.jsx)("p",{children:Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:["1) ",Object(i.jsx)("b",{children:"Web Paint"})," \u2013 Web browser canvas that can load .bat files and draw vectors."]}),Object(i.jsxs)("li",{children:["2) ",Object(i.jsx)("b",{children:"Mesh Viewer"})," \u2013 3D program that loads a mesh object form a .ply file and animates by rotation, translation, and pulsation transformations."]}),Object(i.jsxs)("li",{children:["3) ",Object(i.jsx)("b",{children:"Kinematic Sculpture"})," \u2013 Sculpture that uses hierarchical modeling to assign parent child relationships that allows group transformations."]}),Object(i.jsxs)("li",{children:["4) ",Object(i.jsx)("b",{children:"Ray Tracer"})," \u2013 Three different scenes rendered using a set amount of ray tracing iterations for more accurate depiction of 3D scenes."]})]})})}];n(71);var R=function(){return Object(i.jsxs)("div",{className:"ProjectsContainer",children:[Object(i.jsx)("h1",{className:"CardTitle ProjectsTextWrapper",children:"Projects"}),Object(i.jsx)("h2",{className:"CardSubTitle",children:"Computer Science"}),Object(i.jsx)("div",{className:"ContentContainer",children:M.map((function(e,t){return Object(i.jsxs)("div",{className:"ContentProfile",children:[Object(i.jsx)("h3",{children:e.title}),Object(i.jsx)("p",{children:e.description}),Object(i.jsx)("div",{className:"Grey"}),Object(i.jsx)("img",{src:e.image})]},t)}))})]})},F=(n(72),function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),r=Object(o.a)(a,2),l=r[0],d=r[1],j=Object(s.useState)(""),b=Object(o.a)(j,2),h=b[0],m=b[1],u=Object(s.useState)(!1),p=Object(o.a)(u,2),x=p[0],g=p[1];return Object(i.jsxs)("div",{className:"RandomPage",children:[Object(i.jsx)("h1",{children:"Random"}),Object(i.jsxs)("div",{className:"Container",children:[Object(i.jsx)("p",{className:"Instructions",children:"Click on the following to get a random programming joke from the free API\u2026"}),Object(i.jsxs)("div",{className:"TextContainer",children:[Object(i.jsxs)("p",{className:"JokeTypeContainer",children:[Object(i.jsx)("b",{children:"Type:"})," ",n]}),Object(i.jsx)("p",{className:"JokeTextContainer",children:l}),Object(i.jsx)("p",{className:x?"JokePunchV":"JokePunchNV",children:h})]}),Object(i.jsxs)("div",{className:"ButtonsContainer",children:[Object(i.jsxs)("button",{className:"b1",onClick:function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){console.log(e.responseText);var t=JSON.parse(e.responseText);g(!1),c(t.type),d(t.setup),m(t.punchline)})),e.open("GET","https://official-joke-api.appspot.com/random_joke"),e.send()},children:["Click Me ",Object(O.emojify)(":joy:")]}),Object(i.jsxs)("button",{className:"b2",onClick:function(){g(!0)},children:["Answer ",Object(O.emojify)(":sunglasses:")]})]})]}),Object(i.jsx)("a",{href:"https://github.com/15Dkatz/official_joke_api",children:"David Katz Official_Joke_API"})]})}),W=(n(73),function(){return Object(i.jsx)("div",{className:"HobbiesPage",children:Object(i.jsx)("h1",{children:"Hobbies"})})}),H=(n(74),function(){return Object(i.jsxs)("div",{className:"ContactPage",children:[Object(i.jsx)("h1",{children:"Contact"}),Object(i.jsx)("div",{className:"ContactContainer",children:v.map((function(e,t){return Object(i.jsx)("a",{className:"Link",href:e.link,children:e.icon},t)}))}),Object(i.jsxs)("h2",{className:"Statement",children:["Made with ",Object(O.emojify)(":yellow_heart:")," by Josue C."]}),Object(i.jsx)("a",{className:"Email",href:"jdcontrerasalbuj@wpi.edu",children:"jdcontrerasalbuj@wpi.edu"})]})});n(75);function z(){return Object(i.jsxs)("div",{className:"ErrorPageContainer",children:[Object(i.jsx)("h1",{className:"ErrorPageText",children:"ERROR PAGE OOPS"}),Object(i.jsx)("div",{className:"ContactInfoContainer",children:v.map((function(e,t){return Object(i.jsx)("a",{className:"ContactLink",href:e.link,children:e.icon})}))})]})}n(76),n(77);var U=function(){return Object(i.jsxs)("div",{className:"ExperienceContainer",children:[Object(i.jsx)("h1",{className:"ExperienceTextWrapper",children:"Experience"}),Object(i.jsxs)("div",{className:"Work",children:[Object(i.jsxs)("div",{className:"WorkContainer",children:[Object(i.jsxs)("div",{className:"TextContainer",children:[Object(i.jsx)("h2",{children:"NEST Lab"}),Object(i.jsxs)("h3",{children:[Object(i.jsx)("b",{children:"Experience:"})," +1.5 years"]}),Object(i.jsxs)("h3",{children:[Object(i.jsx)("b",{children:"Awards:"})," Director\u2019s MQP Award 2020"]}),Object(i.jsxs)("h3",{children:[Object(i.jsx)("b",{children:"Video Link:"})," ",Object(i.jsx)("a",{href:"https://www.youtube.com/watch?v=PBnyCkLuTko&ab_channel=CalebWagner",children:"Click Me"})]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Researched, designed, and developed"})," symbiotic multi-agent system composed of two robots."]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Agile development"})," in a team of 6 researchers and 2 advisors."]}),Object(i.jsxs)("li",{children:["Presented weekly progress through ",Object(i.jsx)("b",{children:"presentations, documentation, and reviews."})]}),Object(i.jsxs)("li",{children:["Research paper under second round of review for ",Object(i.jsx)("b",{children:"RAL and ICRA 2020."})]})]})]}),Object(i.jsx)("div",{className:"TL1"}),Object(i.jsx)("div",{className:"TR1"})]}),Object(i.jsxs)("div",{className:"WorkContainer",children:[Object(i.jsxs)("div",{className:"TextContainer",children:[Object(i.jsxs)("h2",{children:["Smart City Research Center",Object(i.jsx)("br",{})," of Zhejiang Providence"]}),Object(i.jsxs)("h3",{children:[Object(i.jsx)("b",{children:"Experience:"})," +3 months"]}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Studied current infrastructure"})," of Hangzhou\u2019s ",Object(i.jsx)("b",{children:"smart parking systems."})]}),Object(i.jsxs)("li",{children:["Evaluated potential ",Object(i.jsx)("b",{children:"RFID and 5G solutions"})," to increase smart parking ",Object(i.jsx)("b",{children:"comfort and maintenance."})]}),Object(i.jsxs)("li",{children:["Worked with Huawei, Alibaba, and PShare Company to ",Object(i.jsx)("b",{children:"gauge the direction of smart technology developments applicable"})," to future parking solutions."]}),Object(i.jsxs)("li",{children:["Our team presented our proposed recommendations of a ",Object(i.jsx)("b",{children:"system frame framework for developers of modern smart parking solutions."})]})]})]}),Object(i.jsx)("div",{className:"TL2"}),Object(i.jsx)("div",{className:"TR2"})]})]}),Object(i.jsxs)("div",{className:"LeadershipContainer",children:[Object(i.jsxs)("div",{className:"BlockContainer",children:[Object(i.jsx)("h2",{children:"Leadership"}),Object(i.jsxs)("div",{className:"ContentContainer",children:[Object(i.jsx)("h3",{children:"WPI Resident Advisor and Graduate Housing Assistant"}),Object(i.jsxs)("h4",{children:[Object(i.jsx)("b",{children:"Experience:"})," +4 years"]}),Object(i.jsxs)("h4",{children:[Object(i.jsx)("b",{children:"Portafolio:"})," ",Object(i.jsx)("a",{href:"https://wpi.digication.com/josue-contreras1",children:"Click Me"})]}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Developed team management and building skills"})," by administering residential floor communities throughout every academic year. ",Object(i.jsx)("b",{children:"Successfully balanced work and study"})," by creating ",Object(i.jsx)("b",{children:"healthy habits and communicative."})]})})]}),Object(i.jsxs)("div",{className:"ContentContainer",children:[Object(i.jsx)("h3",{children:"IEEE Vice-president"}),Object(i.jsxs)("h4",{children:[Object(i.jsx)("b",{children:"Experience:"})," +6 months"]}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("b",{children:"Conducted weekly meetings"})," to discuss ",Object(i.jsx)("b",{children:"sub-team progress, upcoming events, questions, and idea proposals."})," ",Object(i.jsx)("b",{children:"Increased professional club awareness on campus"})," by working with student teams and organizations."]})})]})]}),Object(i.jsx)("div",{className:"Circle1"}),Object(i.jsx)("div",{className:"Circle2"})]})]})};var q=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=function(){c(!n)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{toggle:a}),Object(i.jsx)(k,{toggle:a,isOpen:n}),Object(i.jsxs)(l.c,{children:[Object(i.jsxs)(l.a,{exact:!0,path:"/",children:[Object(i.jsxs)(d.Element,{name:"/home",children:[" ",Object(i.jsx)(P,{})," "]}),Object(i.jsxs)(d.Element,{name:"/about",children:[" ",Object(i.jsx)(g,{})," "]}),Object(i.jsxs)(d.Element,{name:"/projects",children:[" ",Object(i.jsx)(R,{})," "]}),Object(i.jsxs)(d.Element,{name:"/experience",children:[" ",Object(i.jsx)(U,{})," "]}),Object(i.jsxs)(d.Element,{name:"/random",children:[" ",Object(i.jsx)(F,{})," "]}),Object(i.jsxs)(d.Element,{name:"/hobbies",children:[" ",Object(i.jsx)(W,{})," "]}),Object(i.jsxs)(d.Element,{name:"/contact",children:[" ",Object(i.jsx)(H,{})," "]})]}),Object(i.jsx)(l.a,{exact:!0,path:"/*",children:Object(i.jsx)(z,{})})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))},Q=n(28);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(Q.a,{children:Object(i.jsx)(q,{})})}),document.getElementById("root")),_()}},[[80,1,2]]]);
//# sourceMappingURL=main.baf92a3a.chunk.js.map