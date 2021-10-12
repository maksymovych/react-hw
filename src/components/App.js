import { FormProvider } from "../context/Context";
import { reducer, initialState } from "../reducer/reducer";
import Forms from "./forms/Forms";

function App() {
  return (
    <FormProvider reducer={reducer} initialState={initialState}>
      <Forms />
    </FormProvider>
  );
}

export default App;

//??? Лиля, как предотвратить обновления полей при изменении темы.
//??? Если данные еще не "засабмичены", то при изменении темы все стирается с полей((