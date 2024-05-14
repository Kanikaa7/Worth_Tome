import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function TestSeries() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
      
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
    ];
    return (
        <Box>
            <Header/>

            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'center',
                mt: 8.5,
                mx: 10,
            }}>
                <Box sx={{width: {xs: '100%', md: '50%'}}}><img width="100%" src="https://img.freepik.com/premium-vector/online-test-checking-answers-examination-test-quiz-student-test-employee-questionnaire-flat-vector-illustration-banner_128772-1833.jpg" alt="" /></Box>
                <Box sx={{width: {xs: '100%', md: '50%'}}}>
                    <Typography sx={{pt: {xs: 1, md: 24}, px: {xs: 1, md: 3}, textAlign: 'center', fontSize: {xs: '20', md: 28}}}>Ace Your JEE/NEET Preparation with Online Test Series.</Typography>
                </Box>
            </Box>

            <Box sx={{mt: 4}}>
                <Typography sx={{textAlign: 'center', textDecoration: 'underline', fontWeight: 600, fontSize: 34}}><i>Online Tests</i></Typography>

                <TableContainer component={Paper}>
                    <Table sx={{ width: {sx: 500, md: 1200}, m: {sx: 3, md:7} }} aria-label="caption table">
                        
                        <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <Footer/>
        </Box>
    )
}