import React, { useState, useEffect } from 'react'
import './App.css'
import Crumb from './components/Crumb'
import Child from './components/Child'

function App() {

  // Load State Variables
  const serverURL = "http://localhost:8000/path/";
  const [path, setPath] = useState(['root']);
  const [pathObj, setPathObj] = useState({});

  // Fetch data from server
  useEffect(() => {

    fetch(serverURL + path.join("/"))
      .then(response => response.json())
      .then(data => setPathObj(data));

  }, [path]);

  // Handle Path Changes
  function handleCrumbClick(subPath) {
    setPath(subPath);
  }

  function handleChildClick(parentPath, childName) {
    setPath(parentPath.concat(['"' + childName + '"']));
  }

  // Display App
  return (
    <div className='appbody'>

      {/* Breadcrumbs */}
      <div className='crumbContainer'> 
        {path.map((value, index) => {
          return (<Crumb 
                    key={index}
                    pathTo={path.slice(0, index+1)}
                    name={value}
                    onClicked={handleCrumbClick}
                  />
          );
        })}
      </div>

      {/* Directory/File Contents */}
      <div className='contents'>
        { (pathObj.type === "dir") ? (
          pathObj.children.map((value, index) => {
            return (<Child 
                      key={index}
                      pathToParent={path}
                      name={value}
                      onClicked={handleChildClick}
                    />
            );
          })
        ) : (
          <div className='file'>
            <h1>THIS IS FILE:</h1>
            <h2>{path.at(-1)}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App