import BookCard from './BookCard';
import Box from '@mui/material/Box';

export default function BookGrid({subject}) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            my: 3,
        }}>
            {subject.books.map((bk) => (
                <BookCard key={bk.id} title={bk.title} img={bk.img} price={bk.price} />
            ))}
        </Box>
    )
}