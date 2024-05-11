import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (<>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 min-h-full min-w-full">
        <Card className='shadow'>
      <CardContent>
        <p id="credit" >
        Credit Card Payment
        </p>
        <Typography variant="h5" component="div">
          Credit history:
        </Typography>
        
        <Typography variant="body2">
          Invoice Data:
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button aria-label="learn more Credit Card Payment" size="small">Know More</Button>
      </CardActions>
    </Card>

    <Card className='shadow'>
      <CardContent>
        <p id="payment" >
          Loan Payment:
        </p>
        <Typography variant="h5" component="div">
          All bank related loans:
        </Typography>
        
        <Typography variant="body2">
          Invoice Data:
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button  aria-label="learn more  Loan Payment" size="small">know More</Button>
      </CardActions>
    </Card>

    <Card className='shadow'>
      <CardContent>
        <p is="shop" >
          Shopping expenditure
        </p>
        <Typography variant="h5" component="div">
          All shopping related details:
        </Typography>
        
        <Typography variant="body2">
          Invoice Data:
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button aria-label="learn more Shopping expenditure" size="small">Know More</Button>
      </CardActions>
    </Card>


    </div>
  </>

    
  );
}