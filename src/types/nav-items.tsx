import type { ReactNode } from 'react';

export type NavItem = {
    id: string;
    title: string;
    icon: ReactNode;
    iconFilled: ReactNode;
    href?: string;
    isNew?: boolean;
};