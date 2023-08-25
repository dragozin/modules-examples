import { FC, ReactNode } from "react";

import styles from './styles.module.css';

interface Props {
    children: ReactNode;
}

export const ShowcaseTitle: FC<Props> = ({children}) => (<h1 className={styles.root}>{children}</h1>)