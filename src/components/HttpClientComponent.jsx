import { useState } from "react";


const HttpClientComponent = () => {

    const [url, setUrl] = useState("");

    const [response, setResponse] = useState(null);

    const handleUrlChange = (e) => setUrl(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setResponse(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="">
                <div>
                    <div>
                        Request
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={url} onChange={handleUrlChange} />
                        <button type="submit">Request</button>
                    </form>
                </div>
                <div>
                    <div>
                        Response
                    </div>
                    <div className="response">
                        {JSON.stringify(response)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HttpClientComponent;