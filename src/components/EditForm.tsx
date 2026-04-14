import { Input } from "./Input";
import { type Link } from "./EditPage";

interface EditFormProps {
    name: string;
    setName: (val: string) => void;
    github: string;
    setGithub: (val: string) => void;
    linkedin: string;
    setLinkedin: (val: string) => void;
    instagram: string;
    setInstagram: (val: string) => void;
    facebook: string;
    setFacebook: (val: string) => void;
    tiktok: string;
    setTiktok: (val: string) => void;
    links: Link[];
    onAddLink: () => void;
    onLinkChange: (index: number, field: keyof Link, value: string) => void;
}

export const EditForm = (props: EditFormProps) => {
    return (
        <main className="w-full md:w-8/12 p-8 border-r border-slate-100">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Configurações</h2>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input name="Nome" id="name" value={props.name} onChange={(e) => props.setName(e.target.value)} placeholder="Seu nome" />
                    <Input name="GitHub" id="github" value={props.github} onChange={(e) => props.setGithub(e.target.value)} placeholder="Usuário GitHub" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Input name="Linkedin" id="linkedin" value={props.linkedin} onChange={(e) => props.setLinkedin(e.target.value)} placeholder="User" />
                    <Input name="Instagram" id="instagram" value={props.instagram} onChange={(e) => props.setInstagram(e.target.value)} placeholder="User" />
                    <Input name="TikTok" id="tiktok" value={props.tiktok} onChange={(e) => props.setTiktok(e.target.value)} placeholder="User" />
                    <Input name="Facebook" id="facebook" value={props.facebook} onChange={(e) => props.setFacebook(e.target.value)} placeholder="User" />
                </div>

                <div className="pt-4 space-y-4">
                    <h3 className="font-medium text-slate-700">Links Adicionais</h3>
                    {props.links.map((link, index) => (
                        <div key={index} className="flex gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                            <Input name={`Título ${index + 1}`} id={`title-${index}`} value={link.name} onChange={(e) => props.onLinkChange(index, "name", e.target.value)} placeholder="Ex: Portfólio" />
                            <Input name="URL" id={`url-${index}`} value={link.url} onChange={(e) => props.onLinkChange(index, "url", e.target.value)} placeholder="https://..." />
                        </div>
                    ))}
                    
                    <button type="button" onClick={props.onAddLink} className="w-full py-2 border border-slate-300 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                        + Adicionar Link
                    </button>
                </div>
            </form>
        </main>
    );
};