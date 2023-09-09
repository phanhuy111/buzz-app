import { RootState } from "store";
import { LocaleState } from "store/slices/localeSlice";

import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";

import en from "../lang/en.json";

const messages: { [key: string]: any } = {
    en,
};

export const IntlConnectProvider = ({ children }: { children: React.ReactNode }) => {
    const { locale } = useSelector((state: RootState) => state.locale) as LocaleState;

    return (
        <IntlProvider key={locale} messages={messages?.[locale]} locale={locale}>
            {children}
        </IntlProvider>
    );
};
