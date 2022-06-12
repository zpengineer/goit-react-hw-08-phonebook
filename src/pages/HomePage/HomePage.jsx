import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" component="h1">
          New website coming soon 🥳
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
