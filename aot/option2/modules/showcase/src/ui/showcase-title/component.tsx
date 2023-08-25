import React, { FC, ReactNode } from "react"

interface Props {
    children: ReactNode;
}

export const ShowcaseTitle: FC<Props> = ({children}) => {
    return <h1>{children}</h1>
}