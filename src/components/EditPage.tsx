import { useState } from 'react';
import { Input } from './Input';

interface ILink {
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

    const [links, setLinks] = useState<ILink[]>([]);

    const handleAddLink = () => {
        setLinks([...links, { name: "", url: "" }]);
    };

    const handleLinkChange = (index: number, field: keyof ILink, value: string) => {
        const updateLinks = [...links];
        updateLinks[index] = { ...updateLinks[index], [field]: value };
        setLinks(updateLinks);
    };

    return (
        <div className="w-screen min-h-screen flex justify-center items-center font-display bg-red-800 p-4">
            <div className="flex flex-col w-full max-w-6xl bg-white rounded-xl overflow-hidden md:flex-row shadow-2xl">
                
                <main className="w-full md:w-8/12 p-8 sm:p-12">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-slate-900">Editar Perfil</h2>
                        <p className="text-slate-500">Personalize seus links e informações básicas.</p>
                    </div>

                    <form className='space-y-6' onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input 
                                name="Nome" 
                                id="name"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder='Digite seu nome' 
                            />
                            <Input 
                                name='GitHub' 
                                id="github"
                                value={github} 
                                onChange={(e) => setGithub(e.target.value)} 
                                placeholder='Ex: flavinhos775' 
                            />
                        </div>

                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                            <Input name='Linkedin' id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder='User' />
                            <Input name='Instagram' id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} placeholder='User' />
                            <Input name='Facebook' id="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} placeholder='User' />
                            <Input name='TikTok' id="tiktok" value={tiktok} onChange={(e) => setTiktok(e.target.value)} placeholder='User' />
                        </div>

                        <hr className="border-slate-100" />

                        <div className='space-y-4'>
                            <h3 className="font-semibold text-slate-700">Links Extras</h3>
                            {links.map((link, index) => (
                                <div key={index} className='flex flex-col sm:flex-row gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100'>
                                    <Input
                                        name={`Título ${index + 1}`}
                                        id={`title-${index}`}
                                        value={link.name}
                                        onChange={(e) => handleLinkChange(index, "name", e.target.value)}
                                        placeholder='Ex: Portfólio'
                                    />
                                    <Input
                                        name="URL"
                                        id={`url-${index}`}
                                        value={link.url}
                                        onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                                        placeholder='https://...'
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={handleAddLink} className='w-full py-3 border-2 border-dashed border-slate-300 text-slate-500 rounded-lg hover:bg-slate-50 transition-colors font-medium'>
                                + Adicionar novo link
                            </button>
                        </div>
                    </form>
                </main>

                <aside className="w-full md:w-4/12 bg-slate-50 p-8 flex flex-col items-center border-l border-slate-100">
                    <div className="w-24 h-24 bg-red-800 rounded-full mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{name || "Seu Nome"}</h2>
                    <p className="text-slate-500 text-sm mb-8">{github ? `@${github}` : "@usuario"}</p>
                    
                    <ul className="w-full space-y-3">
                        {github && (
                            <li>
                                
                                <a 
                                    href={`https://github.com/${github}`} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="block w-full py-3 px-4 bg-slate-900 text-white rounded-lg font-medium text-sm transition-transform hover:scale-105"
                                >
                                    Meu GitHub
                                </a>
                            </li>
                        )}

                        {links.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={link.url.startsWith('http') ? link.url : `https://${link.url}`} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="block w-full py-3 px-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium text-sm transition-transform hover:scale-105 shadow-sm"
                                >
                                    {link.name || `Link Extra ${index + 1}`}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};