export const DO_SOMETHING      = "DO_SOMETHING";
export const POPULATE_DATAROWS = "POPULATE_DATAROWS";
export const SELECT_HIGHLIGHT  = "SELECT_HIGHLIGHT";
export const DESELECT_HIGHLIGHT = "DESELECT_HIGHLIGHT";
export const POPULATE_DATAROWS_ALL = "POPULATE_DATAROWS_ALL";

export function populateInitialData(startingData) {
  return {
    type: POPULATE_DATAROWS,
    dataRows: startingData    
  }
}

//Used when a person clicks on the "Select"" button on the left side
//of the graph.
export function selectItemToHighlight(indexOfItem) {
    return {
      type: SELECT_HIGHLIGHT,
      key: indexOfItem
    }
}

//Simply traverses the state tree and removes any indication of wanting to 
//highlight items.
export function deselectItemToHighlight() {
  return {
    type: DESELECT_HIGHLIGHT
  }
}

//For initial page render when the page 
export function populateTableWithAllData() {
  return {
    type: POPULATE_DATAROWS_ALL
  }
}
