import React from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'
function Navbar() {
    
        return (
            <div style={{
                display: 'flex',
                justifyContent: "space-between",
                padding: 4,
                zIndex: 1
            }}>
                <div style={{ cursor: "pointer" }} onClick={() => {
                    navigate("/")
                }} >
    
                    <Typography >Welcome Admin</Typography>
    
                </div>
    
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: 10 }}>
                        <Button variant="contained"
                            onClick={() => {
                                navigate("/signup")
                            }}>Signup</Button>
                    </div>
    
                    <div >
                        <Button variant="contained"
                            onClick={() => {
                                navigate("/signin")
                            }}>Signin</Button>
                    </div>
    
                </div>
            </div>
        )
}

export default Navbar