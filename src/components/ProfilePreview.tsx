import { SocialMediaLink } from "./SocialMediaLink";
import { SiFacebook, SiGithub, SiInstagram, SiTiktok } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { type Link } from "./EditPage";

interface ProfilePreviewProps {
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    links: Link[];
}

export const ProfilePreview = ({ name, github, linkedin, instagram, tiktok, facebook, links }: ProfilePreviewProps) => {
    return (
        <aside className="w-full md:w-4/12 bg-slate-50 p-8 flex flex-col items-center">
            <div className="w-20 h-20 bg-red-800 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
            </div>
            
            <h2 className="text-xl font-bold text-slate-900 mb-4">{name || "Seu Nome"}</h2>

            <ul className="flex flex-wrap gap-3 justify-center mb-6">
                {github && (
                    <li><SocialMediaLink link={`https://github.com/${github}`}><SiGithub className="text-xl" /></SocialMediaLink></li>
                )}
                {linkedin && (
                    <li><SocialMediaLink link={`https://linkedin.com/in/${linkedin}`}><SlSocialLinkedin className="text-xl" /></SocialMediaLink></li>
                )}
                {instagram && (
                    <li><SocialMediaLink link={`https://instagram.com/${instagram}`}><SiInstagram className="text-xl" /></SocialMediaLink></li>
                )}
                {tiktok && (
                    <li><SocialMediaLink link={`https://tiktok.com/@${tiktok}`}><SiTiktok className="text-xl" /></SocialMediaLink></li>
                )}
                {facebook && (
                    <li><SocialMediaLink link={`https://facebook.com/${facebook}`}><SiFacebook className="text-xl" /></SocialMediaLink></li>
                )}
            </ul>

            <div className="w-full space-y-2">
                {links.map((link, index) => (
                    <a 
                        key={index}
                        href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full py-2 px-4 bg-white border border-slate-200 text-center text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100 transition-colors"
                    >
                        {link.name || `Link ${index + 1}`}
                    </a>
                ))}
            </div>
        </aside>
    );
};