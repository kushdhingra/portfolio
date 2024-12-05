import Card from "./card";
import { FaLink } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Roboto } from "next/font/google";

const font2 = Roboto({ weight: '400', subsets: ['latin'] });

export type ProjectProps = {
    name: string;
    desc: string;
    github: string;
    link: string;
    banner: string;
};

export function Project(props: ProjectProps) {
    return (
        <Card banner={props.banner || "https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg"}>
            <h1 className={`text-4xl ${font2.className}`}>{props.name}</h1>
            <em>{props.desc}</em>
            <div className="flex flex-row p-2 justify-center space-x-3">
                {
                    props.github &&
                    <a target="_blank" href={props.github} className="bg-white text-black p-2 rounded-full text-2xl hover:bg-gray-300 transition-colors">
                        <BsGithub />
                    </a>
                }
                {
                    props.link &&
                    <a target="_blank" href={props.link} className="bg-white text-black p-2 rounded-full text-2xl hover:bg-gray-300 transition-colors">
                        <FaLink />
                    </a>
                }
            </div>
        </Card>
    );
}

