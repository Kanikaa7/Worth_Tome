import * as React from 'react';
import './BookStore.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BookGrid from '../Components/BookGrid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BookStore() {

    let Maths = {
        label: 'Mathematics',
        books: [
        {title: 'XII PW Mathematics', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0ysA6GKD3IS2pW3SqeEUMVPLvAt3AQ5i2H26YjUqjw&s", price: 15, id: 1},
        {title: 'XI PW Mathematics', img: "https://m.media-amazon.com/images/I/51P3zdJgfEL.jpg", price: 14, id: 2},
        {title: 'XII Allen Mathematics', img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/0/b/l/cbse-maths-topicwise-solved-papers-from-previous-years-for-class-original-imags566tfzvpkqh.jpeg?q=90&crop=false", price: 18, id: 3},
        {title: 'Allen HandBook Mathematics', img: "https://m.media-amazon.com/images/I/71lvmzbuvFL._AC_UF1000,1000_QL80_.jpg", price: 15, id: 4}]
    };
    let Physics = {
        label: 'Physics',
        books: [
        {title: 'PW Physics XII', img: "https://m.media-amazon.com/images/I/51P2lRc-WyL._AC_UF1000,1000_QL80_.jpg", price: 12, id: 1},
        {title: 'PW Physics XI', img: "https://m.media-amazon.com/images/I/51MwtoGWbmL._AC_UF1000,1000_QL80_.jpg", price: 9, id: 2},
        {title: 'Allen Extra Edge Physics', img: "https://m.media-amazon.com/images/I/51YZ408NPgL._AC_UF1000,1000_QL80_.jpg", price: 16, id: 3},
        {title: 'XII and XI Allen Physics', img: "https://rukminim2.flixcart.com/image/850/1000/kcuug7k0/regionalbooks/h/y/q/allen-physics-study-material-for-11th-and-12th-classroom-original-imaftweh4udqnehs.jpeg?q=90&crop=false", price: 13, id: 4}]
    };
    let Chemistry = {
        label: 'Chemistry',
        books: [
        {title: 'PW Chemistry XII', img: "https://images-eu.ssl-images-amazon.com/images/I/71d8Oo5tePL._AC_UL210_SR210,210_.jpg", price: 8, id: 1},
        {title: 'PW Chemistry XI', img: "https://www.clankart.com/user-uploads/advert/JEE_Modules_for_Class_11th_quotPWquot__New_Books1690916561932.jpg", price: 10, id: 2},
        {title: 'Extra Edge Allen Chemistry', img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/5/z/t/allen-chemistry-extra-edge-book-for-neet-ug-in-english-original-imagsf6vhczrtbzz.jpeg?q=20&crop=false", price: 11, id: 3},
        {title: 'XI Allen Chemistry', img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/7/p/0/allen-chemistry-ncr-class-11-ncert-complete-revision-for-neet-ug-original-imagvfhgq3utthnc.jpeg?q=90&crop=false", price: 10, id: 4}
    ]};
    let Biology = {
        label: 'Biology',
        books: [
        {title: 'NCERT Punch PW Biology', img: "https://m.media-amazon.com/images/I/61zFXMKyndL._AC_UF1000,1000_QL80_.jpg", price: 13, id: 1},
        {title: 'XII Resonance Biology', img: "https://rukminim2.flixcart.com/image/850/1000/regionalbooks/z/g/f/botany-biology-module-for-neet-aiims-class-xii-original-imaek9mancnascfp.jpeg?q=20&crop=false", price: 11, id: 2},
        {title: 'Allen Biology XII', img: "https://m.media-amazon.com/images/I/41Gug1iq+KL._SX342_SY445_.jpg", price: 14, id: 3},
        {title: 'Allen Biology XI', img: "https://m.media-amazon.com/images/I/71BQCVa5qUL._AC_UF1000,1000_QL80_.jpg", price: 11, id: 4}
    ]};

    let subs = [{key: 1, s: Maths}, 
        {key: 2, s: Physics}, 
        {key: 3, s: Chemistry}, 
        {key: 4, s: Biology},
    ];

    const [sub, setSub] = React.useState(1);

    const handleChange = (event) => {
        setSub(event.target.value);
    };

    return(
        <Box>
            <Header/>
            <Box sx={{
                mt: 8.5,
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row'},
                    width: '75%',
                    mx: 'auto',
                    mt: 12,
                    mb: 4,
                    py: 2,
                }}>
                    <Box sx={{width: {xs: '100%', md: '35%'}}}><img className="introImg" width="100%" height="100%" src="https://ndl.iitkgp.ac.in/img/landing-page/slider6.jpg" alt=""/></Box>
                    <Box sx={{width: {xs: '100%', md: '65%'}}}>
                        <Typography variant='h6' sx={{pt: {xs: 1, md: 10}, px: {xs: 1, md: 3}, textAlign: 'center', fontWeight: 530}}>All types of resources, such as Modules, HandBooks, Lecture Notes, Question Papers, Solutions, etc. available</Typography>
                    </Box>
                </Box>

                <Box sx={{ width: '60%', mx: 'auto', my: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sub}
                            label="Subject"
                            onChange={handleChange}
                        >{
                            subs.map((subject) => (
                                <MenuItem key={subject.key} value={subject.key}>{subject.s.label}</MenuItem>
                            ))
                        }
                        </Select>
                    </FormControl>
                </Box>

                
                    {subs.map((subj) => (
                        <Box key={subj.key}>
                            {subj.key===sub && <BookGrid subject={subj.s} />}
                        </Box>
                    ))}
                

            </Box>
            <Footer/>
        </Box>
    )
}