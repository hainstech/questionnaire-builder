import { useState } from 'react';
// @ts-ignore
import { FormBuilder } from '@ginkgo-bioworks/react-json-schema-form-builder';

function App() {
  const [schema, setSchema] = useState('');
  const [uischema, setUischema] = useState('');

  return (
    <div className="App">
      <FormBuilder
        schema={schema}
        uischema={uischema}
        onChange={(schema: any, uischema: any) => {
          setSchema(schema);
          setUischema(uischema);
        }}
      />
    </div>
  );
}

export default App;
