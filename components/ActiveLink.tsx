// rafc
import { CSSProperties, FC } from "react";

import { useRouter } from "next/router";

import Link from "next/link";




// mis estilos personalizados
const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: 'underline'
}


// creo la interfaz porque uso typescript para poder ser estrictos
interface Props {
    // defino las props que le paso a mi componente
    text: string;
    href: string;
}


// extiende de mis props
export const ActiveLink: FC<Props> = ({ text, href }) => {

    // asPath -> me sirve para ver en que pagina me encuentro
    const { asPath } = useRouter();
    // console.log(router);



    return (
        <Link href={href}>
            {/* le aplico el estilo si el asPath es igual a mi href aplique el estilo */}
            <a style={asPath === href ? style : undefined}>{text}</a>
        </Link >
    );
}
