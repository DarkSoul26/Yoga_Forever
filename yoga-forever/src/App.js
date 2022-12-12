import AdmissionForm from './Components/AdmissionForm'
import Payment from './Components/Payment';
import Header from './Components/Header';
import Completion from './Components/PaymentComplete'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AdmissionForm></AdmissionForm>
      <Payment></Payment>
      <Completion></Completion>
    </div>
  );
}

export default App;
