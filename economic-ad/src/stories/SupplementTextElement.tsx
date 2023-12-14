import React from "react";

type TypeMessage = {
    isShow: boolean,
    message: string | React.ReactNode
}

const defaultParaphrase: TypeMessage = {
    isShow: false,
    message: ''
}

const defaultDisplayedError: TypeMessage = {
    isShow: false,
    message: ''
}

interface SupplementTextElementProps {
    paraphrase?: TypeMessage;
    displayedError?: TypeMessage;
    variableClassNameSupplement?: string;
    supplementRef?: React.RefObject<HTMLTextAreaElement>;
}

const SupplementTextElement = ({ paraphrase = defaultParaphrase, displayedError = defaultDisplayedError, variableClassNameSupplement = '', supplementRef, ...props }: SupplementTextElementProps) => {

    return (
        <div>
            {paraphrase.isShow && <p className={variableClassNameSupplement}>{paraphrase.message}</p>}
            {displayedError.isShow && <p className={variableClassNameSupplement}>{displayedError.message}</p>}
        </div>
    )
}


export type {
    TypeMessage,
    SupplementTextElementProps
}

export {
    SupplementTextElement
}

export default SupplementTextElement