import { useState, useCallback, useEffect, useMemo } from "react";
import defaultblogpic from '../assets/Images/selectcover.png'
// import BlogRTF from './BlogRTF'
import axios from 'axios'
import JoditEditor from "jodit-react";
const BlogCreate = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
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
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const blogData = {
            title: title,
            category: category,
            content: content,
        };

        axios.post('http://127.0.0.1:8000/create/', blogData)
            .then(response => {
                // Handle successful response
                console.log(response.data);
            })
            .catch(error => {
                // Handle error response
                console.error(error);
            });
    };
    return (
        <div>
            <section className="body-font relative max-w-screen-lg mx-auto">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col w-full mb-3">
                        <h1 className="xl:text-3xl sm:text-2xl text-xl font-semibold mb-4 "> <span className='text-blue'>Create</span> and <span className='text-blue'>Customise</span> your blog here!</h1>
                        <img src={defaultblogpic} alt='default' className=" md:h-84 w-full mx-auto my-2 object-center object-fill rounded-lg shadow-md" />
                    </div>
                    <form onSubmit={handleFormSubmit} className="mx-auto">
                        <div className="flex flex-wrap -m-2">
                            {/* <div className='p-2 w-full right-0'>
                                <h2 className='pb-5'>Select a cover image for your blog</h2>
                                <input type='file' accept='image/*' alt='img' onChange={(e) => console.log(e.target.value)} />
                            </div> */}
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title of your blog' id="title" name="title" className="w-full bg-gray-200 rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder='Category of Blog' id="blogCategory" name="blogCategory" className="w-full bg-gray-200 rounded border text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative text-primary">
                                    <JoditEditor
                                        value={content}
                                        config={config}
                                        tabIndex={1}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button type="submit" className='flex mx-auto bg-blue px-3  rounded-md py-2 text-base text-white border border-blue mt-2'>Publish Blog</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default BlogCreate
