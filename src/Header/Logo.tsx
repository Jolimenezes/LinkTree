import orphieImg from "../Imgs/Orphie.jpg";

export function Logo() {
    return (
        <div className="flex items-center gap-3">
            <img 
                src={orphieImg} 
                alt="Logo Icon" 
                className="w-8 h-8 rounded-full object-cover border border-white/20"
            />
            <span className="text-xl font-bold tracking-tight">LinkTree</span>
        </div>
    );
}