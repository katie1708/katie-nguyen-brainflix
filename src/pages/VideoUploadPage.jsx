import Header from '../components/Header.jsx'
import VideoUploadForm from '../components/VideoUpload/UploadVideoForm.jsx';
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function VideoUploadPage() {
    return (
        <>
            <Header />
            <VideoUploadForm />
        </>
    )
}

export default VideoUploadPage;