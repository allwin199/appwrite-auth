import React from "react";

type Props = {
    img: string;
    alt?: string;
};

const Avatar = ({ img, alt }: Props) => {
    return (
        <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
            <div className="absolute inset-0">
                {/* eslint-disable @next/next/no-img-element */}
                <img src={img} alt={alt} />
            </div>
        </div>
    );
};

export default Avatar;
