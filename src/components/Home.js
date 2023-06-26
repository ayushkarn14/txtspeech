import "./Home.css";
import { useSpeechSynthesis } from "react-speech-kit";
import React, { useState } from "react";
function Home() {
    const [text, setText] = useState("");
    const { speak } = useSpeechSynthesis();
    const handleOnClick = () => {
        console.log(text);
        speak({ text: text });
    };
    return (
        <>
            <div
                style={{
                    width: "100vw",
                    backgroundColor: "#eaeaea",
                    height: "100vh",
                    overflowY: "scroll",
                }}
            >
                <div
                    style={{
                        width: "90vw",
                        height: "80vh",
                        backgroundColor: "white",
                        border: "solid",
                        borderWidth: "2px",
                        borderRadius: "10px",
                        position: "relative",
                        top: "5vh",
                        left: "5vw",
                        borderColor: "black",
                        overflowY: "hidden",
                    }}
                >
                    <div className="row" style={{ overflowY: "hidden" }}>
                        <div
                            className="col-lg-12"
                            style={{ height: "50vh", overflowY: "hidden" }}
                        >
                            <div
                                style={{
                                    width: "70vw",
                                    height: "40vh",
                                    position: "absolute",
                                    top: "57%",
                                    left: "50%",
                                    transform: "translate(-50%, -100%)",
                                }}
                            >
                                <textarea
                                    type="text"
                                    style={{
                                        // margin: "5vw",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-md-12" style={{ height: "90vh" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "80%",
                                    left: "50%",
                                    transform: "translate(-50%, -100%)",
                                }}
                            >
                                <a
                                    className="btn primary"
                                    onClick={() => {
                                        handleOnClick();
                                    }}
                                >
                                    Read
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        // fontSize: "10px",
                        position: "relative",
                        top: "10vh",
                        textAlign: "center",
                    }}
                >
                    by Ayush Karn 💜
                </div>
            </div>
        </>
    );
}
export default Home;
