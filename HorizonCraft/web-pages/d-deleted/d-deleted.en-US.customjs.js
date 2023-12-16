function navigateToInfo(objectName) {
  const objectDetails = {
    Object1: {name: 'Object 1', description: 'Description 1'},
    Object2: {name: 'Object 2', description: 'Description 2'},
    Object3: {name: 'Object 3', description: 'Description 3'},
    Object4: {name: 'Object 4', description: 'Description 4'},
    Object5: {name: 'Object 5', description: 'Description 5'},
    Object6: {name: 'Object 6', description: 'Description 6'},
    Object7: {name: 'Object 7', description: 'Description 7'},
    Object8: {name: 'Object 8', description: 'Description 8'},
    Object9: {name: 'Object 9', description: 'Description 9'},
  };

  const selectedObject = objectDetails[objectName];
  const infoPageUrl = `/infoPage.html?name=${selectedObject.name}&description=${selectedObject.description}`;
  window.location.href = infoPageUrl;
}
