import React, { useEffect, useState } from "react";
import ReactJson from 'react-json-view';

export default function Config() {
    const [config, setConfig] = useState({});

    const updateConfig = (configData) => {
      setConfig(configData);

      fetch('/api/config', {method:'post', body: JSON.stringify(configData)})
      .then((res) => {
        console.log("res: ", res);
      });
    }

    useEffect(() => {
        fetch('/api/config')
        .then(res => res.json())
        .then(data => setConfig(data));
    }, []);
    
    return (
        <>
          <ReactJson
            src={config}
            onEdit={(edit) => { updateConfig(edit.updated_src); }}
          />
        </>
    );
}