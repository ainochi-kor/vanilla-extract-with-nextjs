import { container, themeVars } from "@/styles/theme.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { AppProps } from "next/app";
import { PropsWithChildren } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container brandColor="pink" fontFamily="Arial">
      <Component className={container} {...pageProps} />
    </Container>
  );
}

interface ContainerProps {
  brandColor: string;
  fontFamily: string;
}
const Container: React.FC<ContainerProps & PropsWithChildren> = ({
  brandColor,
  fontFamily,
  children,
}) => (
  <section
    className={container}
    style={assignInlineVars(themeVars, {
      color: { brand: brandColor },
      font: { body: fontFamily },
    })}
  >
    {children}
  </section>
);
