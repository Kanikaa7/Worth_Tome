import Box from '@mui/material/Box';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box sx={{backgroundColor: '#333', color: 'white'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                py: 2,
            }}>
                <FacebookOutlinedIcon sx={{mx: 1, color: 'lightgrey'}} />
                <InstagramIcon sx={{mx: 1, color: 'lightgrey'}}/>
                <LinkedInIcon sx={{mx: 1, color: 'lightgrey'}} />
            </Box>
            <Typography sx={{textAlign: 'center', py: 1}}>&copy; Worth Tome Private Limited</Typography>
            <Typography sx={{textAlign: 'center', py: 1}}>Privacy Terms</Typography>
        </Box>
    )
}