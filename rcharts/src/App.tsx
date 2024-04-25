// src/App.tsx
import { SisenseContextProvider } from '@sisense/sdk-ui';
import { SampleChart } from './components/SampleChart';
import BarChartExample from './components/BarChartExample';
import ColumnChartExample from './components/ColumnChartExample';
import LineChartExample from './components/LineChartExample';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <SisenseContextProvider
        url="https://madtechbidev.isocrates.com" // replace with the URL of your Sisense instance
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYxMDFjMDEwZTE0YjgwMDJkYzM4MjU0IiwiYXBpU2VjcmV0IjoiZGEzZjhkMjctYjQwZS0xMGQyLTkyNjEtNDVkNWUzNGY3ODQ1IiwiYWxsb3dlZFRlbmFudHMiOlsiNWZkZmFiOGQ2YTMyYTcwMDFhYzA3YTg4Il0sInRlbmFudElkIjoiNWZkZmFiOGQ2YTMyYTcwMDFhYzA3YTg4In0.Mpxj89js0BrJIaWnGuCOoqscbff7hJt-UArG2XrkMK8" // replace with the API token of your user account
      >
        <div className='container'>
          <div className='row'>
        <div className='col-lg-6'>
           <SampleChart/>
        </div>
        <div className='col-lg-6'>
          <BarChartExample/>
        </div>
    
    </div>
    <div className='row'>
    <div className='col-lg-6'>
      <ColumnChartExample/>
    </div>
    <div className='col-lg-6'>
      <LineChartExample/>
    </div>
        </div>
        </div>
      </SisenseContextProvider>
    </>
  );
}

export default App;
