import React from 'react'
import './ExperienceCard.scss';

function ExperienceCard() {
    return (
        <div className="ExperienceContainer">
            <h1 className="ExperienceTextWrapper">EXPERIENCE</h1>
            <div className="Work">
                <div className="WorkContainer">
                    <div className="TextContainer">
                        <h2>NEST Lab</h2>
                        <h3><b>Experience:</b> 1.5+ years</h3>
                        <h3><b>Awards:</b> Director’s MQP Award 2020</h3>
                        <h3><b>Video Link:</b> <a href="https://www.youtube.com/watch?v=PBnyCkLuTko&ab_channel=CalebWagner">Click Me</a></h3>
                        <ul>
                            <li><b>Researched, designed, and developed</b> symbiotic multi-agent system composed of two robots.</li>
                            <li>Followed <b>Agile development</b> processes with a team of 6 researchers and 2 advisors.</li>
                            <li>Presented weekly progress through <b>presentations, documentation, and reviews.</b></li>
                            <li>Currently research paper is under second round of review for <b>RAL and ICRA 2020.</b></li>
                        </ul>
                    </div>
                    <div className="TL1"></div>
                    <div className="TR1"></div>
                </div>
                <div className="WorkContainer">
                    <div className="TextContainer">
                        <h2>Smart City Research Center<br/> of Zhejiang Providence</h2>
                        <h3><b>Experience:</b> 3+ months</h3>
                        <ul>
                            <li><b>Studied current infrastructure</b> of Hangzhou’s <b>smart parking systems.</b></li>
                            <li>Evaluated potential <b>RFID and 5G solutions</b> to increase smart parking <b>comfort and maintenance.</b></li>
                            <li>Worked with Huawei, Alibaba, and PShare Company to <b>gauge the direction of smart technology developments applicable</b> to future parking solutions.</li>
                            <li>Our team presented recommendations of a <b>system framework for developers of modern smart parking solutions.</b></li>
                        </ul>
                    </div>
                    <div className="TL2"></div>
                    <div className="TR2"></div>
                </div>
            </div>
            <div className="LeadershipContainer">
                <div className="BlockContainer">
                    <h2>Leadership</h2>
                    <div className="ContentContainer">
                        <h3>WPI Resident Advisor and Graduate Housing Assistant</h3>
                        <h4><b>Experience:</b> +4 years</h4>
                        <h4><b>Portafolio:</b> <a href="https://wpi.digication.com/josue-contreras1">Click Me</a></h4>
                        <ul>
                            <li><b>Developed team management and building skills</b> by administering residential floor communities throughout every academic year. <b>Successfully balanced work and study</b> by creating <b>healthy habits and communicative skills.</b></li>
                        </ul>
                    </div>
                    <div className="ContentContainer">
                        <h3>IEEE Vice-president</h3>
                        <h4><b>Experience:</b> +6 months</h4>
                        <ul>
                            <li><b>Conducted weekly meetings</b> to discuss <b>sub-team progress, upcoming events, questions, and idea proposals.</b> <b>Increased professional club awareness on campus</b> by working with teams, clubs, and organizations.</li>
                        </ul>
                    </div>
                </div>
                <div className="Circle1"></div>
                <div className="Circle2"></div>
            </div>
        </div>
    )
}

export default ExperienceCard
