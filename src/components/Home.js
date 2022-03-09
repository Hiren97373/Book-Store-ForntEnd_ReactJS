import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Box display={"flex"} flexDirection="column" alignItems={"center"}>
                <Button LinkComponent={Link}
                    to='/books'
                    sx={{ margin: 15, background: 'orangered' }}
                    variant="contained"
                >
                    <Typography variant='h3'>View All Product</Typography>
                </Button>
            </Box>
        </div>
    )
}

export default Home