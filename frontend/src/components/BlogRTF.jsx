import { useCallback, useState, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";

const BlogRTF = () => {
    const [content, setContent] = useState("");
    const [logs, setLogs] = useState([]);
    const appendLog = useCallback(
        (message) => {
            console.log("logs = ", logs);
            const newLogs = [...logs, message];
            setLogs(newLogs);
        },
        [logs, setLogs]
    );

    const config = useMemo(
        () => ({
            readonly: false
        }),
        []
    );

    const onChange = useCallback(
        (newContent) => {
            appendLog(`onChange triggered with ${newContent}`);
        },
        [appendLog]
    );

    useEffect(() => {
        console.log("onChange = ", onChange);
    }, [onChange]);

    const onBlur = useCallback(
        (newContent) => {
            appendLog(`onBlur triggered with ${newContent}`);
            setContent(newContent);
        },
        [appendLog, setContent]
    );

    return (
        <div className="text-black">
            <JoditEditor
                value={content}
                config={config}
                tabIndex={1}
                onBlur={onBlur}
                onChange={onChange}
            />
        </div>
    );
}

export default BlogRTF