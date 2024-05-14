import Header from "../Components/Header";
import './Home.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import Image1 from '../assets/images/Science-education.jpg';
import Image2 from '../assets/images/Book-selling.jpg';
import Image3 from '../assets/images/onlineTest.png';
import Footer from "../Components/Footer";
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Header/>
            <Box sx={{
                my: 8.5,
            }}>
                <div className="bg-1">
                    <div className="heading">
                        <Typography variant="h4" sx={{
                            display: {xs: 'none', md: 'block'}
                        }}>Want to prepare for JEE/NEET ?</Typography>
                        <Typography variant="h5" sx={{
                            display: {xs: 'block', md: 'none'}
                        }}>Want to prepare for JEE/NEET ?</Typography>

                        <Typography variant="h6" sx={{
                            display: {xs: 'none', md: 'block'}
                        }}>Then you are at the right place.</Typography>
                        <Typography variant="h7" sx={{
                            display: {xs: 'block', md: 'none'}
                        }}>Then you are at the right place.</Typography>
                        <span className="hero-scroll" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">Scroll down <br /><a href="#services"><i className="fa fa-chevron-down bounce chevron"></i></a></span>
                    </div>
                    
                </div>
                <Box sx={{ my: 10}}>
                    <Typography variant="h4" sx={{
                        textAlign: 'center',
                        fontSize: 40,
                    }}><i>Services & More</i></Typography>
                    <Typography variant="h5" sx={{
                        textAlign: 'center',
                    }}>Just what you need</Typography>

                    <Box sx={{
                        width: '70%',
                        my: 5,
                        mx: 'auto',
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row'},
                        backgroundColor: "#e6e6e6",
                        }}
                    >
                        <Box sx={{width: {xs: '100%', md: '50%'}}}><img width='100%' height='100%' src={Image1} alt=""/></Box>
                        <Box sx={{width: {xs: '80%', md: '45%'}, m: 'auto', py: {xs: 2}}}>
                            <Typography sx={{textAlign: 'center'}} variant="h5">Book Store</Typography><br />
                            <Typography>Explore an extensive collection of JEE/NEET books from various coaching institutes, tailored for effective exam preparation, at our specialized bookstore section.</Typography><br /><br />
                            <center>
                                <Link to={'/bookStore'}><Button variant="contained" endIcon={<EastIcon/>}>
                                    Find More
                                </Button></Link>
                            </center>
                        </Box>
                    </Box>

                    <Box sx={{
                        width: '70%',
                        my: 5,
                        mx: 'auto',
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row-reverse'},
                        backgroundColor: "#e6e6e6",
                        }}
                    >
                        <Box sx={{width: {xs: '100%', md: '50%'}}}><img width='100%' height='100%' src={Image2} alt=""/></Box>
                        <Box sx={{width: {xs: '80%', md: '45%'}, m: 'auto', py: {xs: 2}}}>
                            <Typography sx={{textAlign: 'center'}} variant="h5">WT Seller</Typography><br />
                            <Typography>Easily list and sell your JEE/NEET books on our platform, connecting aspiring students with valuable resources from fellow sellers.</Typography><br /><br />
                            <center><Link to={'/wtSeller'}><Button variant="contained" endIcon={<EastIcon/>}>
                                Find More
                            </Button></Link></center>
                        </Box>
                    </Box>

                    <Box sx={{
                        width: '70%',
                        my: 5,
                        mx: 'auto',
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row'},
                        backgroundColor: "#e6e6e6",
                        }}
                    >
                        <Box sx={{width: {xs: '100%', md: '50%'}}}><img width='100%' height='100%' src={Image3} alt=""/></Box>
                        <Box sx={{width: {xs: '80%', md: '45%'}, m: 'auto', py: {xs: 2}}}>
                            <Typography sx={{textAlign: 'center'}} variant="h5">Test Series</Typography><br />
                            <Typography>Sharpen your skills with our weekly online test series, designed to emulate the JEE/NEET pattern and help you track your progress effectively.</Typography><br /><br />
                            <center><Link to={'/testSeries'}><Button variant="contained" endIcon={<EastIcon/>}>
                                Find More
                            </Button></Link></center>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div><Footer/></div>
        </div>
    )
}