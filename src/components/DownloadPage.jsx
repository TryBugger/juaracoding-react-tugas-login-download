import React from "react";

const DownloadPage = (props) => {

    let fileDownloads = [
        {id: 1, "nama": "JavaScript", "filepath": "javascriptLogo.png"},
        {id: 2, "nama": "React", "filepath": "react.svg"},
        {id: 3, "nama": "Java", "filepath": "javaLogo.png"},
        {id: 4, "nama": "Python", "filepath": "pythonLogo.png"},
        {id: 5, "nama": "TensorFlow", "filepath": "tensorflowLogo.svg"},
        {id: 6, "nama": "C++", "filepath": "C++Logo.png"},
    ]

    const clickDownload = (nama) => {
        alert(`Berhasil Mengunduh File Gambar ${nama}`)
    }

    return (
        <>
            <h2>Selamat Datang, {props.username}</h2>

            <table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Gambar</th>
                        <th>Tombol Download</th>
                    </tr>
                </thead>

                <tbody>
                    {fileDownloads.map((file) => (
                        <tr key={file.id}>
                            <td>{file.nama}</td>
                            <td>
                                <img src={"/src/assets/" + file.filepath} alt={file.nama + " Logo"} />
                            </td>
                            <td>
                                <button onClick={(nama) => clickDownload(file.nama)}>Unduh File</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

DownloadPage.defaultProps = {
    username: "Guest"
}

export default DownloadPage;