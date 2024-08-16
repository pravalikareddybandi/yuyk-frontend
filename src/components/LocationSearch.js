import React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
// react icons
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';

const LocationSearch = () => {
  return (
    <Paper
      sx={{
        borderRadius: 20,
        mx: 'auto',
        width: 'fit-content',
        padding: '4px 40px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
      }}
      elevation={3}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" sx={{ height: '32px' }} />}
        sx={{
          alignItems: 'center',
          height: '56px',
          
        }}
      >
        {/* Where Section */}
        <Button
          sx={{
            flex: 4,
            justifyContent: 'flex-start',
            padding: '0 16px', // Increased padding for more space
            textTransform: 'none',
            minWidth: 'auto',
            alignItems: 'center',
            flexDirection: 'column',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            borderRadius: 20,
            position: 'relative',
            border: '2px solid transparent', // Transparent border for layout consistency
            '&:hover': {
              backgroundColor: '#f0f0f0', // Light grey background on hover
              borderColor: '#ddd', // Border color on hover
            },
          }}
        >
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              lineHeight: 1.2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Where
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: '0.8rem',
              lineHeight: 1.2,
              marginTop: '2px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Search destinations
          </Typography>
        </Button>

        {/* Check in, Check out, Who Sections */}
        {['Check in', 'Check out', 'Who'].map((label) => (
          <Button
            key={label}
            sx={{
              flex: 2,
              justifyContent: 'flex-start',
              padding: '0 16px', // Increased padding for more space
              textTransform: 'none',
              minWidth: 'auto',
              alignItems: 'center',
              flexDirection: 'column',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              borderRadius: 20,
              position: 'relative',
              border: '2px solid transparent', // Transparent border for layout consistency
              '&:hover': {
                backgroundColor: '#f0f0f0', // Light grey background on hover
                borderColor: '#ddd', // Border color on hover
              },
            }}
          >
            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                lineHeight: 1.2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {label}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '0.8rem',
                lineHeight: 1.2,
                marginTop: '2px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {label === 'Who' ? 'Add guests' : 'Add dates'}
            </Typography>
          </Button>
        ))}

        {/* Search Icon */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 1,
          }}
        >
          <IoSearchCircleSharp color={pink[500]} size={26} />
        </Box>
      </Stack>
      
    </Paper>
  );
};

export default LocationSearch;
