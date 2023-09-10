import { FC, useEffect, useRef } from "react";

interface ProfRatingBarProps {
    param: string;
    value: number;
}

const ProfRatingBar: FC<ProfRatingBarProps> = ({
    value
}) => {

    const colorScheme = ["bg-[#ff4545]", "bg-[#ffa534]", "bg-[#ffe234]", "bg-[#b7dd29]", "bg-[#57e32c]"];
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(()=> {
        requestAnimationFrame(() => {
            if (!containerRef.current) return;        
            containerRef.current.style.width = `${Math.floor(value*20)}%`;
          });
    },[])


    return (
        <div className={`h-12 border-2 border-[#00000095] rounded flex-grow`}>
            <div ref={containerRef} className={`h-full w-1/2 ${colorScheme[Math.floor(value) - 1 > 0 ? Math.floor(value) - 1 : 0]}`}></div>
        </div>
    )
}

export default ProfRatingBar;