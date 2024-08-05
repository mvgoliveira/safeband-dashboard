"use client";

import { Button } from "@/components/button";
import { Typography } from "@/components/typography";
import { UsersImageAndText } from "@/components/usersImageAndText";
import { Theme } from "@/themes";
import Image from "next/image";
import { ReactElement } from "react";
import { MdExpandMore, MdPersonAddAlt1 } from "react-icons/md";

import { ButtonsContainer, Container, Content, HeroContent, HeroImageContainer } from "./styles";

export default function Home(): ReactElement {
    return (
        <Container>
            <Content>
                <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 446 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <Typography
                            tag="span"
                            color="blue40"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs100" }}
                            fontWeight="medium"
                        >
                            SafeBand
                        </Typography>

                        <Typography
                            tag="h1"
                            color="black"
                            fontFamily="inter"
                            fontSize={{ xs: "fs400" }}
                            fontWeight="semibold"
                        >
                            A pulseira mais tecnológica para a saúde e segurança.
                        </Typography>
                    </div>

                    <div style={{ maxWidth: 323 }}>
                        <Typography
                            tag="p"
                            color="gray80"
                            fontFamily="roboto"
                            fontSize={{ xs: "fs75" }}
                            fontWeight="regular"
                        >
                            Monitore agora mesmo a saúde e segurança da sua família, amigos ou
                            pacientes!
                        </Typography>
                    </div>
                </div>

                <ButtonsContainer>
                    <Button variant="primary">
                        Abrir Dashboard <MdExpandMore size={12} color={Theme.colors.white} />
                    </Button>

                    <Button variant="secondary">
                        <MdPersonAddAlt1 size={12} color={Theme.colors.black} /> Novo monitorado
                    </Button>
                </ButtonsContainer>

                <UsersImageAndText
                    users={[
                        {
                            name: "Carlos Alberto de Sá",
                            imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
                        },
                        {
                            name: "João de Almeida Silva",
                            imageUrl: "https://xsgames.co/randomusers/assets/avatars/male/35.jpg",
                        },
                        {
                            name: "Violeta Silva de Sá",
                            imageUrl: "https://xsgames.co/randomusers/assets/avatars/female/42.jpg",
                        },
                    ]}
                    text="3 Monitorados"
                />
            </Content>

            <HeroContent>
                <HeroImageContainer>
                    <Image
                        src={"https://i.ibb.co/FWZXmPD/Image-Container.webp"}
                        fill={true}
                        objectFit="cover"
                        alt={"Hero Image"}
                    />
                </HeroImageContainer>
            </HeroContent>
        </Container>
    );
}
