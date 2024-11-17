import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import axios from 'axios';

function App() {
  async function handleDownloadPdf() {
    try {
      const response = await axios.get('/endpoint', {
        responseType: 'json', 
      });
  
      const fileUrl = response.data.fileUrl;
  
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'downloaded.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }
  
  return (
   <Button onClick={handleDownloadPdf}>Download PDF</Button>
  );
}

export default App;
