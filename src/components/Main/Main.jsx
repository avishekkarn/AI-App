import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context.jsx';

function Main() {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            {/* Navigation Bar */}
            <div className='nav'>
                <p>Avishek</p>
                <img src={assets.user_icon} alt='User Icon' />
            </div>

            {/* Main Content */}
            <div className='main-container'>
                {!showResult ? (
                    <>
                        {/* Greeting Section */}
                        <div className='greet'>
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        {/* Cards Section */}
                        <div className='cards'>
                            <div className='card'>
                                <p>Briefly summarize this concept: urban planning.</p>
                                <img src={assets.bulb_icon} alt='Bulb Icon' />
                            </div>

                            <div className='card'>
                                <p>Brainstorm team bonding activities for our work retreat.</p>
                                <img src={assets.message_icon} alt='Message Icon' />
                            </div>

                            <div className='card'>
                                <p>Improve the readability of the following code.</p>
                                <img src={assets.code_icon} alt='Code Icon' />
                            </div>

                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip.</p>
                                <img src={assets.compass_icon} alt='Compass Icon' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        {/* Display the AI result */}
                        <div className='result-title'>
                            <img src={assets.user_icon} alt="User Icon" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="Gemini Icon" />
                            {loading
                            ?<div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                            
                        </div>
                    </div>
                )}

                {/* Bottom Search Bar */}
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input
                            type='text'
                            placeholder='Enter a prompt here'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div>
                            <img src={assets.gallery_icon} alt='Gallery Icon' />
                            <img src={assets.mic_icon} alt='Mic Icon' />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt='Send Icon' /> : null}
                        </div>
                    </div>

                    <p className='bottom-info'>
                        This AI may display inaccurate info, so double-check its results.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
