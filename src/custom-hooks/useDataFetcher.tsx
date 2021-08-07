import React, {useEffect, useState} from "react";

function useDataFetcher(imageFilePath: string, markdownFilePath: string) {
    const [md, setMd] = useState('');
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
            // @ts-ignore
            async function fetchData() {
                const file = await import(`../${markdownFilePath}`);
                const response = await fetch(file.default);
                const text = await response.text();

                setMd(text);
            }
            // @ts-ignore
            async function fetchImage() {
                const file = await import(`../${imageFilePath}`);

                setImageFile(file.default);
            }

            fetchData();
            fetchImage();
    })

    return [md, imageFile]
}

export default useDataFetcher