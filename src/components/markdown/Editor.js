export function MarkdownEditor({ content, setContent }) {
    return (
        <div className="editor-container">
            <textarea
                className="text-editor"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onCopy={() => console.log("On copy!!")}
                onPaste={() => console.log("on paster!!")}
                placeholder="Type Here..."
            />
        </div>
    );
}
