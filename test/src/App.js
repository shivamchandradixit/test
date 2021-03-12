import './App.css';
import IncAndDec from "./increament&decreamnet";
function App() {
  let arr= ['ROOMS','ADULTS','CHILDREN']
  return (
    <div>
      <table>
        <tbody>
        {arr.map( (value) =>{
        return <tr>
          <td><b>{value}</b></td>&nbsp;&nbsp;&nbsp;
          <td><IncAndDec forSelected={value}/></td>
        </tr>
      })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
