import { useState, useRef } from "react";

function RefExample() {
    const [stateValue, setStateValue] = useState("");
    const refValue = useRef("");

    const showValues = () => {
        alert(
            `State Value: ${stateValue}\nRef Value: ${refValue.current.value}`
        );
    };

    return (
        <div style={{ padding: "40px", fontFamily: "Arial" }}>
            <h1>State vs Ref with Inputs 🚀</h1>

            {/* State-controlled input */}
            {console.log('rendering----')}
            <div style={{ marginBottom: "20px" }}>
                <label>
                    State Input:{" "}
                    <input
                        type="text"
                        value={stateValue}
                        onChange={(e) => setStateValue(e.target.value)}
                        placeholder="Updates UI on every keystroke"
                        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
                    />
                </label>
                <p>Current State Value: {stateValue}</p>
            </div>

            {/* Ref-based input */}
            <div style={{ marginBottom: "20px" }}>
                <label>
                    Ref Input:{" "}
                    <input
                        type="text"
                        ref={refValue}
                        placeholder="Doesn't update UI until checked"
                        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
                    />
                </label>
                <p>Current Ref Value: (not shown automatically)</p>
            </div>

            <button
                onClick={showValues}
                style={{ padding: "10px 20px", fontSize: "16px" }}
            >
                Show Both Values
            </button>
        </div>
    );
}

export default RefExample;
