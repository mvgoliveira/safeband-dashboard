import { Typography } from "@/components/typography";
import Image from "next/image";
import { ReactElement } from "react";

import { Container, ImageContainer, ImagesContainer } from "./styles";

interface IMonitoredCountProps {
    monitored: {
        name: string;
        imageUrl: string;
    }[];
}

export const MonitoredCount = ({ monitored }: IMonitoredCountProps): ReactElement => (
    <Container>
        <ImagesContainer>
            {monitored.map(user => (
                <ImageContainer>
                    <Image src={user.imageUrl} fill={true} objectFit="cover" alt={user.name} />
                </ImageContainer>
            ))}
        </ImagesContainer>

        <Typography
            tag="p"
            color="gray90"
            fontFamily="roboto"
            fontSize={{ xs: "fs75" }}
            fontWeight="regular"
        >
            {monitored.length} Monitorados
        </Typography>
    </Container>
);
