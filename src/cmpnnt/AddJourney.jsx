import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';

function AddJourney() {
    const [title, setTitle] = useState();
    const [userId, setuserId] = useState();
    const [description, setDescription] = useState();


    useEffect(() => {
        Axios({
            url: "https://journeyid.herokuapp.com/api/v1/userByEmail",
            params: { email: localStorage.getItem("email") }

        }).then(function (response) {
            const user = response.data.data;
            setuserId(user.id);
        })
    }, [])

    const handleInput = (e) => {
        setTitle(e.target.value);
    }

    const handleCkEditor = (event, editor) => {
        const data = editor.getData();
        setDescription(data);
    }



    const handlePost = (e) => {
        e.preventDefault();

        Axios({
            method: "post",
            url: "https://journeyid.herokuapp.com/api/v1/addJourney",
            data: { title, userId, description }
        }).then(function (response) {
            const data = response.data.data;
            console.log(data);
            alert("Journey Berhasil di tambahkan");
            title.target.value = "";

        })
            .catch(err => { console.log(err); alert("journey gagal ditambahkan") }).then(res => console.log(res));

    };
    console.log(description);

    return (
        <div className="wrapAddJourney">
            <h1>New Journey</h1>
            <div className="containerAddJourney">
                <form action="" onSubmit={(e) => handlePost(e)}>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" name="title" className="inputColoum" placeholder="Title...." onChange={(e) => handleInput(e)} />

                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Share your Journey.....</p>"
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}

                        config={
                            {
                                ckfinder: {
                                    uploadUrl: 'https://journeyid.herokuapp.com/api/v1/tempFileImg'
                                }
                            }
                        }
                        onChange={handleCkEditor}
                    />
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}

export default AddJourney
