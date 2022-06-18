import { useState } from 'react';
// @ts-ignore
import { FormBuilder } from '@ginkgo-bioworks/react-json-schema-form-builder';

function App() {
  const [schema, setSchema] = useState('');
  const [uischema, setUischema] = useState('');

  return (
    <div className="App">
      <button
        onClick={() => {
          const schemaJSON = JSON.parse(schema);
          // hack to download schema and uischema
          const blob = new Blob([schema], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${schemaJSON.title}.json`;
          link.click();
          URL.revokeObjectURL(url);

          const blob2 = new Blob([uischema], { type: 'application/json' });
          const url2 = URL.createObjectURL(blob2);
          const link2 = document.createElement('a');
          link2.href = url2;
          link2.download = `${schemaJSON.title}.uischema.json`;
          link2.click();
          URL.revokeObjectURL(url2);
        }}
      >
        Download Schemas
      </button>
      <FormBuilder
        schema={schema}
        uischema={uischema}
        onChange={(schema: any, uischema: any) => {
          setSchema(schema);
          setUischema(uischema);
        }}
        onSubmit={(schema: any, uischema: any) => {
          console.log('onSubmit');
        }}
      />
    </div>
  );
}

export default App;
