import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import './About.css';
interface IProps {
    name: string
}
function About(props: IProps) {
    const [md, setMd] = useState('');
    const [familyMember, setFamilyMember] = useState('');
    const [imageFile, setImageFile] = useState('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // @ts-ignore
    useEffect(() => {
        if (props.name) {
            const name = props.name.toLowerCase();
            setFamilyMember(name);
            setImageFile(require(`../../data/images/${name}.JPG`));
            // @ts-ignore
            async function fetchData() {
                const file = await import(`../../data/about/${name}/${name}.md`);
                const response = await fetch(file.default);
                const text = await response.text();

                setMd(text);
            }
            // @ts-ignore
            async function fetchImage() {
                const file = await import(`../../data/images/${name}.JPG`);

                setImageFile(file.default);
            }

            fetchData();
            fetchImage();
        }
    }, [props.name])
    return (
        <div>
            <div> {imageFile && <img src={imageFile} alt={familyMember}/>} </div>
            <p> About {props.name}</p>
            <ReactMarkdown children={md}/>
        </div>
    )
}

export default About;