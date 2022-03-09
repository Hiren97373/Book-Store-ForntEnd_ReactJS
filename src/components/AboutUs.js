import { Box, Typography } from '@mui/material'
import React from 'react'

function AboutUs() {
    return (
        <div>
            <Box display="flex" flexDirection={"column"} alignItems="center">
                <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
                    This is a CRUD Application
                </Typography>
                <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
                    BY MERN STACK
                </Typography>
            </Box>
        </div>
    )
}

export default AboutUs