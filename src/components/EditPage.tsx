import { useState } from "react";
import { EditForm } from "./EditForm";
import { ProfilePreview } from "./ProfilePreview";

// Exportamos a interface para os outros componentes usarem
export interface Link {
    name: string;
    url: string;
}

export const EditPage = () => {
    const [name, setName] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [tiktok, setTiktok] = useState("");
    const [links, setLinks] = useState<Link[]>([]);

    const handleAddLink = () => setLinks([...links, { name: "", url: "" }]);

    const handleLinkChange = (index: number, field: keyof Link, value: string) => {
        const updatedLinks = [...links];
        updatedLinks[index] = { ...updatedLinks[index], [field]: value };
        setLinks(updatedLinks);
    };

    return (
        <div className="w-screen min-h-screen flex justify-center items-center bg-red-800 p-4 font-sans">
            <div className="flex flex-col w-full max-w-6xl bg-white rounded-xl overflow-hidden md:flex-row border border-slate-200">
                
                <EditForm 
                    name={name} setName={setName}
                    github={github} setGithub={setGithub}
                    linkedin={linkedin} setLinkedin={setLinkedin}
                    instagram={instagram} setInstagram={setInstagram}
                    facebook={facebook} setFacebook={setFacebook}
                    tiktok={tiktok} setTiktok={setTiktok}
                    links={links} onAddLink={handleAddLink} onLinkChange={handleLinkChange}
                />

                <ProfilePreview 
                    name={name} github={github} linkedin={linkedin}
                    instagram={instagram} tiktok={tiktok} facebook={facebook}
                    links={links}
                />

            </div>
        </div>
    );
};