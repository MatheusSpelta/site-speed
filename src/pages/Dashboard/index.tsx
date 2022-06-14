import { Background } from '../../components/Background';
import { Parceiros } from '../../components/Parceiros';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';


import {
    Container,
    Content
} from './styles';

export function Dashboard() {
    return (
        <>
            <Container>
                <Content>
                    <text>Dashboard</text>
                </Content>
            </Container>
            <Parceiros />
        </>
    )
}