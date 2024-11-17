import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';
import GenerateService from './services/generateService';

function App() {
  async function handleDownloadPdf() {
    try {
      const response = await GenerateService.getPds();
      
      if (response) {
        // const file = new Blob([response.data], { type: 'application/pdf' });

        // const fileUrl = URL.createObjectURL(file);

        const link = document.createElement('a');
        link.href = response;
        link.download = 'downloaded.pdf';
        document.body.appendChild(link);
        
        link.click();
        
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }
  
  return (
   <Button onClick={handleDownloadPdf}>Download PDF</Button>
  );
}

export default App;
