import "./main.css";
import { useEffect, useRef, useState } from "react";
import { MarkdownEditor } from "./Editor";

function Analyzer() {
    const [content, setContent] = useState("");
    const [variables, setVariables] = useState([]);

    useEffect(() => {
        setVariables(() => {
            let vars = content.match(/\[[^\]]+\]/g);
            if (vars !== undefined && vars !== null)
                return vars.map((e) => {
                    let chars = e.split("");
                    chars.splice(0, 1);
                    chars.splice(chars.length - 1, 1);
                    return chars.join("");
                });

            return [];
        });
    }, [content]);

    useEffect(() => {
        console.log("variables: ", variables);
    }, [variables]);

    return (
        <div className="container">
            <MarkdownEditor content={content} setContent={setContent} />
            <div className="variables-container">
                {variables !== undefined &&
                variables !== null &&
                variables.length > 0 ? (
                    variables.map((e) => <Variable value={e} />)
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

function Variable({ value }) {
    const ref = useRef();

    return (
        <div className="variable-field">
            <label>{value.charAt(0).toUpperCase() + value.slice(1)} </label>
            <code>{"{" + value + "}"}</code>
            <input
                className="field-input"
                ref={ref}
                placeholder={"Enter Value for `" + value + "`"}
            />
        </div>
    );
}

export { Analyzer };
