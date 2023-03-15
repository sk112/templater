import "./MarkdownEditor.css";
import { useState } from "react";

export default function MarkdownEditor() {
    const [content, setContent] = useState("");
    return (
        <div>
            <textarea
                className="text-editor"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={45}
                cols={100}
                onCopy={() => console.log("On copy!!")}
                onPaste={() => console.log("on paster!!")}
            />
        </div>
    );
}
