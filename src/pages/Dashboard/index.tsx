import { Background } from '../../components/Background';
import { Parceiros } from '../../components/Parceiros';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';


import {
    Container,
    Content,
    TextContent,
    Title
} from './styles';

export function Dashboard() {
    return (
        <>
            <Container>
                <Content>
                    <TextContent>
                        <Title>Certificado Digital</Title>
                        <text>Lorem ipsum dolor sit amet. Ut culpa suscipit qui atque tenetur et quidem
                            illo ut dignissimos architecto nam consequatur
                            iure sit reprehenderit vero ea omnis exercitationem.
                            Et recusandae reprehenderit est laboriosam assumenda qui deleniti
                            consequatur nam quod accusamus est perferendis voluptas.</text>
                            <button>Botão</button>
                    </TextContent>
                </Content>
            </Container>
            <Parceiros />
        </>
    )
}