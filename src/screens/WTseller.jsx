import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from "react";

export default function WTseller() {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box>
            <Header/>
            <Box sx={{
                mt: 8.5,
            }}>
                
                    <Box sx={{
                        width: {xs: '80%', md: '40%'},
                        mx: 'auto',
                        py: 8,
                    }}>
                    <form>
                        <Typography variant="h6" sx={{mb: 3}}>Book Details:</Typography>
                        <br />
                        <FormControl fullWidth>
                            <TextField id="BookTitle" label="Enter Your Book Title" variant="outlined" size="normal" />
                        </FormControl>
                        <br/> <br/><br />
                        <FormControl fullWidth>
                            <FormLabel id="BookDetails">Book Details</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Automatically; by just typing the ISBN number"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Enter book details manually" control={<Radio />} label="Enter book details manually" />
                                <FormControlLabel value="Automatically; by just typing the ISBN number" control={<Radio />} label="Automatically, by just typing the ISBN number" />
                            </RadioGroup>
                        </FormControl>
                        <br/> <br/>
                        <FormControl fullWidth>
                            <TextField id="ISBNno" label="Enter 13 Digit ISBN number" variant="outlined" size="normal"/>
                        </FormControl>
                        <br /><br /><br />
                        <FormControl fullWidth>
                            <FormLabel id="BookCondition">Book Condition</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="excellent" control={<Radio />} label="Excellent" />
                                <FormControlLabel value="good" control={<Radio />} label="Good" />
                                <FormControlLabel value="fair" control={<Radio />} label="Fair" />
                            </RadioGroup>
                        </FormControl>
                        <br /><br /><br />
                        <FormControl sx={{width: '50%'}}>
                            <InputLabel id="QA">Quantity Available</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="QAvailable"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                        <br /><br /><br /><br />

                        <hr />

                        <br /><br />
                        <Typography variant="h6" sx={{mb: 3}}>Pricing Details:</Typography>
                        <br />
                        <FormControl fullWidth>
                            <TextField id="BookPrice" label="Enter Your Book Price" variant="outlined" size="normal" />
                        </FormControl>
                        <br /><br /><br /><br />
                        <FormControl fullWidth>
                            <TextField id="ShippingCharges" label="Your Shipping Charges to Buyer" variant="outlined" size="normal" />
                        </FormControl>
                        <br /><br /><br /><br />
                        <FormControl fullWidth>
                            <FormLabel id="PaymentMode">Preferred Payment Mode</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Bank Account" control={<Radio />} label="Bank Account" />
                                <FormControlLabel value="UPI Number" control={<Radio />} label="UPI Number" />
                            </RadioGroup>
                        </FormControl>
                        <br /><br /><br />
                        <hr />

                        <br /><br />
                        <Typography variant="h6" sx={{mb: 3}}>Your Details:</Typography>
                        <br />
                        <FormControl fullWidth>
                            <TextField id="fullName" label="Enter Your Full Name" variant="outlined" size="normal" />
                        </FormControl>
                        <br /><br /><br />
                        <FormControl fullWidth>
                            <TextField id="email" label="Enter Your Email" variant="outlined" size="normal" />
                        </FormControl>
                        <br /><br /><br />
                        <FormControl fullWidth>
                            <TextField id="phnNumber" label="Phone Number" variant="outlined" size="normal" />
                        </FormControl>
                        <br /><br /><br />
                        <FormControl fullWidth>
                            <TextField id="pincode" label="Pincode" variant="outlined" size="normal" />
                        </FormControl>
                        <br /><br /><br /><br />
                        <Button variant="contained" type="submit">Sell Books</Button>

                    </form>
                    </Box>

            </Box>

            <Footer/>
        </Box>
    )
}