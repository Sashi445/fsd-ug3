import { useState } from "react";


const HttpClientComponent = () => {

    const [reqUrl, setReqUrl] = useState("");

    const [response, setResponse] = useState();

    const handleUrlChange = (e) => setReqUrl(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(reqUrl)
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
                        
                        <select name="reqType" id="" >
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                        </select>
                        <br />

                        <input type="text" value={reqUrl} onChange={handleUrlChange} style={{"width": "80%",}} />
                        <br />

                        <textarea name="body" id="" cols="30" rows="10"/>
                        <br />

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