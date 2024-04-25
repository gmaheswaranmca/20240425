// src/App.tsx
import { SisenseContextProvider } from '@sisense/sdk-ui';
import { SampleChart } from './components/SampleChart';
import BarChartExample from './components/BarChartExample';
import ColumnChartExample from './components/ColumnChartExample';
import LineChartExample from './components/LineChartExample';


function App() {
  return (
    <>
      <SisenseContextProvider
        url="https://madtechbidev.isocrates.com" // replace with the URL of your Sisense instance
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYxMDFjMDEwZTE0YjgwMDJkYzM4MjU0IiwiYXBpU2VjcmV0IjoiZGEzZjhkMjctYjQwZS0xMGQyLTkyNjEtNDVkNWUzNGY3ODQ1IiwiYWxsb3dlZFRlbmFudHMiOlsiNWZkZmFiOGQ2YTMyYTcwMDFhYzA3YTg4Il0sInRlbmFudElkIjoiNWZkZmFiOGQ2YTMyYTcwMDFhYzA3YTg4In0.Mpxj89js0BrJIaWnGuCOoqscbff7hJt-UArG2XrkMK8" // replace with the API token of your user account
      >
        <div className='container m-auto grid grid-cols-2'>
          <div>
            <SampleChart />
          </div>
          <div>
            <BarChartExample />
          </div>

          <div>
            <ColumnChartExample />
          </div>
          <div>
            <LineChartExample />
          </div>
        </div>
      </SisenseContextProvider>
    </>
  );
}

export default App;
