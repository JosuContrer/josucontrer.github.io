import React, {useState} from 'react'

import { emojify } from 'react-emojione';

import './Random.scss';

export const Random = () => {
   const [jokeType, setJokeType] = useState('');
   const [jokeMain, setJoke] = useState('');
   const [jokePunch, setPunch] = useState('');
   const [visible, setVisible] = useState(false);
    
    const getJoke = () => {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('load',()=> {
            console.log(xhr.responseText);
            let resp = JSON.parse(xhr.responseText);

            setVisible(false);
            setJokeType(resp.type);
            setJoke(resp.setup);
            setPunch(resp.punchline);
        })

        xhr.open('GET', 'https://official-joke-api.appspot.com/random_joke');
        xhr.send();
    };

    const showAnswer = () => {
        setVisible(true);
    }

    return (
        <div className="RandomPage">
            <h1>Random</h1>
            <div className="Container">
                <p>Click on the following to get a random programming joke from the free API…</p>
                <p className="JokeTypeContainer">Type: {jokeType}</p>
                <p className="JokeTextContainer">{jokeMain}</p>
                <p className={visible ? "JokePunchV" : "JokePunchNV"}>{jokePunch}</p>
                <button onClick={getJoke}>Click Me {emojify(':joy:')}</button>
                <button onClick={showAnswer}>Answer</button>
            </div>
            <a href="https://github.com/15Dkatz/official_joke_api">David Katz Official_Joke_API</a>
        </div>
    )
}
